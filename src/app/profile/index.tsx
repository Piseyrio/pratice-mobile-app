import { Image } from "expo-image";
import { router } from "expo-router";
import {
  Badge,
  Building2,
  CircleHelp,
  Headphones,
  LogOut,
  Mail,
  Phone,
  RefreshCw,
  School,
  Search,
  Terminal,
  Verified,
} from "lucide-react-native";
import { useState, type ReactNode } from "react";
import {
  Pressable,
  ScrollView,
  Switch,
  Text,
  View,
  type LucideIcon,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const PRIMARY = "#2f038e";
const ON_SURFACE_VARIANT = "#484553";
const SURFACE_CONTAINER = "#eaedfa";
const SURFACE_CONTAINER_HIGH = "#e5e8f4";
const OUTLINE_VARIANT = "#cac4d5";
const ERROR = "#ba1a1a";
const ERROR_CONTAINER = "#ffdad6";
const SECONDARY = "#005eb1";
const BACKGROUND = "#f9f9ff";

const PROFILE_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAadE-otEvIG1r2JskDuEHHjozRi_9eQ2sHNuzHHxrf_L4sAPqPAtsxz_9ji-7OzBFNCPLir9cqLKG5-b-fES2dGqTbTeTCeMTSrnqhgIjQexMM_wQGhikqM0UcToHI7FS7NBYWQtyc-BFsbhwqEnN-rd6cBVnDKjWm_xUiuxHTwAzyq2Pjt_CXtaZ8BghqDC-RT-qEcRk75q3C-t5yyBeNwfboqkG9k574gljqk5SnxOFYN35NkwauooEDcFViNImL1YRVqsQc6U8a";

const ACCOUNT_FIELDS = [
  { label: "Email", value: "s.richardson@joyschool.edu", icon: Mail },
  { label: "Phone Number", value: "+1 (555) 234-8890", icon: Phone },
  {
    label: "Primary Office",
    value: "Administrative Wing, Floor 4",
    icon: Building2,
  },
  { label: "Employee ID", value: "ADM-99230-SR", icon: Badge },
] as const;

const DEVICES = [
  { name: "ZK-Main-01", location: "North Gate Entrance", status: "online" },
  { name: "ZK-Lib-04", location: "Library Corridor", status: "online" },
  { name: "ZK-Staff-02", location: "Staff Lounge", status: "offline" },
] as const;

function openEditProfile() {
  router.push("/profile/edit");
}

function FrozenSlab({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <View
      className={`overflow-hidden rounded-2xl border border-white/80 bg-white/60 shadow-sm ${className}`}
    >
      {children}
    </View>
  );
}

function SectionTitle({ children }: { children: string }) {
  return (
    <Text className="px-1 text-xl font-semibold text-[#171c24]">{children}</Text>
  );
}

function InfoRow({
  label,
  value,
  icon: Icon,
  isLast,
}: {
  label: string;
  value: string;
  icon: LucideIcon;
  isLast?: boolean;
}) {
  return (
    <View
      className={`flex-row items-center gap-4 p-4 ${isLast ? "" : "border-b border-white/40"}`}
    >
      <View className="h-10 w-10 items-center justify-center rounded-full bg-[#2f038e]/5">
        <Icon size={20} color={PRIMARY} />
      </View>
      <View className="flex-1">
        <Text className="text-[11px] font-medium uppercase tracking-wider text-[#484553]">
          {label}
        </Text>
        <Text className="text-base font-medium text-[#171c24]">{value}</Text>
      </View>
    </View>
  );
}

function NotificationRow({
  label,
  value,
  onValueChange,
}: {
  label: string;
  value: boolean;
  onValueChange: (next: boolean) => void;
}) {
  return (
    <View className="flex-row items-center justify-between rounded-xl p-3">
      <Text className="text-base font-medium text-[#171c24]">{label}</Text>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: SURFACE_CONTAINER_HIGH, true: PRIMARY }}
        thumbColor="#ffffff"
      />
    </View>
  );
}

