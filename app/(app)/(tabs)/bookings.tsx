import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Calendar, Clock, MapPin } from 'lucide-react-native';
import { useAuth } from '@/contexts/AuthContext';
import { mockBookings } from '@/data/mockData';

type BookingStatus = 'upcoming' | 'ongoing' | 'completed' | 'cancelled';

export default function BookingsScreen() {
  const router = useRouter();
  const { userType } = useAuth();
  const isProvider = userType === 'provider';
  
  const [activeTab, setActiveTab] = useState<BookingStatus>('upcoming');
  
  const filteredBookings = mockBookings.filter(booking => booking.status === activeTab);
  
  const getStatusColor = (status: BookingStatus) => {
    switch (status) {
      case 'upcoming':
        return '#008080';
      case 'ongoing':
        return '#2196F3';
      case 'completed':
        return '#4CAF50';
      case 'cancelled':
        return '#757575';
      default:
        return '#212121';
    }
  };
  
  const getStatusLabel = (status: BookingStatus) => {
    switch (status) {
      case 'upcoming':
        return 'Próximos';
      case 'ongoing':
        return 'En curso';
      case 'completed':
        return 'Completados';
      case 'cancelled':
        return 'Cancelados';
      default:
        return '';
    }
  };
  
  const renderEmptyState = () => (
    <View style={styles.emptyContainer}>
      <Image 
        source={{ uri: 'https://i.ibb.co/mDVbMDz/empty-bookings.png' }} 
        style={styles.emptyImage} 
        resizeMode="contain"
      />
      <Text style={styles.emptyTitle}>No hay servicios {getStatusLabel(activeTab).toLowerCase()}</Text>
      <Text style={styles.emptyDescription}>
        {activeTab === 'upcoming' 
          ? 'Tus próximos servicios aparecerán aquí.' 
          : `Los servicios ${getStatusLabel(activeTab).toLowerCase()} aparecerán aquí.`
        }
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          {isProvider ? 'Mi Agenda' : 'Mis Reservas'}
        </Text>
      </View>
      
      <View style={styles.tabsContainer}>
        {(['upcoming', 'ongoing', 'completed', 'cancelled'] as BookingStatus[]).map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tab,
              activeTab === tab && styles.activeTab
            ]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[
              styles.tabText,
              activeTab === tab && styles.activeTabText
            ]}>
              {getStatusLabel(tab)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      
      {filteredBookings.length > 0 ? (
        <FlatList
          data={filteredBookings}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.bookingCard}
              onPress={() => router.push({
                pathname: '/booking-confirmation',
                params: { id: item.id }
              })}
            >
              <View style={styles.bookingHeader}>
                <Text style={styles.bookingTitle}>{item.serviceTitle}</Text>
                <View style={[
                  styles.statusBadge,
                  { backgroundColor: getStatusColor(item.status) + '20' }
                ]}>
                  <Text style={[
                    styles.statusText,
                    { color: getStatusColor(item.status) }
                  ]}>
                    {item.statusText}
                  </Text>
                </View>
              </View>
              
              <View style={styles.userInfoContainer}>
                <Image 
                  source={{ uri: isProvider ? item.clientAvatar : item.providerAvatar }} 
                  style={styles.userAvatar} 
                />
                <View style={styles.userInfo}>
                  <Text style={styles.userName}>
                    {isProvider ? item.clientName : item.providerName}
                  </Text>
                  {!isProvider && (
                    <View style={styles.ratingContainer}>
                      <Text style={styles.ratingText}>{item.providerRating}</Text>
                      <Image 
                        source={{ uri: 'https://i.ibb.co/4WM5KcP/star.png' }} 
                        style={styles.starIcon} 
                      />
                    </View>
                  )}
                </View>
              </View>
              
              <View style={styles.detailsContainer}>
                <View style={styles.detailItem}>
                  <Calendar size={16} color="#757575" />
                  <Text style={styles.detailText}>{item.date}</Text>
                </View>
                
                <View style={styles.detailItem}>
                  <Clock size={16} color="#757575" />
                  <Text style={styles.detailText}>{item.time}</Text>
                </View>
                
                <View style={styles.detailItem}>
                  <MapPin size={16} color="#757575" />
                  <Text style={styles.detailText}>{item.location}</Text>
                </View>
              </View>
              
              <View style={styles.bookingFooter}>
                <Text style={styles.priceLabel}>Precio:</Text>
                <Text style={styles.priceValue}>${item.price}</Text>
              </View>
              
              {item.status === 'upcoming' && (
                <View style={styles.actionButtons}>
                  <TouchableOpacity style={styles.rescheduleButton}>
                    <Text style={styles.rescheduleButtonText}>Reprogramar</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={styles.cancelButton}>
                    <Text style={styles.cancelButtonText}>Cancelar</Text>
                  </TouchableOpacity>
                </View>
              )}
              
              {item.status === 'ongoing' && isProvider && (
                <TouchableOpacity style={styles.completeButton}>
                  <Text style={styles.completeButtonText}>Marcar como Completado</Text>
                </TouchableOpacity>
              )}
              
              {item.status === 'completed' && !isProvider && !item.isRated && (
                <TouchableOpacity style={styles.rateButton}>
                  <Text style={styles.rateButtonText}>Calificar Servicio</Text>
                </TouchableOpacity>
              )}
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.bookingsList}
        />
      ) : (
        renderEmptyState()
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
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  headerTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 24,
    color: '#212121',
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#008080',
  },
  tabText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#757575',
  },
  activeTabText: {
    color: '#008080',
  },
  bookingsList: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  bookingCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  bookingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  bookingTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#212121',
    flex: 1,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  statusText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userInfo: {
    marginLeft: 12,
    flex: 1,
  },
  userName: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#212121',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ratingText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: '#757575',
  },
  starIcon: {
    width: 12,
    height: 12,
    marginLeft: 4,
  },
  detailsContainer: {
    marginBottom: 16,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#212121',
    marginLeft: 8,
  },
  bookingFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  priceLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#757575',
  },
  priceValue: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#008080',
    marginLeft: 8,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rescheduleButton: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 8,
  },
  rescheduleButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#212121',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: 'rgba(211, 47, 47, 0.1)',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginLeft: 8,
  },
  cancelButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#D32F2F',
  },
  completeButton: {
    backgroundColor: '#008080',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  completeButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#FFFFFF',
  },
  rateButton: {
    backgroundColor: '#008080',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  rateButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#FFFFFF',
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