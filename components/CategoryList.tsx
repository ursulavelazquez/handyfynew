import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ViewStyle } from 'react-native';

type Category = {
  id: string;
  name: string;
  icon: string;
};

interface CategoryListProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (id: string | null) => void;
  containerStyle?: ViewStyle;
}

const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  containerStyle,
}) => {
  return (
    <FlatList
      data={[{ id: 'all', name: 'Todos', icon: 'https://i.ibb.co/2SRvFg0/all-categories.png' }, ...categories]}
      keyExtractor={item => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[styles.categoriesList, containerStyle]}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={[
            styles.categoryItem,
            selectedCategory === item.id && styles.selectedCategoryItem
          ]}
          onPress={() => onSelectCategory(item.id === 'all' ? null : item.id)}
        >
          <View style={[
            styles.iconContainer,
            selectedCategory === item.id && styles.selectedIconContainer
          ]}>
            <Image
              source={{ uri: item.icon }}
              style={styles.categoryIcon}
              resizeMode="contain"
            />
          </View>
          <Text style={[
            styles.categoryName,
            selectedCategory === item.id && styles.selectedCategoryName
          ]}>
            {item.name}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  categoriesList: {
    paddingHorizontal: 24,
    paddingBottom: 8,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 16,
    marginBottom: 8,
  },
  selectedCategoryItem: {},
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  selectedIconContainer: {
    backgroundColor: 'rgba(0, 128, 128, 0.1)',
  },
  categoryIcon: {
    width: 32,
    height: 32,
  },
  categoryName: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: '#757575',
    textAlign: 'center',
  },
  selectedCategoryName: {
    color: '#008080',
  },
});

export default CategoryList;