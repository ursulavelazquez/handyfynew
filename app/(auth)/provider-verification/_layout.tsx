import { Stack } from 'expo-router';

export default function ProviderVerificationLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="identity" />
      <Stack.Screen name="profession" />
      <Stack.Screen name="certificates" />
      <Stack.Screen name="complete" />
    </Stack>
  );
}