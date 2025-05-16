import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useAuth } from '@/contexts/AuthContext';
import { 
  MapPin, 
  Star, 
  MessageSquare, 
  Clock, 
  CalendarCheck, 
  Shield, 
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Heart,
  Calendar
} from 'lucide-react-native';
import Button from '@/components/Button';
import { mockServices } from '@/data/mockData';

export default function ServiceDetailsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { id } = params;
  const { userType } = useAuth();
  const isProvider = userType === 'provider';
  
  const [isFavorited, setIsFavorited] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [showAllServices, setShowAllServices] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  
  // Find the service by id
  const service = mockServices.find(item => item.id.toString() === id);
  
  if (!service) {
    return (
      <View style={styles.notFoundContainer}>
        <Text style={styles.notFoundText}>Servicio no encontrado</Text>
        <Button title="Volver" onPress={() => router.back()} />
      </View>
    );
  }
  
  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };
  
  const handleChat = () => {
    router.push({
      pathname: '/chat',
      params: { id: service.providerId, name: service.providerName }
    });
  };
  
  const handleBook = () => {
    if (!selectedDate || !selectedTime) {
      return;
    }
    
    router.push({
      pathname: '/booking-confirmation',
      params: { 
        id: service.id,
        date: selectedDate,
        time: selectedTime
      }
    });
  };
  
  // Sample dates for scheduling (next 7 days)
  const dates = [...Array(7)].map((_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return {
      day: date.getDate(),
      month: date.toLocaleString('default', { month: 'short' }),
      full: date.toLocaleDateString('es-AR', { weekday: 'short', day: 'numeric', month: 'short' })
    };
  });
  
  // Sample time slots
  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00', 
    '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'
  ];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <ArrowLeft size={24} color="#FFFFFF" />
          </TouchableOpacity>
          
          {!isProvider && (
            <TouchableOpacity 
              style={styles.favoriteButton}
              onPress={toggleFavorite}
            >
              <Heart 
                size={24} 
                color={isFavorited ? '#E53935' : '#FFFFFF'} 
                fill={isFavorited ? '#E53935' : 'none'} 
              />
            </TouchableOpacity>
          )}
        </View>
        
        <View style={styles.imageGallery}>
          <Image 
            source={{ uri: service.image }} 
            style={styles.mainImage} 
            resizeMode="cover"
          />
          
          <View style={styles.imageRow}>
            {service.gallery?.slice(0, 3).map((img, index) => (
              <View 
                key={index} 
                style={[
                  styles.thumbnailContainer,
                  index === 2 && service.gallery.length > 3 && styles.lastThumbnail
                ]}
              >
                <Image 
                  source={{ uri: img }} 
                  style={styles.thumbnail} 
                  resizeMode="cover"
                />
                {index === 2 && service.gallery.length > 3 && (
                  <View style={styles.moreImagesOverlay}>
                    <Text style={styles.moreImagesText}>+{service.gallery.length - 3}</Text>
                  </View>
                )}
              </View>
            ))}
          </View>
        </View>
        
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{service.title}</Text>
          
          <View style={styles.providerInfoContainer}>
            <Image 
              source={{ uri: service.providerAvatar }} 
              style={styles.providerAvatar} 
            />
            
            <View style={styles.providerInfo}>
              <View style={styles.providerNameContainer}>
                <Text style={styles.providerName}>{service.providerName}</Text>
                <View style={styles.verifiedBadge}>
                  <Shield size={12} color="#008080" />
                  <Text style={styles.verifiedText}>Verificado</Text>
                </View>
              </View>
              
              <View style={styles.ratingContainer}>
                <Star size={16} color="#FFC107" fill="#FFC107" />
                <Text style={styles.ratingText}>{service.rating} </Text>
                <Text style={styles.reviewCount}>({service.reviews.length} reseñas)</Text>
              </View>
            </View>
          </View>
          
          <View style={styles.locationContainer}>
            <MapPin size={16} color="#757575" />
            <Text style={styles.locationText}>{service.location}</Text>
          </View>
          
          <View style={styles.divider} />
          
          <Text style={styles.sectionTitle}>Acerca del servicio</Text>
          <Text style={styles.description}>{service.description}</Text>
          
          <View style={styles.priceContainer}>
            <Text style={styles.priceLabel}>Precio</Text>
            <Text style={styles.priceValue}>${service.price}</Text>
            <Text style={styles.priceUnit}> / hora</Text>
          </View>
          
          <View style={styles.divider} />
          
          <Text style={styles.sectionTitle}>Servicios ofrecidos</Text>
          
          {service.services?.slice(0, showAllServices ? service.services.length : 3).map((item, index) => (
            <View key={index} style={styles.serviceItem}>
              <View style={styles.serviceBullet} />
              <Text style={styles.serviceText}>{item}</Text>
            </View>
          ))}
          
          {service.services && service.services.length > 3 && (
            <TouchableOpacity 
              style={styles.showMoreButton}
              onPress={() => setShowAllServices(!showAllServices)}
            >
              <Text style={styles.showMoreText}>
                {showAllServices ? 'Mostrar menos' : 'Mostrar más'}
              </Text>
              {showAllServices ? (
                <ChevronUp size={16} color="#008080" />
              ) : (
                <ChevronDown size={16} color="#008080" />
              )}
            </TouchableOpacity>
          )}
          
          <View style={styles.divider} />
          
          <Text style={styles.sectionTitle}>Reseñas</Text>
          
          {service.reviews?.slice(0, showAllReviews ? service.reviews.length : 2).map((review, index) => (
            <View key={index} style={styles.reviewItem}>
              <View style={styles.reviewHeader}>
                <Image 
                  source={{ uri: review.userAvatar }} 
                  style={styles.reviewerAvatar} 
                />
                
                <View style={styles.reviewerInfo}>
                  <Text style={styles.reviewerName}>{review.userName}</Text>
                  <Text style={styles.reviewDate}>{review.date}</Text>
                </View>
                
                <View style={styles.reviewRating}>
                  <Text style={styles.reviewRatingText}>{review.rating}</Text>
                  <Star size={12} color="#FFC107" fill="#FFC107" />
                </View>
              </View>
              
              <Text style={styles.reviewText}>{review.text}</Text>
            </View>
          ))}
          
          {service.reviews && service.reviews.length > 2 && (
            <TouchableOpacity 
              style={styles.showMoreButton}
              onPress={() => setShowAllReviews(!showAllReviews)}
            >
              <Text style={styles.showMoreText}>
                {showAllReviews ? 'Mostrar menos' : 'Ver todas las reseñas'}
              </Text>
              {showAllReviews ? (
                <ChevronUp size={16} color="#008080" />
              ) : (
                <ChevronDown size={16} color="#008080" />
              )}
            </TouchableOpacity>
          )}
          
          {!isProvider && (
            <>
              <View style={styles.divider} />
              
              <Text style={styles.sectionTitle}>Seleccionar fecha y hora</Text>
              
              <Text style={styles.subsectionTitle}>Fecha</Text>
              <FlatList
                data={dates}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.datesList}
                renderItem={({ item }) => (
                  <TouchableOpacity 
                    style={[
                      styles.dateItem,
                      selectedDate === item.full && styles.selectedDateItem
                    ]}
                    onPress={() => setSelectedDate(item.full)}
                  >
                    <Text style={[
                      styles.dateMonth,
                      selectedDate === item.full && styles.selectedDateText
                    ]}>
                      {item.month}
                    </Text>
                    <Text style={[
                      styles.dateDay,
                      selectedDate === item.full && styles.selectedDateText
                    ]}>
                      {item.day}
                    </Text>
                  </TouchableOpacity>
                )}
              />
              
              <Text style={styles.subsectionTitle}>Hora</Text>
              <View style={styles.timeSlotGrid}>
                {timeSlots.map((time, index) => (
                  <TouchableOpacity 
                    key={index}
                    style={[
                      styles.timeSlot,
                      selectedTime === time && styles.selectedTimeSlot,
                      // Example of unavailable slots (here randomly)
                      [2, 5, 8].includes(index) && styles.unavailableTimeSlot
                    ]}
                    onPress={() => {
                      if (![2, 5, 8].includes(index)) { // If not unavailable
                        setSelectedTime(time);
                      }
                    }}
                    disabled={[2, 5, 8].includes(index)}
                  >
                    <Text style={[
                      styles.timeSlotText,
                      selectedTime === time && styles.selectedTimeSlotText,
                      [2, 5, 8].includes(index) && styles.unavailableTimeSlotText
                    ]}>
                      {time}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </>
          )}
          
          {/* Spacer at the bottom to ensure content isn't hidden behind the action bar */}
          <View style={styles.bottomSpacer} />
        </View>
      </ScrollView>
      
      <View style={styles.actionBar}>
        {isProvider ? (
          <Button
            title="Contactar"
            onPress={handleChat}
            icon={MessageSquare}
            fullWidth
          />
        ) : (
          <>
            <TouchableOpacity style={styles.chatButton} onPress={handleChat}>
              <MessageSquare size={24} color="#008080" />
            </TouchableOpacity>
            
            <View style={styles.bookButtonContainer}>
              <Button
                title="Reservar Ahora"
                onPress={handleBook}
                disabled={!selectedDate || !selectedTime}
                fullWidth
              />
            </View>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    zIndex: 10,
  },
  backButton: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  favoriteButton: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageGallery: {
    width: '100%',
  },
  mainImage: {
    width: '100%',
    height: 240,
  },
  imageRow: {
    flexDirection: 'row',
    height: 80,
  },
  thumbnailContainer: {
    flex: 1,
    marginHorizontal: 2,
  },
  thumbnail: {
    width: '100%',
    height: '100%',
  },
  lastThumbnail: {
    position: 'relative',
  },
  moreImagesOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  moreImagesText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  contentContainer: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 24,
    color: '#212121',
    marginBottom: 16,
  },
  providerInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  providerAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  providerInfo: {
    flex: 1,
  },
  providerNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  providerName: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: '#212121',
    marginRight: 8,
  },
  verifiedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 128, 128, 0.1)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  verifiedText: {
    fontFamily: 'Inter-Medium',
    fontSize: 10,
    color: '#008080',
    marginLeft: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#212121',
    marginLeft: 4,
  },
  reviewCount: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#757575',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#757575',
    marginLeft: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginVertical: 24,
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#212121',
    marginBottom: 12,
  },
  description: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#212121',
    lineHeight: 22,
    marginBottom: 16,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 12,
    borderRadius: 8,
  },
  priceLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#757575',
    marginRight: 8,
  },
  priceValue: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    color: '#008080',
  },
  priceUnit: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#757575',
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  serviceBullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#008080',
    marginRight: 12,
  },
  serviceText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#212121',
  },
  showMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  showMoreText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#008080',
    marginRight: 4,
  },
  reviewItem: {
    marginBottom: 20,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  reviewerAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 12,
  },
  reviewerInfo: {
    flex: 1,
  },
  reviewerName: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#212121',
  },
  reviewDate: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#757575',
  },
  reviewRating: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF8E1',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  reviewRatingText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: '#FFA000',
    marginRight: 4,
  },
  reviewText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#212121',
    lineHeight: 20,
  },
  subsectionTitle: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: '#212121',
    marginBottom: 12,
    marginTop: 16,
  },
  datesList: {
    paddingBottom: 8,
  },
  dateItem: {
    width: 64,
    height: 72,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  selectedDateItem: {
    backgroundColor: '#008080',
  },
  dateMonth: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#757575',
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  dateDay: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    color: '#212121',
  },
  selectedDateText: {
    color: '#FFFFFF',
  },
  timeSlotGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -6,
  },
  timeSlot: {
    width: '30%',
    height: 40,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '1.5%',
  },
  selectedTimeSlot: {
    backgroundColor: '#008080',
  },
  unavailableTimeSlot: {
    backgroundColor: '#EEEEEE',
    opacity: 0.7,
  },
  timeSlotText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#212121',
  },
  selectedTimeSlotText: {
    color: '#FFFFFF',
  },
  unavailableTimeSlotText: {
    color: '#BDBDBD',
  },
  actionBar: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
  chatButton: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  bookButtonContainer: {
    flex: 1,
  },
  bottomSpacer: {
    height: 16,
  },
  notFoundContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  notFoundText: {
    fontFamily: 'Inter-Medium',
    fontSize: 18,
    color: '#212121',
    marginBottom: 16,
  },
});