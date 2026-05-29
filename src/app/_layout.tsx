import { DarkTheme, DefaultTheme, Tabs, ThemeProvider } from "expo-router";
import { useColorScheme } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../global.css";

import { AnimatedSplashOverlay } from "@/components/animated-icon";
import { CustomBottomTabBar } from "@/components/custom-bottom-tab-bar";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <AnimatedSplashOverlay />
        <Tabs
          tabBar={(props) => <CustomBottomTabBar {...props} />}
          screenOptions={{ headerShown: false }}
        >
          <Tabs.Screen name="index" options={{ title: "Home" }} />
          <Tabs.Screen name="history" options={{ title: "Transact" }} />
          <Tabs.Screen name="add" options={{ title: "Add" }} />
          <Tabs.Screen name="categories" options={{ title: "Categories" }} />
          <Tabs.Screen name="profile" options={{ title: "Settings" }} />
          <Tabs.Screen name="forms" options={{ href: null }} />
        </Tabs>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
