import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { MapPin, Star } from 'lucide-react-native';

interface Service {
  id: number;
  title: string;
  category: string;
  categoryId: string;
  price: number;
  rating: number;
  image: string;
  providerName: string;
  providerAvatar: string;
  providerId: string;
  location: string;
  description: string;
  gallery?: string[];
  services?: string[];
  reviews?: {
    id: number;
    userName: string;
    userAvatar: string;
    rating: number;
    date: string;
    text: string;
  }[];
}

interface ServiceCardProps {
  service: Service;
  onPress: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: service.image }} style={styles.image} />
      
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title} numberOfLines={1}>{service.title}</Text>
          <View style={styles.ratingContainer}>
            <Star size={14} color="#FFC107" fill="#FFC107" />
            <Text style={styles.rating}>{service.rating}</Text>
          </View>
        </View>
        
        <View style={styles.providerContainer}>
          <Image source={{ uri: service.providerAvatar }} style={styles.providerAvatar} />
          <Text style={styles.providerName}>{service.providerName}</Text>
        </View>
        
        <View style={styles.footer}>
          <View style={styles.location}>
            <MapPin size={14} color="#757575" />
            <Text style={styles.locationText} numberOfLines={1}>{service.location}</Text>
          </View>
          
          <Text style={styles.price}>${service.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 100,
  },
  content: {
    flex: 1,
    padding: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#212121',
    flex: 1,
    marginRight: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF8E1',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  rating: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: '#FFA000',
    marginLeft: 4,
  },
  providerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  providerAvatar: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 8,
  },
  providerName: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#757575',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  locationText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#757575',
    marginLeft: 4,
    flex: 1,
  },
  price: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#008080',
  },
});

export default ServiceCard;