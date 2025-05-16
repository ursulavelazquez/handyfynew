import { Redirect, Stack } from 'expo-router';
import { useAuth } from '@/contexts/AuthContext';

export default function AppLayout() {
  const { user, isLoading } = useAuth();
  
  // If user is not authenticated, redirect to login
  if (!isLoading && !user) {
    return <Redirect href="/(auth)/login" />;
  }
  
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="service-details" options={{ presentation: 'modal' }} />
      <Stack.Screen name="chat" options={{ animation: 'slide_from_right' }} />
      <Stack.Screen name="booking-confirmation" options={{ presentation: 'modal' }} />
    </Stack>
  );
}