import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { Check, Eye, EyeOff, Mail, Phone, User } from 'lucide-react-native';
import Button from '@/components/Button';

export default function RegisterScreen() {
  const router = useRouter();
  const [userType, setUserType] = useState<'client' | 'provider'>('client');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async () => {
    if (!name || !email || !phone || !password || !confirmPassword) {
      setError('Por favor, completa todos los campos');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      // This would be an API call to register the user
      setTimeout(() => {
        if (userType === 'provider') {
          router.replace('/provider-verification/identity');
        } else {
          router.replace('/(auth)/login');
        }
      }, 1500);
    } catch (err) {
      setError('Error al registrar. Por favor, intenta nuevamente.');
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
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={{ uri: 'https://i.ibb.co/1MkN1FK/handyfy-logo.png' }}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        
        <Text style={styles.title}>Crear Cuenta</Text>
        
        {error && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}
        
        <View style={styles.userTypeContainer}>
          <TouchableOpacity
            style={[styles.userTypeButton, userType === 'client' && styles.userTypeButtonActive]}
            onPress={() => setUserType('client')}
          >
            <Text style={[styles.userTypeText, userType === 'client' && styles.userTypeTextActive]}>
              Cliente
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.userTypeButton, userType === 'provider' && styles.userTypeButtonActive]}
            onPress={() => setUserType('provider')}
          >
            <Text style={[styles.userTypeText, userType === 'provider' && styles.userTypeTextActive]}>
              Prestador de Servicios
            </Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nombre completo</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Tu nombre"
              value={name}
              onChangeText={setName}
            />
            <User size={20} color="#757575" style={styles.inputIcon} />
          </View>
        </View>
        
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
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Teléfono</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="+54 9 11 XXXX XXXX"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />
            <Phone size={20} color="#757575" style={styles.inputIcon} />
          </View>
        </View>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Contraseña</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Tu contraseña"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.inputIcon}>
              {showPassword ? (
                <EyeOff size={20} color="#757575" />
              ) : (
                <Eye size={20} color="#757575" />
              )}
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirmar contraseña</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Confirma tu contraseña"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showConfirmPassword}
            />
            <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.inputIcon}>
              {showConfirmPassword ? (
                <EyeOff size={20} color="#757575" />
              ) : (
                <Eye size={20} color="#757575" />
              )}
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.termsContainer}>
          <Check size={20} color="#008080" />
          <Text style={styles.termsText}>
            Al registrarme, acepto los{' '}
            <Text style={styles.termsLink}>Términos y Condiciones</Text> y la{' '}
            <Text style={styles.termsLink}>Política de Privacidad</Text>.
          </Text>
        </View>
        
        <Button
          title="Crear Cuenta"
          onPress={handleRegister}
          isLoading={isLoading}
          style={styles.registerButton}
        />
        
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>¿Ya tienes una cuenta?</Text>
          <Link href="/login" asChild>
            <TouchableOpacity>
              <Text style={styles.loginLink}>Iniciar Sesión</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 24,
    paddingTop: 40,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 28,
    color: '#000000',
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
  userTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  userTypeButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    marginHorizontal: 4,
    alignItems: 'center',
  },
  userTypeButtonActive: {
    backgroundColor: '#008080',
    borderColor: '#008080',
  },
  userTypeText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#212121',
  },
  userTypeTextActive: {
    color: '#FFFFFF',
  },
  inputContainer: {
    marginBottom: 16,
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
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  termsText: {
    flex: 1,
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#212121',
    marginLeft: 8,
  },
  termsLink: {
    fontFamily: 'Inter-Medium',
    color: '#008080',
  },
  registerButton: {
    marginBottom: 24,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#757575',
  },
  loginLink: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#008080',
    marginLeft: 4,
  },
});