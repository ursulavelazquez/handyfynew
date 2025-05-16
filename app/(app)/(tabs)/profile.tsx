import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Switch, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { ChevronRight, CreditCard, LogOut, MapPin, Settings, Shield, Star, CircleHelp as HelpCircle, Bell, User as UserIcon } from 'lucide-react-native';
import { useAuth } from '@/contexts/AuthContext';

const PROFILE_SECTIONS = [
  {
    title: 'Cuenta',
    items: [
      { id: 'personal-info', title: 'Información personal', icon: UserIcon },
      { id: 'addresses', title: 'Direcciones guardadas', icon: MapPin },
      { id: 'payment-methods', title: 'Métodos de pago', icon: CreditCard },
    ]
  },
  {
    title: 'Actividad',
    items: [
      { id: 'reviews', title: 'Mis reseñas', icon: Star },
      { id: 'promotions', title: 'Promociones', icon: CreditCard },
    ]
  },
  {
    title: 'Preferencias',
    items: [
      { id: 'notifications', title: 'Notificaciones', icon: Bell },
      { id: 'security', title: 'Seguridad y privacidad', icon: Shield },
      { id: 'help', title: 'Ayuda y soporte', icon: HelpCircle },
      { id: 'settings', title: 'Ajustes', icon: Settings },
    ]
  }
];

export default function ProfileScreen() {
  const router = useRouter();
  const { user, userType, signOut } = useAuth();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  
  const handleSignOut = () => {
    Alert.alert(
      'Cerrar sesión',
      '¿Estás seguro de que quieres cerrar sesión?',
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Sí, cerrar sesión',
          onPress: () => {
            signOut();
            router.replace('/(auth)/login');
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Perfil</Text>
        <TouchableOpacity style={styles.settingsButton}>
          <Settings size={24} color="#212121" />
        </TouchableOpacity>
      </View>
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.profileCard}>
          <Image 
            source={{ uri: 'https://i.ibb.co/Ldhc84G/profile-placeholder.png' }}
            style={styles.profileImage}
          />
          
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>{user?.name || 'Usuario'}</Text>
            <Text style={styles.profileType}>
              {userType === 'provider' ? 'Prestador de servicios' : 'Cliente'}
            </Text>
            
            <TouchableOpacity style={styles.editProfileButton}>
              <Text style={styles.editProfileText}>Editar perfil</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>
              {userType === 'provider' ? '27' : '8'}
            </Text>
            <Text style={styles.statLabel}>
              {userType === 'provider' ? 'Servicios' : 'Servicios'}
            </Text>
          </View>
          
          <View style={styles.statDivider} />
          
          <View style={styles.statItem}>
            <View style={styles.ratingContainer}>
              <Text style={styles.statNumber}>
                {userType === 'provider' ? '4.8' : '5.0'}
              </Text>
              <Image 
                source={{ uri: 'https://i.ibb.co/4WM5KcP/star.png' }} 
                style={styles.starIcon}
              />
            </View>
            <Text style={styles.statLabel}>Calificación</Text>
          </View>
          
          <View style={styles.statDivider} />
          
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>
              {userType === 'provider' ? '18' : '6'}
            </Text>
            <Text style={styles.statLabel}>Reseñas</Text>
          </View>
        </View>
        
        {userType === 'provider' && (
          <View style={styles.providerStatusCard}>
            <View>
              <Text style={styles.statusTitle}>Estado</Text>
              <Text style={styles.statusActive}>Activo</Text>
            </View>
            <Switch
              trackColor={{ false: '#E0E0E0', true: '#66B2B2' }}
              thumbColor={notificationsEnabled ? '#008080' : '#F5F5F5'}
              ios_backgroundColor="#E0E0E0"
              onValueChange={setNotificationsEnabled}
              value={notificationsEnabled}
            />
          </View>
        )}
        
        {PROFILE_SECTIONS.map((section, sectionIndex) => (
          <View key={sectionIndex} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            
            {section.items.map((item, itemIndex) => {
              const IconComponent = item.icon;
              return (
                <TouchableOpacity 
                  key={item.id}
                  style={styles.menuItem}
                  onPress={() => {
                    // Handle navigation based on item.id
                    if (item.id === 'notifications') {
                      setNotificationsEnabled(!notificationsEnabled);
                    }
                  }}
                >
                  <View style={styles.menuItemLeft}>
                    <IconComponent size={20} color="#008080" />
                    <Text style={styles.menuItemText}>{item.title}</Text>
                  </View>
                  
                  {item.id === 'notifications' ? (
                    <Switch
                      trackColor={{ false: '#E0E0E0', true: '#66B2B2' }}
                      thumbColor={notificationsEnabled ? '#008080' : '#F5F5F5'}
                      ios_backgroundColor="#E0E0E0"
                      onValueChange={setNotificationsEnabled}
                      value={notificationsEnabled}
                    />
                  ) : (
                    <ChevronRight size={20} color="#757575" />
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
        
        <TouchableOpacity 
          style={styles.logoutButton}
          onPress={handleSignOut}
        >
          <LogOut size={20} color="#D32F2F" />
          <Text style={styles.logoutText}>Cerrar sesión</Text>
        </TouchableOpacity>
        
        <Text style={styles.versionText}>Versión 1.0.0</Text>
      </ScrollView>
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
  headerTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 24,
    color: '#212121',
  },
  settingsButton: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#212121',
    marginBottom: 4,
  },
  profileType: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#757575',
    marginBottom: 12,
  },
  editProfileButton: {
    alignSelf: 'flex-start',
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: 'rgba(0, 128, 128, 0.1)',
    borderRadius: 4,
  },
  editProfileText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: '#008080',
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    marginHorizontal: 24,
    padding: 16,
    marginBottom: 24,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    color: '#212121',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  starIcon: {
    width: 16,
    height: 16,
    marginLeft: 4,
  },
  statLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#757575',
  },
  statDivider: {
    width: 1,
    backgroundColor: '#E0E0E0',
    height: '80%',
    alignSelf: 'center',
  },
  providerStatusCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    marginHorizontal: 24,
    padding: 16,
    marginBottom: 24,
  },
  statusTitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#757575',
    marginBottom: 4,
  },
  statusActive: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#008080',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#212121',
    marginHorizontal: 24,
    marginBottom: 12,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#212121',
    marginLeft: 12,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    marginHorizontal: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(211, 47, 47, 0.3)',
    marginTop: 16,
    marginBottom: 24,
  },
  logoutText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: '#D32F2F',
    marginLeft: 8,
  },
  versionText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#757575',
    textAlign: 'center',
  },
});