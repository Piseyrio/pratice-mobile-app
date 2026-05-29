import { Image } from "expo-image";
import {
  BarChart3,
  BookOpen,
  Calendar,
  ClipboardList,
  DoorOpen,
  FileText,
  GraduationCap,
  History,
  Info,
  Monitor,
  Receipt,
  School,
  Search,
  Star,
  Tags,
  UserCheck,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react-native";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const PRIMARY = "#1b0058";
const SECONDARY = "#005eb1";
const TERTIARY = "#6a5f00";
const ERROR = "#ba1a1a";
const ON_SURFACE_VARIANT = "#484553";
const BACKGROUND = "#f9f9ff";

const PROFILE_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCUoXzRSHO-I4bcX0lrN7VMI9s7pI4o20_kggyYIidOhlanm6Ytcz9FHs0096itYTrL62IQQK2T1010quxHML6aGE0ce5e4yoI3pUqaeC9ouV4oFIhHSg7wr__Tbp6_jP_5MSm09hVfVTIMQODtyBxdMa44D30s0sQcCxPyqGaL0WWYVwVDK7r4zdc1WieYBdfs7tYr4xIZVdKD3tEqjC6t9wUbjxnSTnfAWhqhenYiOn7cTuVHofNDPS3SGGnodOfUTRbzV-0s_DJS";

type CategoryItem = {
  id: string;
  label: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
};

const MANAGEMENT_CATEGORIES: CategoryItem[] = [
  { id: "students", label: "Students", icon: Users, iconBg: "#eff6ff", iconColor: PRIMARY },
  {
    id: "teachers",
    label: "Teachers",
    icon: GraduationCap,
    iconBg: "#ecfdf5",
    iconColor: SECONDARY,
  },
  { id: "classes", label: "Classes", icon: DoorOpen, iconBg: "#faf5ff", iconColor: TERTIARY },
  { id: "subjects", label: "Subjects", icon: BookOpen, iconBg: "#fff7ed", iconColor: "#d97706" },
  {
    id: "attendance",
    label: "Attendance",
    icon: UserCheck,
    iconBg: "#fff1f2",
    iconColor: ERROR,
  },
  {
    id: "schedule",
    label: "Schedule",
    icon: Calendar,
    iconBg: "#ecfeff",
    iconColor: "#0891b2",
  },
  {
    id: "sessions",
    label: "Sessions",
    icon: History,
    iconBg: "#eef2ff",
    iconColor: "#4f46e5",
  },
  { id: "score", label: "Score", icon: Star, iconBg: "#fffbeb", iconColor: "#b45309" },
  {
    id: "lesson-plan",
    label: "Lesson Plan",
    icon: ClipboardList,
    iconBg: "#f7fee7",
    iconColor: "#4d7c0f",
  },
  {
    id: "devices",
    label: "Devices",
    icon: Monitor,
    iconBg: "#f1f5f9",
    iconColor: "#475569",
  },
  { id: "fee-types", label: "Fee Types", icon: Tags, iconBg: "#f0fdfa", iconColor: "#0d9488" },
  {
    id: "payments",
    label: "Payments",
    icon: Wallet,
    iconBg: "#f0fdf4",
    iconColor: "#15803d",
  },
  {
    id: "invoices",
    label: "Invoices",
    icon: Receipt,
    iconBg: "#f5f3ff",
    iconColor: "#6d28d9",
  },
  {
    id: "monthly-stats",
    label: "Monthly Stats",
    icon: BarChart3,
    iconBg: "#f0f9ff",
    iconColor: "#0284c7",
  },
  { id: "information", label: "Information", icon: Info, iconBg: "#f3f4f6", iconColor: "#4b5563" },
  {
    id: "pdf-documents",
    label: "PDF Documents",
    icon: FileText,
    iconBg: "#fef2f2",
    iconColor: "#dc2626",
  },
];

function CategoryCard({ item }: { item: CategoryItem }) {
  const Icon = item.icon;

  return (
    <Pressable
      className="w-[48%] active:opacity-90"
      onPress={() => {}}
    >
      <View
        className="flex-row items-center gap-3 rounded-lg border border-white/80 bg-white/80 px-3 py-2.5"
        style={{
          shadowColor: "#002850",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.05,
          shadowRadius: 15,
          elevation: 3,
        }}
      >
        <View
          className="h-9 w-9 shrink-0 items-center justify-center rounded-lg"
          style={{ backgroundColor: item.iconBg }}
        >
          <Icon size={18} color={item.iconColor} />
        </View>
        <Text
          className="flex-1 text-xs font-semibold text-[#171c24]"
          numberOfLines={1}
        >
          {item.label}
        </Text>
      </View>
    </Pressable>
  );
}

export default function Categories() {
  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: BACKGROUND }} edges={["top"]}>
      <View className="flex-row items-center justify-between border-b border-white/20 bg-white/80 px-4 py-3 shadow-sm">
        <View className="flex-row items-center gap-3">
          <School size={24} color={PRIMARY} />
          <Text className="text-2xl font-semibold tracking-tight text-[#1b0058]">
            Joy School
          </Text>
        </View>
        <View className="flex-row items-center gap-2">
          <Pressable className="rounded-full p-2 active:bg-[#1b0058]/5">
            <Search size={22} color={ON_SURFACE_VARIANT} />
          </Pressable>
          <View className="h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-white/30 bg-[#e7deff]">
            <Image
              source={{ uri: PROFILE_IMAGE }}
              className="h-full w-full"
              contentFit="cover"
            />
          </View>
        </View>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerClassName="px-4 pb-28 pt-6"
        showsVerticalScrollIndicator={false}
      >
        <View className="mb-8">
          <Text className="text-[28px] font-semibold leading-9 tracking-tight text-[#171c24]">
            Management Categories
          </Text>
          <Text className="mt-1 text-base leading-6 text-[#484553]/80">
            Explore and manage school modules
          </Text>
        </View>

        <View className="flex-row flex-wrap justify-between gap-y-3">
          {MANAGEMENT_CATEGORIES.map((item) => (
            <CategoryCard key={item.id} item={item} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
