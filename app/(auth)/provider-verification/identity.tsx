import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft, Shield, Upload } from 'lucide-react-native';
import * as ImagePicker from 'expo-image-picker';
import Button from '@/components/Button';
import VerificationProgress from '@/components/VerificationProgress';

export default function IdentityVerificationScreen() {
  const router = useRouter();
  const [documentType, setDocumentType] = useState<'dni' | 'passport'>('dni');
  const [documentNumber, setDocumentNumber] = useState('');
  const [documentImage, setDocumentImage] = useState<string | null>(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setDocumentImage(result.assets[0].uri);
    }
  };

  const handleContinue = () => {
    router.push('/provider-verification/profession');
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

      <VerificationProgress currentStep={1} />

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Tipo de documento</Text>
        <View style={styles.documentTypeContainer}>
          <TouchableOpacity
            style={[
              styles.documentTypeButton,
              documentType === 'dni' && styles.documentTypeButtonActive,
            ]}
            onPress={() => setDocumentType('dni')}
          >
            <View style={[
              styles.radioButton,
              documentType === 'dni' && styles.radioButtonActive,
            ]}>
              {documentType === 'dni' && <View style={styles.radioButtonInner} />}
            </View>
            <Text style={[
              styles.documentTypeText,
              documentType === 'dni' && styles.documentTypeTextActive,
            ]}>DNI</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.documentTypeButton,
              documentType === 'passport' && styles.documentTypeButtonActive,
            ]}
            onPress={() => setDocumentType('passport')}
          >
            <View style={[
              styles.radioButton,
              documentType === 'passport' && styles.radioButtonActive,
            ]}>
              {documentType === 'passport' && <View style={styles.radioButtonInner} />}
            </View>
            <Text style={[
              styles.documentTypeText,
              documentType === 'passport' && styles.documentTypeTextActive,
            ]}>Pasaporte</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Número de documento (opcional)</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu número de documento"
          value={documentNumber}
          onChangeText={setDocumentNumber}
          keyboardType="numeric"
        />

        <Text style={styles.sectionTitle}>Sube una foto de tu documento (opcional)</Text>
        <TouchableOpacity style={styles.uploadContainer} onPress={pickImage}>
          {documentImage ? (
            <Image source={{ uri: documentImage }} style={styles.documentImage} />
          ) : (
            <>
              <Upload size={32} color="#008080" />
              <Text style={styles.uploadText}>
                Asegúrate que toda la información sea legible y que la foto esté bien iluminada
              </Text>
              <TouchableOpacity style={styles.selectButton} onPress={pickImage}>
                <Upload size={16} color="#FFFFFF" />
                <Text style={styles.selectButtonText}>Seleccionar archivo</Text>
              </TouchableOpacity>
            </>
          )}
        </TouchableOpacity>

        <View style={styles.securityNote}>
          <Shield size={20} color="#008080" />
          <Text style={styles.securityText}>
            La verificación de identidad es opcional pero recomendada para generar más confianza en los clientes.
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
  sectionTitle: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: '#212121',
    marginBottom: 12,
  },
  documentTypeContainer: {
    marginBottom: 24,
  },
  documentTypeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    marginBottom: 8,
  },
  documentTypeButtonActive: {
    backgroundColor: 'rgba(0, 128, 128, 0.1)',
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#757575',
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonActive: {
    borderColor: '#008080',
  },
  radioButtonInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#008080',
  },
  documentTypeText: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#212121',
  },
  documentTypeTextActive: {
    color: '#008080',
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#212121',
    marginBottom: 24,
  },
  uploadContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
  },
  uploadText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#757575',
    textAlign: 'center',
    marginTop: 12,
    marginBottom: 16,
  },
  selectButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#008080',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  selectButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#FFFFFF',
    marginLeft: 8,
  },
  documentImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  securityNote: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 128, 128, 0.1)',
    borderRadius: 8,
    padding: 12,
  },
  securityText: {
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