function DeviceRow({
  name,
  location,
  status,
  isLast,
}: {
  name: string;
  location: string;
  status: "online" | "offline";
  isLast?: boolean;
}) {
  const isOnline = status === "online";

  return (
    <View
      className={`flex-row items-center justify-between p-4 ${isLast ? "" : "border-b border-white/40"}`}
    >
      <View className="flex-row items-center gap-4">
        <View
          className="h-10 w-10 items-center justify-center rounded-lg"
          style={{ backgroundColor: SURFACE_CONTAINER }}
        >
          <Terminal size={20} color={ON_SURFACE_VARIANT} />
        </View>
        <View>
          <Text className="text-base font-semibold text-[#171c24]">{name}</Text>
          <Text className="text-[11px] text-[#484553]">{location}</Text>
        </View>
      </View>
      <View
        className={`rounded-full px-3 py-1 ${isOnline ? "bg-green-100" : ""}`}
        style={!isOnline ? { backgroundColor: ERROR_CONTAINER } : undefined}
      >
        <Text
          className={`text-[11px] font-bold ${isOnline ? "text-green-700" : ""}`}
          style={!isOnline ? { color: ERROR } : undefined}
        >
          {isOnline ? "ONLINE" : "OFFLINE"}
        </Text>
      </View>
    </View>
  );
}

function SupportCard({
  title,
  subtitle,
  icon: Icon,
  iconColor,
  iconBg,
}: {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
}) {
  return (
    <Pressable className="flex-1 active:opacity-80">
      <FrozenSlab className="items-center p-5">
        <View
          className="mb-3 h-12 w-12 items-center justify-center rounded-full"
          style={{ backgroundColor: iconBg }}
        >
          <Icon size={28} color={iconColor} />
        </View>
        <Text className="font-bold text-[#171c24]">{title}</Text>
        <Text className="text-[11px] text-[#484553]">{subtitle}</Text>
      </FrozenSlab>
    </Pressable>
  );
}

function ProfileAvatar({
  size = "large",
  onPress,
}: {
  size?: "small" | "large";
  onPress: () => void;
}) {
  const isLarge = size === "large";

  return (
    <Pressable onPress={onPress} className="active:opacity-90">
      <View className="relative">
        <View
          className={`overflow-hidden border-4 border-white shadow-lg ${
            isLarge ? "h-24 w-24 rounded-full" : "h-10 w-10 rounded-full border-2"
          }`}
          style={!isLarge ? { borderColor: `${PRIMARY}33` } : undefined}
        >
          <Image
            source={{ uri: PROFILE_IMAGE }}
            className="h-full w-full"
            contentFit="cover"
          />
        </View>
        {isLarge ? (
          <View
            className="absolute bottom-0 right-0 rounded-full border-2 border-white p-1 shadow-sm"
            style={{ backgroundColor: PRIMARY }}
          >
            <Verified size={16} color="#ffffff" />
          </View>
        ) : null}
      </View>
    </Pressable>
  );
}

