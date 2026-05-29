import type { BottomTabBarProps } from "expo-router/build/react-navigation/bottom-tabs";
import {
  Home,
  LayoutGrid,
  Plus,
  Settings,
  Wallet,
  type LucideIcon,
} from "lucide-react-native";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ACTIVE = "#1b0058";
const INACTIVE = "#a8a3b3";

const TAB_ORDER = ["index", "history", "add", "categories", "profile"] as const;

type TabRouteName = (typeof TAB_ORDER)[number];

const TAB_CONFIG: Record<
  TabRouteName,
  { label: string; icon: LucideIcon; isFab?: boolean }
> = {
  index: { label: "HOME", icon: Home },
  history: { label: "TRANSACT", icon: Wallet },
  add: { label: "ADD", icon: Plus, isFab: true },
  categories: { label: "CATEGORIES", icon: LayoutGrid },
  profile: { label: "SETTINGS", icon: Settings },
};

function TabItemButton({
  label,
  icon: Icon,
  isFocused,
  onPress,
}: {
  label: string;
  icon: LucideIcon;
  isFocused: boolean;
  onPress: () => void;
}) {
  const color = isFocused ? ACTIVE : INACTIVE;

  return (
    <Pressable
      onPress={onPress}
      className="flex-1 items-center justify-end gap-1 py-2 active:opacity-70"
    >
      <Icon size={22} color={color} strokeWidth={isFocused ? 2.25 : 1.75} />
      <Text
        className="text-[10px] font-semibold uppercase tracking-wide"
        style={{ color }}
      >
        {label}
      </Text>
    </Pressable>
  );
}

function AddTabButton({
  isFocused,
  onPress,
}: {
  isFocused: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      className="flex-1 items-center active:opacity-90"
      style={{ marginTop: -28 }}
    >
      <View
        className="h-14 w-14 items-center justify-center rounded-full shadow-lg"
        style={{ backgroundColor: ACTIVE }}
      >
        <Plus size={28} color="#ffffff" strokeWidth={2.5} />
      </View>
      <Text
        className="mt-1 text-[10px] font-semibold uppercase tracking-wide"
        style={{ color: isFocused ? ACTIVE : INACTIVE }}
      >
        ADD
      </Text>
    </Pressable>
  );
}

export function CustomBottomTabBar({ state, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="border-t border-[#e8e6ed] bg-white"
      style={{
        paddingBottom: Math.max(insets.bottom, 8),
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        shadowColor: "#1b0058",
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.08,
        shadowRadius: 12,
        elevation: 12,
      }}
    >
      <View className="flex-row items-end px-1 pt-2">
        {TAB_ORDER.map((routeName) => {
          const routeIndex = state.routes.findIndex(
            (route) => route.name === routeName,
          );
          const isFocused = state.index === routeIndex;
          const config = TAB_CONFIG[routeName];
          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: state.routes[routeIndex]?.key ?? routeName,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(routeName);
            }
          };

          if (config.isFab) {
            return (
              <AddTabButton
                key={routeName}
                isFocused={isFocused}
                onPress={onPress}
              />
            );
          }

          return (
            <TabItemButton
              key={routeName}
              label={config.label}
              icon={config.icon}
              isFocused={isFocused}
              onPress={onPress}
            />
          );
        })}
      </View>
    </View>
  );
}
