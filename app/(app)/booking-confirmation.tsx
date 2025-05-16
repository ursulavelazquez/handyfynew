import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Calendar, Clock, CreditCard, MapPin, User, ArrowLeft, CircleCheck as CheckCircle } from 'lucide-react-native';
import Button from '@/components/Button';
import { mockServices } from '@/data/mockData';

export default function BookingConfirmationScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { id, date, time } = params;
  
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('card');
  
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
  
  const handleConfirmBooking = () => {
    setIsLoading(true);
    
    // Simulate booking process
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      
      // Navigate to bookings screen after success confirmation
      setTimeout(() => {
        router.replace('/(app)/(tabs)/bookings');
      }, 3000);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      {!isSuccess ? (
        <>
          <View style={styles.header}>
            <TouchableOpacity 
              style={styles.backButton}
              onPress={() => router.back()}
            >
              <ArrowLeft size={24} color="#212121" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Confirmación de Reserva</Text>
            <View style={styles.placeholder} />
          </View>
          
          <ScrollView style={styles.content}>
            <View style={styles.serviceCard}>
              <View style={styles.serviceHeader}>
                <Image 
                  source={{ uri: service.image }} 
                  style={styles.serviceImage} 
                />
                
                <View style={styles.serviceInfo}>
                  <Text style={styles.serviceTitle} numberOfLines={2}>
                    {service.title}
                  </Text>
                  <Text style={styles.providerName}>{service.providerName}</Text>
                  
                  <View style={styles.ratingContainer}>
                    <Image 
                      source={{ uri: 'https://i.ibb.co/4WM5KcP/star.png' }} 
                      style={styles.starIcon} 
                    />
                    <Text style={styles.ratingText}>{service.rating}</Text>
                  </View>
                </View>
              </View>
            </View>
            
            <Text style={styles.sectionTitle}>Detalles de la Reserva</Text>
            
            <View style={styles.detailsCard}>
              <View style={styles.detailItem}>
                <Calendar size={20} color="#008080" />
                <Text style={styles.detailText}>Fecha: <Text style={styles.detailValue}>{date}</Text></Text>
              </View>
              
              <View style={styles.detailItem}>
                <Clock size={20} color="#008080" />
                <Text style={styles.detailText}>Hora: <Text style={styles.detailValue}>{time}</Text></Text>
              </View>
              
              <View style={styles.detailItem}>
                <MapPin size={20} color="#008080" />
                <Text style={styles.detailText}>Dirección: <Text style={styles.detailValue}>Tu ubicación actual</Text></Text>
              </View>
              
              <View style={styles.detailItem}>
                <User size={20} color="#008080" />
                <Text style={styles.detailText}>Cliente: <Text style={styles.detailValue}>Juan Pérez</Text></Text>
              </View>
            </View>
            
            <Text style={styles.sectionTitle}>Método de Pago</Text>
            
            <View style={styles.paymentOptions}>
              <TouchableOpacity 
                style={[
                  styles.paymentOption,
                  selectedPayment === 'card' && styles.selectedPaymentOption
                ]}
                onPress={() => setSelectedPayment('card')}
              >
                <CreditCard size={24} color={selectedPayment === 'card' ? '#008080' : '#757575'} />
                <Text style={[
                  styles.paymentOptionText,
                  selectedPayment === 'card' && styles.selectedPaymentText
                ]}>
                  Tarjeta de Crédito/Débito
                </Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[
                  styles.paymentOption,
                  selectedPayment === 'mp' && styles.selectedPaymentOption
                ]}
                onPress={() => setSelectedPayment('mp')}
              >
                <Image 
                  source={{ uri: 'https://i.ibb.co/pZfVTZH/mercado-pago.png' }} 
                  style={styles.mpIcon} 
                />
                <Text style={[
                  styles.paymentOptionText,
                  selectedPayment === 'mp' && styles.selectedPaymentText
                ]}>
                  Mercado Pago
                </Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[
                  styles.paymentOption,
                  selectedPayment === 'cash' && styles.selectedPaymentOption
                ]}
                onPress={() => setSelectedPayment('cash')}
              >
                <Image 
                  source={{ uri: 'https://i.ibb.co/wd8Yfnr/cash.png' }} 
                  style={styles.cashIcon} 
                />
                <Text style={[
                  styles.paymentOptionText,
                  selectedPayment === 'cash' && styles.selectedPaymentText
                ]}>
                  Efectivo
                </Text>
              </TouchableOpacity>
            </View>
            
            <Text style={styles.sectionTitle}>Resumen del Pago</Text>
            
            <View style={styles.summaryCard}>
              <View style={styles.summaryItem}>
                <Text style={styles.summaryLabel}>Precio del servicio</Text>
                <Text style={styles.summaryValue}>${service.price}</Text>
              </View>
              
              <View style={styles.summaryItem}>
                <Text style={styles.summaryLabel}>Tarifa de servicio</Text>
                <Text style={styles.summaryValue}>${(service.price * 0.1).toFixed(2)}</Text>
              </View>
              
              <View style={styles.summaryItem}>
                <Text style={styles.summaryLabel}>Tarifa de emergencia</Text>
                <Text style={styles.summaryValue}>$0</Text>
              </View>
              
              <View style={styles.divider} />
              
              <View style={styles.summaryItem}>
                <Text style={styles.totalLabel}>Total</Text>
                <Text style={styles.totalValue}>
                  ${(service.price + service.price * 0.1).toFixed(2)}
                </Text>
              </View>
            </View>
          </ScrollView>
          
          <View style={styles.footer}>
            <Button 
              title="Confirmar Reserva"
              onPress={handleConfirmBooking}
              isLoading={isLoading}
              fullWidth
            />
          </View>
        </>
      ) : (
        <View style={styles.successContainer}>
          <CheckCircle size={80} color="#008080" />
          <Text style={styles.successTitle}>¡Reserva Confirmada!</Text>
          <Text style={styles.successText}>
            Tu reserva ha sido confirmada exitosamente. El prestador de servicios ha sido notificado.
          </Text>
          
          <View style={styles.successDetails}>
            <View style={styles.successDetailItem}>
              <Text style={styles.successDetailLabel}>Servicio:</Text>
              <Text style={styles.successDetailValue}>{service.title}</Text>
            </View>
            
            <View style={styles.successDetailItem}>
              <Text style={styles.successDetailLabel}>Fecha y Hora:</Text>
              <Text style={styles.successDetailValue}>{date}, {time}</Text>
            </View>
            
            <View style={styles.successDetailItem}>
              <Text style={styles.successDetailLabel}>Prestador:</Text>
              <Text style={styles.successDetailValue}>{service.providerName}</Text>
            </View>
          </View>
          
          <Text style={styles.redirectText}>
            Redirigiendo a tus reservas...
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#212121',
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
    padding: 24,
  },
  serviceCard: {
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  serviceHeader: {
    flexDirection: 'row',
  },
  serviceImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  serviceInfo: {
    flex: 1,
  },
  serviceTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#212121',
    marginBottom: 4,
  },
  providerName: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#757575',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    width: 16,
    height: 16,
  },
  ratingText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#212121',
    marginLeft: 4,
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#212121',
    marginBottom: 12,
  },
  detailsCard: {
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  detailText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#757575',
    marginLeft: 12,
  },
  detailValue: {
    fontFamily: 'Inter-Medium',
    color: '#212121',
  },
  paymentOptions: {
    marginBottom: 24,
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 8,
    marginBottom: 12,
  },
  selectedPaymentOption: {
    borderColor: '#008080',
    backgroundColor: 'rgba(0, 128, 128, 0.05)',
  },
  paymentOptionText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#212121',
    marginLeft: 12,
  },
  selectedPaymentText: {
    fontFamily: 'Inter-Medium',
    color: '#008080',
  },
  mpIcon: {
    width: 24,
    height: 24,
  },
  cashIcon: {
    width: 24,
    height: 24,
  },
  summaryCard: {
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  summaryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  summaryLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#757575',
  },
  summaryValue: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#212121',
  },
  divider: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginVertical: 12,
  },
  totalLabel: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#212121',
  },
  totalValue: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#008080',
  },
  footer: {
    padding: 24,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
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
  successContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  successTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 24,
    color: '#212121',
    marginTop: 24,
    marginBottom: 16,
  },
  successText: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#757575',
    textAlign: 'center',
    marginBottom: 32,
  },
  successDetails: {
    width: '100%',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 16,
    marginBottom: 32,
  },
  successDetailItem: {
    marginBottom: 12,
  },
  successDetailLabel: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#757575',
    marginBottom: 4,
  },
  successDetailValue: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#212121',
  },
  redirectText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#757575',
    marginTop: 24,
  },
});