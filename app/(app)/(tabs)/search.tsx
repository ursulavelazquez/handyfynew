import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Search, Filter, MapPin, X } from 'lucide-react-native';
import { mockServices, mockCategories } from '@/data/mockData';
import ServiceCard from '@/components/ServiceCard';
import CategoryList from '@/components/CategoryList';

const priceRanges = [
  { id: 1, label: 'Todos los precios', value: null },
  { id: 2, label: '$0 - $5,000', value: { min: 0, max: 5000 } },
  { id: 3, label: '$5,000 - $10,000', value: { min: 5000, max: 10000 } },
  { id: 4, label: '$10,000 - $20,000', value: { min: 10000, max: 20000 } },
  { id: 5, label: '$20,000+', value: { min: 20000, max: null } },
];

const ratings = [
  { id: 1, label: 'Todas las calificaciones', value: 0 },
  { id: 2, label: '4★ & más', value: 4 },
  { id: 3, label: '3★ & más', value: 3 },
  { id: 4, label: '2★ & más', value: 2 },
  { id: 5, label: '1★ & más', value: 1 },
];

export default function SearchScreen() {
  const router = useRouter();
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredServices, setFilteredServices] = useState(mockServices);
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState(priceRanges[0]);
  const [rating, setRating] = useState(ratings[0]);
  const [recentSearches, setRecentSearches] = useState(['Plomero', 'Electricista', 'Limpieza']);
  
  const handleSearch = (text: string) => {
    setSearchText(text);
    
    if (!text.trim()) {
      setFilteredServices(mockServices);
      return;
    }
    
    const filtered = mockServices.filter(service => {
      return (
        service.title.toLowerCase().includes(text.toLowerCase()) ||
        service.providerName.toLowerCase().includes(text.toLowerCase()) ||
        service.category.toLowerCase().includes(text.toLowerCase())
      );
    });
    
    setFilteredServices(filtered);
  };
  
  const applyFilters = () => {
    let filtered = mockServices;
    
    // Apply category filter
    if (selectedCategory) {
      filtered = filtered.filter(service => service.categoryId === selectedCategory);
    }
    
    // Apply price range filter
    if (priceRange.value) {
      filtered = filtered.filter(service => {
        const { min, max } = priceRange.value;
        if (max === null) {
          return service.price >= min;
        }
        return service.price >= min && service.price <= max;
      });
    }
    
    // Apply rating filter
    if (rating.value > 0) {
      filtered = filtered.filter(service => service.rating >= rating.value);
    }
    
    setFilteredServices(filtered);
    setShowFilters(false);
  };
  
  const resetFilters = () => {
    setSelectedCategory(null);
    setPriceRange(priceRanges[0]);
    setRating(ratings[0]);
    setFilteredServices(mockServices);
  };
  
  const addToRecentSearches = (text: string) => {
    if (!text.trim()) return;
    
    // Remove if already exists and add to the beginning
    const updated = [
      text,
      ...recentSearches.filter(item => item.toLowerCase() !== text.toLowerCase())
    ].slice(0, 5); // Keep only 5 recent searches
    
    setRecentSearches(updated);
    handleSearch(text);
  };
  
  const handleCategorySelect = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
    
    // Apply filters immediately when category changes
    let filtered = mockServices;
    
    if (categoryId) {
      filtered = filtered.filter(service => service.categoryId === categoryId);
    }
    
    setFilteredServices(filtered);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchBarContainer}>
          <Search size={20} color="#757575" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar servicios..."
            value={searchText}
            onChangeText={handleSearch}
            onSubmitEditing={() => addToRecentSearches(searchText)}
            returnKeyType="search"
            autoFocus
          />
          {searchText ? (
            <TouchableOpacity onPress={() => handleSearch('')}>
              <X size={20} color="#757575" />
            </TouchableOpacity>
          ) : null}
        </View>
        <TouchableOpacity 
          style={[styles.filterButton, showFilters && styles.filterButtonActive]}
          onPress={() => setShowFilters(!showFilters)}
        >
          <Filter size={20} color={showFilters ? '#FFFFFF' : '#008080'} />
        </TouchableOpacity>
      </View>
      
      {!searchText && !selectedCategory && !showFilters ? (
        <View style={styles.recentSearchesContainer}>
          <Text style={styles.recentSearchesTitle}>Búsquedas Recientes</Text>
          {recentSearches.map((search, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.recentSearchItem}
              onPress={() => {
                setSearchText(search);
                handleSearch(search);
              }}
            >
              <Text style={styles.recentSearchText}>{search}</Text>
              <TouchableOpacity 
                onPress={() => {
                  const updated = [...recentSearches];
                  updated.splice(index, 1);
                  setRecentSearches(updated);
                }}
              >
                <X size={16} color="#757575" />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
          
          <Text style={styles.categoriesTitle}>Categorías Populares</Text>
        </View>
      ) : null}
      
      {showFilters ? (
        <ScrollView style={styles.filtersContainer}>
          <Text style={styles.filterTitle}>Filtros</Text>
          
          <Text style={styles.filterSectionTitle}>Rango de precios</Text>
          {priceRanges.map(range => (
            <TouchableOpacity 
              key={range.id}
              style={[
                styles.filterOption,
                priceRange.id === range.id && styles.filterOptionActive
              ]}
              onPress={() => setPriceRange(range)}
            >
              <Text style={[
                styles.filterOptionText,
                priceRange.id === range.id && styles.filterOptionTextActive
              ]}>
                {range.label}
              </Text>
            </TouchableOpacity>
          ))}
          
          <Text style={styles.filterSectionTitle}>Calificación</Text>
          {ratings.map(r => (
            <TouchableOpacity 
              key={r.id}
              style={[
                styles.filterOption,
                rating.id === r.id && styles.filterOptionActive
              ]}
              onPress={() => setRating(r)}
            >
              <Text style={[
                styles.filterOptionText,
                rating.id === r.id && styles.filterOptionTextActive
              ]}>
                {r.label}
              </Text>
            </TouchableOpacity>
          ))}
          
          <View style={styles.filterActions}>
            <TouchableOpacity 
              style={styles.resetButton}
              onPress={resetFilters}
            >
              <Text style={styles.resetButtonText}>Reiniciar</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.applyButton}
              onPress={applyFilters}
            >
              <Text style={styles.applyButtonText}>Aplicar Filtros</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      ) : (
        <>
          <CategoryList 
            categories={mockCategories} 
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategorySelect}
            containerStyle={styles.categoryList}
          />
          
          {filteredServices.length > 0 ? (
            <FlatList
              data={filteredServices}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <ServiceCard 
                  service={item} 
                  onPress={() => router.push({
                    pathname: '/service-details',
                    params: { id: item.id }
                  })}
                />
              )}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.servicesList}
            />
          ) : (
            <View style={styles.noResultsContainer}>
              <Text style={styles.noResultsTitle}>No se encontraron resultados</Text>
              <Text style={styles.noResultsDescription}>
                Intenta con otra búsqueda o categoría.
              </Text>
            </View>
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  searchBarContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginRight: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#212121',
  },
  filterButton: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: 44,
    height: 44,
  },
  filterButtonActive: {
    backgroundColor: '#008080',
  },
  recentSearchesContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  recentSearchesTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#212121',
    marginBottom: 12,
  },
  recentSearchItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  recentSearchText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#212121',
  },
  categoriesTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#212121',
    marginTop: 24,
    marginBottom: 12,
  },
  categoryList: {
    paddingHorizontal: 24,
  },
  servicesList: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  noResultsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  noResultsTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#212121',
    marginBottom: 8,
  },
  noResultsDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#757575',
    textAlign: 'center',
  },
  filtersContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  filterTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    color: '#212121',
    marginBottom: 24,
  },
  filterSectionTitle: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: '#212121',
    marginBottom: 12,
    marginTop: 20,
  },
  filterOption: {
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
  filterOptionActive: {
    backgroundColor: 'rgba(0, 128, 128, 0.1)',
  },
  filterOptionText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#212121',
  },
  filterOptionTextActive: {
    fontFamily: 'Inter-Medium',
    color: '#008080',
  },
  filterActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
    marginBottom: 24,
  },
  resetButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    marginRight: 8,
  },
  resetButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#757575',
  },
  applyButton: {
    flex: 1,
    backgroundColor: '#008080',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  applyButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#FFFFFF',
  },
});