import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft, Mail } from 'lucide-react-native';
import Button from '@/components/Button';

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSendCode = async () => {
    if (!email) {
      setError('Por favor, ingresa tu email');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      // This would be an API call to send a password reset email
      setTimeout(() => {
        setIsSuccess(true);
      }, 1500);
    } catch (err) {
      setError('Error al enviar el código. Por favor, intenta nuevamente.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.content}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ArrowLeft size={24} color="#212121" />
        </TouchableOpacity>
        
        <View style={styles.logoContainer}>
          <Image
            source={{ uri: 'https://i.ibb.co/1MkN1FK/handyfy-logo.png' }}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        
        <Text style={styles.title}>Recuperar Contraseña</Text>
        
        {!isSuccess ? (
          <>
            <Text style={styles.description}>
              Ingresa tu dirección de email y te enviaremos un código para restablecer tu contraseña.
            </Text>
            
            {error && (
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{error}</Text>
              </View>
            )}
            
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="tu@email.com"
                  value={email}
                  onChangeText={setEmail}
                  autoCapitalize="none"
                  keyboardType="email-address"
                />
                <Mail size={20} color="#757575" style={styles.inputIcon} />
              </View>
            </View>
            
            <Button
              title="Enviar Código"
              onPress={handleSendCode}
              isLoading={isLoading}
              style={styles.sendButton}
            />
          </>
        ) : (
          <View style={styles.successContainer}>
            <Image 
              source={{ uri: 'https://i.ibb.co/Tvx6Ps5/email-sent.png' }} 
              style={styles.successImage} 
              resizeMode="contain"
            />
            <Text style={styles.successTitle}>¡Código Enviado!</Text>
            <Text style={styles.successDescription}>
              Hemos enviado un email con instrucciones para restablecer tu contraseña.
            </Text>
            <Button
              title="Volver al Inicio de Sesión"
              onPress={() => router.replace('/login')}
              style={styles.backToLoginButton}
            />
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    padding: 24,
    paddingTop: 40,
  },
  backButton: {
    marginBottom: 16,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logo: {
    width: 80,
    height: 80,
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 24,
    color: '#000000',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#757575',
    marginBottom: 24,
    textAlign: 'center',
  },
  errorContainer: {
    backgroundColor: 'rgba(211, 47, 47, 0.1)',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  errorText: {
    fontFamily: 'Inter-Medium',
    color: '#D32F2F',
    fontSize: 14,
  },
  inputContainer: {
    marginBottom: 24,
  },
  label: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#212121',
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },
  input: {
    flex: 1,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: '#212121',
  },
  inputIcon: {
    paddingRight: 16,
  },
  sendButton: {
    marginBottom: 24,
  },
  successContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  successImage: {
    width: 160,
    height: 160,
    marginBottom: 24,
  },
  successTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    color: '#008080',
    marginBottom: 16,
  },
  successDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#757575',
    textAlign: 'center',
    marginBottom: 32,
  },
  backToLoginButton: {},
});