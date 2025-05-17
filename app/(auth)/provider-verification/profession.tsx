import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import Button from '@/components/Button';
import VerificationProgress from '@/components/VerificationProgress';
import { mockCategories } from '@/data/mockData';

export default function ProfessionVerificationScreen() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [experience, setExperience] = useState('');
  const [description, setDescription] = useState('');

  const handleContinue = () => {
    router.push('/provider-verification/certificates');
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

      <VerificationProgress currentStep={2} />

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Categoría principal de servicio (opcional)</Text>
        <View style={styles.categoriesContainer}>
          {mockCategories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={[
                styles.categoryButton,
                selectedCategory === category.id && styles.categoryButtonActive,
              ]}
              onPress={() => setSelectedCategory(category.id)}
            >
              <View style={[
                styles.radioButton,
                selectedCategory === category.id && styles.radioButtonActive,
              ]}>
                {selectedCategory === category.id && (
                  <View style={styles.radioButtonInner} />
                )}
              </View>
              <Text style={[
                styles.categoryText,
                selectedCategory === category.id && styles.categoryTextActive,
              ]}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Años de experiencia (opcional)</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej: 5 años"
          value={experience}
          onChangeText={setExperience}
        />

        <Text style={styles.sectionTitle}>Describe brevemente tus servicios (opcional)</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Describe tus servicios, especialidades y experiencia en el rubro..."
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={4}
          textAlignVertical="top"
        />
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
  categoriesContainer: {
    marginBottom: 24,
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    marginBottom: 8,
  },
  categoryButtonActive: {
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
  categoryText: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#212121',
  },
  categoryTextActive: {
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
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  footer: {
    padding: 24,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
});