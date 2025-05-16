import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Check } from 'lucide-react-native';

interface VerificationProgressProps {
  currentStep: number;
}

const steps = [
  { id: 1, label: 'Identidad' },
  { id: 2, label: 'Profesión' },
  { id: 3, label: 'Certificados' },
  { id: 4, label: 'Listo' },
];

export default function VerificationProgress({ currentStep }: VerificationProgressProps) {
  return (
    <View style={styles.container}>
      <View style={styles.stepsContainer}>
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <View style={styles.stepContainer}>
              {step.id < currentStep ? (
                <View style={[styles.stepCircle, styles.completedStepCircle]}>
                  <Check size={16} color="#FFFFFF" />
                </View>
              ) : (
                <View style={[
                  styles.stepCircle,
                  step.id === currentStep && styles.activeStepCircle,
                ]}>
                  <Text style={[
                    styles.stepNumber,
                    step.id === currentStep && styles.activeStepNumber,
                  ]}>{step.id}</Text>
                </View>
              )}
              <Text style={[
                styles.stepLabel,
                step.id === currentStep && styles.activeStepLabel,
              ]}>{step.label}</Text>
            </View>
            {index < steps.length - 1 && (
              <View style={[
                styles.connector,
                step.id < currentStep && styles.completedConnector,
              ]} />
            )}
          </React.Fragment>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  stepsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  stepContainer: {
    alignItems: 'center',
  },
  stepCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  activeStepCircle: {
    backgroundColor: '#008080',
  },
  completedStepCircle: {
    backgroundColor: '#008080',
  },
  stepNumber: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#757575',
  },
  activeStepNumber: {
    color: '#FFFFFF',
  },
  stepLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#757575',
  },
  activeStepLabel: {
    color: '#008080',
    fontFamily: 'Inter-Medium',
  },
  connector: {
    flex: 1,
    height: 2,
    backgroundColor: '#EEEEEE',
    marginHorizontal: 8,
    marginTop: -20,
  },
  completedConnector: {
    backgroundColor: '#008080',
  },
});