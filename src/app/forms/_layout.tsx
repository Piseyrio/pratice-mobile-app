import { Stack } from "expo-router";

export default function FormsLayout() {
  return (
    <Stack screenOptions={{ headerShown: false, animation: "slide_from_right" }}>
      <Stack.Screen name="student" />
      <Stack.Screen name="class" />
      <Stack.Screen name="subject" />
      <Stack.Screen name="schedule" />
    </Stack>
  );
}
