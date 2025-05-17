import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft, Camera, Upload, CircleAlert as AlertCircle } from 'lucide-react-native';
import * as ImagePicker from 'expo-image-picker';
import Button from '@/components/Button';
import VerificationProgress from '@/components/VerificationProgress';

export default function CertificatesVerificationScreen() {
  const router = useRouter();
  const [certificates, setCertificates] = useState<string[]>([]);
  const [profilePhoto, setProfilePhoto] = useState<string | null>(null);

  const pickCertificates = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1,
    });

    if (!result.canceled) {
      setCertificates(result.assets.map(asset => asset.uri));
    }
  };

  const takeProfilePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    
    if (status === 'granted') {
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled) {
        setProfilePhoto(result.assets[0].uri);
      }
    }
  };

  const handleContinue = () => {
    router.push('/provider-verification/complete');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft size={24} color="#212121" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Verificación de perfil</Text>
        <View style={styles.placeholder} />
      </View>

      <VerificationProgress currentStep={3} />

      <View style={styles.content}>
        <View style={styles.uploadSection}>
          <Upload size={32} color="#008080" />
          <Text style={styles.uploadTitle}>Certificados o licencias (opcional)</Text>
          <Text style={styles.uploadSubtitle}>
            Sube certificados, licencias o diplomas relacionados con tu profesión
          </Text>
          <TouchableOpacity style={styles.uploadButton} onPress={pickCertificates}>
            <Upload size={16} color="#FFFFFF" />
            <Text style={styles.uploadButtonText}>Seleccionar archivos</Text>
          </TouchableOpacity>
          {certificates.length > 0 && (
            <View style={styles.certificatesPreview}>
              {certificates.map((uri, index) => (
                <Image key={index} source={{ uri }} style={styles.certificateImage} />
              ))}
            </View>
          )}
        </View>

        <View style={styles.uploadSection}>
          <Camera size={32} color="#008080" />
          <Text style={styles.uploadTitle}>Foto de perfil profesional (opcional)</Text>
          <Text style={styles.uploadSubtitle}>
            Una buena foto de perfil aumenta la confianza de los clientes
          </Text>
          <TouchableOpacity style={styles.uploadButton} onPress={takeProfilePhoto}>
            <Camera size={16} color="#FFFFFF" />
            <Text style={styles.uploadButtonText}>Tomar foto</Text>
          </TouchableOpacity>
          {profilePhoto && (
            <Image source={{ uri: profilePhoto }} style={styles.profilePhoto} />
          )}
        </View>

        <View style={styles.infoNote}>
          <AlertCircle size={20} color="#FF9800" />
          <Text style={styles.infoText}>
            Las certificaciones son opcionales pero recomendadas para aumentar la confianza
            de los clientes y obtener más trabajos.
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Button
          title="Continuar"
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingHorizontal: 24,
    paddingBottom: 16,
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
  uploadSection: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
  },
  uploadTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#212121',
    marginTop: 12,
    marginBottom: 4,
  },
  uploadSubtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#757575',
    textAlign: 'center',
    marginBottom: 16,
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#008080',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  uploadButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#FFFFFF',
    marginLeft: 8,
  },
  certificatesPreview: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
  },
  certificateImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    margin: 4,
  },
  profilePhoto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 16,
  },
  infoNote: {
    flexDirection: 'row',
    backgroundColor: '#FFF3E0',
    borderRadius: 8,
    padding: 12,
  },
  infoText: {
    flex: 1,
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#212121',
    marginLeft: 12,
  },
  footer: {
    padding: 24,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
});