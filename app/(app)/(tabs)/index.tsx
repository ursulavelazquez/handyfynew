import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, RefreshControl, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Bell, MapPin, Search, Filter, Star } from 'lucide-react-native';
import { useAuth } from '@/contexts/AuthContext';
import CategoryList from '@/components/CategoryList';
import ServiceCard from '@/components/ServiceCard';
import { mockServices, mockCategories, mockRequests } from '@/data/mockData';

export default function HomeScreen() {
  const router = useRouter();
  const { user, userType } = useAuth();
  const [refreshing, setRefreshing] = useState(false);
  const [services, setServices] = useState(mockServices);
  const [requests, setRequests] = useState(mockRequests);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const isProvider = userType === 'provider';

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    // Simulate fetch delay
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  const filterServicesByCategory = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
    if (!categoryId) {
      setServices(mockServices);
    } else {
      setServices(mockServices.filter(service => service.categoryId === categoryId));
    }
  };

  const ClientHomeScreen = () => (
    <>
      <View style={styles.searchAndFilterContainer}>
        <TouchableOpacity 
          style={styles.searchBar}
          onPress={() => router.push('/search')}
        >
          <Search size={20} color="#757575" />
          <Text style={styles.searchPlaceholder}>Buscar servicios...</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Filter size={20} color="#008080" />
        </TouchableOpacity>
      </View>
      
      <CategoryList 
        categories={mockCategories} 
        selectedCategory={selectedCategory}
        onSelectCategory={filterServicesByCategory}
      />
      
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Servicios Populares</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>Ver todos</Text>
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={services}
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
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#008080" />
        }
      />
    </>
  );

  const ProviderHomeScreen = () => (
    <>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Solicitudes Nuevas</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>Ver todas</Text>
        </TouchableOpacity>
      </View>
      
      {requests.length > 0 ? (
        <FlatList
          data={requests}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.requestCard}
              onPress={() => router.push({
                pathname: '/service-details',
                params: { id: item.id, isRequest: true }
              })}
            >
              <View style={styles.requestHeader}>
                <Text style={styles.requestType}>{item.serviceType}</Text>
                <Text style={styles.requestTime}>{item.timeAgo}</Text>
              </View>
              
              <Text style={styles.requestDescription} numberOfLines={2}>
                {item.description}
              </Text>
              
              <View style={styles.requestFooter}>
                <View style={styles.requestLocation}>
                  <MapPin size={16} color="#757575" />
                  <Text style={styles.requestLocationText}>{item.location}</Text>
                </View>
                
                <View style={styles.requestPrice}>
                  <Text style={styles.requestPriceLabel}>Oferta:</Text>
                  <Text style={styles.requestPriceValue}>${item.price}</Text>
                </View>
              </View>
              
              <View style={styles.requestActions}>
                <TouchableOpacity style={styles.acceptButton}>
                  <Text style={styles.acceptButtonText}>Aceptar</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.rejectButton}>
                  <Text style={styles.rejectButtonText}>Rechazar</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.requestsList}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#008080" />
          }
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Image 
            source={{ uri: 'https://plus.unsplash.com/premium_vector-1731582098706-cb92f9272335?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} 
            style={styles.emptyImage} 
            resizeMode="contain"
          />
          <Text style={styles.emptyTitle}>No hay solicitudes nuevas</Text>
          <Text style={styles.emptyDescription}>
            Las solicitudes de servicio aparecerán aquí cuando estén disponibles.
          </Text>
        </View>
      )}
    </>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hola, {user?.name || 'Usuario'}</Text>
          <View style={styles.locationContainer}>
            <MapPin size={16} color="#757575" />
            <Text style={styles.locationText}>Buenos Aires, CABA</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.notificationButton}>
          <Bell size={24} color="#212121" />
          <View style={styles.notificationBadge} />
        </TouchableOpacity>
      </View>
      
      {isProvider ? <ProviderHomeScreen /> : <ClientHomeScreen />}
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  greeting: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#212121',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  locationText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#757575',
    marginLeft: 4,
  },
  notificationButton: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: '#008080',
  },
  searchAndFilterContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginRight: 12,
  },
  searchPlaceholder: {
    fontFamily: 'Inter-Regular',
    color: '#757575',
    marginLeft: 8,
    fontSize: 14,
  },
  filterButton: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: 44,
    height: 44,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#212121',
  },
  viewAllText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#008080',
  },
  servicesList: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  // Provider-specific styles
  requestCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  requestHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  requestType: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#212121',
  },
  requestTime: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#757575',
  },
  requestDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#212121',
    marginBottom: 12,
  },
  requestFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  requestLocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  requestLocationText: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: '#757575',
    marginLeft: 4,
  },
  requestPrice: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  requestPriceLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: '#757575',
    marginRight: 4,
  },
  requestPriceValue: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#008080',
  },
  requestActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  acceptButton: {
    flex: 1,
    backgroundColor: '#008080',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 8,
  },
  acceptButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#FFFFFF',
  },
  rejectButton: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    marginLeft: 8,
  },
  rejectButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#757575',
  },
  requestsList: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    paddingTop: 40,
  },
  emptyImage: {
    width: 180,
    height: 180,
    marginBottom: 24,
  },
  emptyTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#212121',
    marginBottom: 8,
  },
  emptyDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#757575',
    textAlign: 'center',
  },
});