export default function Profile() {
  const [pushNotifications, setPushNotifications] = useState(true);
  const [emailSummaries, setEmailSummaries] = useState(true);
  const [systemLogs, setSystemLogs] = useState(false);

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: BACKGROUND }} edges={["top"]}>
      <View className="flex-row items-center justify-between border-b border-white/20 bg-white/80 px-4 py-3 shadow-sm">
        <View className="flex-row items-center gap-2">
          <School size={28} color={PRIMARY} />
          <Text className="text-2xl font-semibold tracking-tight" style={{ color: PRIMARY }}>
            Joy School
          </Text>
        </View>
        <View className="flex-row items-center gap-4">
          <Pressable className="h-10 w-10 items-center justify-center rounded-full active:bg-[#2f038e]/5">
            <Search size={22} color={ON_SURFACE_VARIANT} />
          </Pressable>
          <ProfileAvatar size="small" onPress={openEditProfile} />
        </View>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerClassName="gap-6 px-4 pb-28 pt-6"
        showsVerticalScrollIndicator={false}
      >
        <FrozenSlab className="items-center p-6">
          <View className="mb-4">
            <ProfileAvatar size="large" onPress={openEditProfile} />
          </View>
          <Text className="text-2xl font-bold text-[#171c24]">Dr. Samuel Richardson</Text>
          <Text className="mb-6 font-medium" style={{ color: PRIMARY }}>
            Super Admin
          </Text>
          <View className="w-full flex-row gap-3">
            <Pressable
              onPress={openEditProfile}
              className="flex-1 items-center rounded-xl py-3 active:opacity-90"
              style={{ backgroundColor: PRIMARY }}
            >
              <Text className="font-medium text-white">Edit Profile</Text>
            </Pressable>
            <Pressable
              className="flex-1 items-center rounded-xl border py-3 active:opacity-90"
              style={{
                backgroundColor: SURFACE_CONTAINER_HIGH,
                borderColor: OUTLINE_VARIANT,
              }}
            >
              <Text className="font-medium text-[#171c24]">Account Settings</Text>
            </Pressable>
          </View>
        </FrozenSlab>

        <View className="gap-4">
          <SectionTitle>Account Information</SectionTitle>
          <FrozenSlab>
            {ACCOUNT_FIELDS.map((field, index) => (
              <InfoRow
                key={field.label}
                label={field.label}
                value={field.value}
                icon={field.icon}
                isLast={index === ACCOUNT_FIELDS.length - 1}
              />
            ))}
          </FrozenSlab>
        </View>

        <View className="gap-4">
          <SectionTitle>Notifications</SectionTitle>
          <FrozenSlab className="p-2">
            <NotificationRow
              label="Push Notifications"
              value={pushNotifications}
              onValueChange={setPushNotifications}
            />
            <NotificationRow
              label="Email Summaries"
              value={emailSummaries}
              onValueChange={setEmailSummaries}
            />
            <NotificationRow
              label="System Logs"
              value={systemLogs}
              onValueChange={setSystemLogs}
            />
          </FrozenSlab>
        </View>

        <View className="gap-4">
          <View className="flex-row items-end justify-between px-1">
            <SectionTitle>Device Management</SectionTitle>
            <Pressable
              className="flex-row items-center gap-1.5 rounded-full px-3 py-1.5 active:opacity-80"
              style={{ backgroundColor: `${PRIMARY}0d` }}
            >
              <RefreshCw size={16} color={PRIMARY} />
              <Text className="text-xs font-semibold tracking-wide" style={{ color: PRIMARY }}>
                Scan Devices
              </Text>
            </Pressable>
          </View>
          <FrozenSlab>
            {DEVICES.map((device, index) => (
              <DeviceRow
                key={device.name}
                name={device.name}
                location={device.location}
                status={device.status}
                isLast={index === DEVICES.length - 1}
              />
            ))}
          </FrozenSlab>
        </View>

        <View className="gap-4">
          <SectionTitle>Support & Help</SectionTitle>
          <View className="flex-row gap-4">
            <SupportCard
              title="Knowledge Base"
              subtitle="Documentation"
              icon={CircleHelp}
              iconColor={PRIMARY}
              iconBg={`${PRIMARY}1a`}
            />
            <SupportCard
              title="Direct Support"
              subtitle="Chat with us"
              icon={Headphones}
              iconColor={SECONDARY}
              iconBg={`${SECONDARY}1a`}
            />
          </View>
        </View>

        <View className="items-center gap-6 pb-4 pt-8">
          <Pressable
            className="flex-row items-center gap-3 rounded-full border px-10 py-4 active:opacity-90"
            style={{
              backgroundColor: `${ERROR_CONTAINER}33`,
              borderColor: `${ERROR}1a`,
            }}
          >
            <LogOut size={22} color={ERROR} />
            <Text className="font-bold" style={{ color: ERROR }}>
              Log Out Now
            </Text>
          </Pressable>
          <View className="items-center">
            <Text className="text-[11px] text-[#484553]/50">Joy School Administrator</Text>
            <Text className="text-[11px] uppercase tracking-widest text-[#484553]/30">
              v4.2.1-Build-90
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
