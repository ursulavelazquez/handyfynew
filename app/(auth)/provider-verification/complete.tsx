import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { CircleCheck as CheckCircle } from 'lucide-react-native';
import Button from '@/components/Button';
import VerificationProgress from '@/components/VerificationProgress';

export default function VerificationCompleteScreen() {
  const router = useRouter();

  const handleContinue = () => {
    router.replace('/(app)/(tabs)');
  };

  return (
    <View style={styles.container}>
      <VerificationProgress currentStep={4} />

      <View style={styles.content}>
        <CheckCircle size={80} color="#008080" />
        <Text style={styles.title}>¡Verificación completada!</Text>
        <Text style={styles.description}>
          Tu perfil está siendo revisado por nuestro equipo. Te notificaremos cuando
          la verificación esté lista y puedas comenzar a recibir solicitudes de servicio.
        </Text>

        <Image
          source={{ uri: 'https://i.ibb.co/Tvx6Ps5/email-sent.png' }}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Próximos pasos:</Text>
          <View style={styles.infoItem}>
            <Text style={styles.infoNumber}>1</Text>
            <Text style={styles.infoText}>
              Revisaremos tu documentación y verificaremos tu identidad
            </Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoNumber}>2</Text>
            <Text style={styles.infoText}>
              Validaremos tus certificaciones y experiencia profesional
            </Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoNumber}>3</Text>
            <Text style={styles.infoText}>
              Te enviaremos un email cuando tu cuenta esté verificada
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Button
          title="Ir al inicio"
          onPress={handleContinue}
          fullWidth
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
    paddingTop: 40,
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 24,
    color: '#212121',
    marginTop: 24,
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#757575',
    textAlign: 'center',
    marginBottom: 32,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 32,
  },
  infoContainer: {
    width: '100%',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 20,
  },
  infoTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#212121',
    marginBottom: 16,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  infoNumber: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#008080',
    color: '#FFFFFF',
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 24,
    marginRight: 12,
  },
  infoText: {
    flex: 1,
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#212121',
    lineHeight: 20,
  },
  footer: {
    padding: 24,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
});