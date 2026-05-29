import { Image } from "expo-image";
import {
  BookMarked,
  BookOpen,
  CalendarSync,
  ClipboardCheck,
  Copy,
  CreditCard,
  FileText,
  GraduationCap,
  Receipt,
  School,
  UserPlus,
  Wallet,
  type LucideIcon,
} from "lucide-react-native";
import { type ReactNode } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const PRIMARY = "#1b0058";
const PRIMARY_FIXED = "#e7deff";
const PRIMARY_CONTAINER = "#30008f";
const SECONDARY = "#005eb1";
const SECONDARY_FIXED = "#d5e3ff";
const TERTIARY = "#6a5f00";
const TERTIARY_FIXED = "#f6e472";
const ERROR = "#ba1a1a";
const ERROR_CONTAINER = "#ffdad6";
const ON_SURFACE_VARIANT = "#484553";
const BACKGROUND = "#f9f9ff";
const SURFACE_CONTAINER_HIGH = "#e5e8f4";

const PROFILE_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCUoXzRSHO-I4bcX0lrN7VMI9s7pI4o20_kggyYIidOhlanm6Ytcz9FHs0096itYTrL62IQQK2T1010quxHML6aGE0ce5e4yoI3pUqaeC9ouV4oFIhHSg7wr__Tbp6_jP_5MSm09hVfVTIMQODtyBxdMa44D30s0sQcCxPyqGaL0WWYVwVDK7r4zdc1WieYBdfs7tYr4xIZVdKD3tEqjC6t9wUbjxnSTnfAWhqhenYiOn7cTuVHofNDPS3SGGnodOfUTRbzV-0s_DJS";

type ActionCard = {
  id: string;
  category: string;
  title: string;
  subtitle?: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  categoryColor: string;
  wide?: boolean;
  badge?: string;
};

const BENTO_ACTIONS: ActionCard[] = [
  {
    id: "student",
    category: "REGISTRATION",
    title: "New Student",
    icon: UserPlus,
    iconBg: PRIMARY_FIXED,
    iconColor: PRIMARY,
    categoryColor: PRIMARY,
  },
  {
    id: "teacher",
    category: "FACULTY",
    title: "New Teacher",
    icon: GraduationCap,
    iconBg: SECONDARY_FIXED,
    iconColor: SECONDARY,
    categoryColor: SECONDARY,
  },
  {
    id: "attendance",
    category: "OPERATIONS",
    title: "Mark Attendance",
    subtitle: "Log presence for 12 active classes today.",
    icon: ClipboardCheck,
    iconBg: TERTIARY_FIXED,
    iconColor: TERTIARY,
    categoryColor: TERTIARY,
    wide: true,
    badge: "DAILY TASK",
  },
  {
    id: "invoice",
    category: "FINANCE",
    title: "New Invoice",
    icon: FileText,
    iconBg: ERROR_CONTAINER,
    iconColor: ERROR,
    categoryColor: ERROR,
  },
  {
    id: "payment",
    category: "CASHIER",
    title: "Create Payment",
    icon: Wallet,
    iconBg: PRIMARY_CONTAINER,
    iconColor: "#ffffff",
    categoryColor: PRIMARY_CONTAINER,
  },
  {
    id: "class",
    category: "ACADEMIC",
    title: "New Class",
    icon: BookOpen,
    iconBg: SURFACE_CONTAINER_HIGH,
    iconColor: ON_SURFACE_VARIANT,
    categoryColor: ON_SURFACE_VARIANT,
  },
  {
    id: "subject",
    category: "CURRICULUM",
    title: "New Subject",
    icon: BookMarked,
    iconBg: SURFACE_CONTAINER_HIGH,
    iconColor: ON_SURFACE_VARIANT,
    categoryColor: ON_SURFACE_VARIANT,
  },
];

const FINANCE_SHORTCUTS = [
  {
    id: "generate",
    label: "Generate New Invoice",
    icon: CreditCard,
    variant: "primary" as const,
  },
  {
    id: "bulk",
    label: "Bulk Generate Invoices",
    icon: Copy,
    variant: "secondary" as const,
  },
  {
    id: "auto",
    label: "Auto Generate Monthly",
    icon: CalendarSync,
    variant: "outline" as const,
  },
  {
    id: "manual",
    label: "Record Manual Payment",
    icon: Wallet,
    variant: "muted" as const,
  },
];

const RECENT_ADDITIONS = [
  {
    id: "1",
    title: "Julianne Devis",
    subtitle: "Added to Class 4-A • 12 mins ago",
    badge: "Student",
    badgeBg: "#dcfce7",
    badgeColor: "#15803d",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAs1BsGpseRJIIIsbA-YPKGuMv_KIBmCxrXbtbnyEKV6VZtZ18h3PHHV-juE2Y8nLGjhKUCtR5bxo2wkw_bzcxUNCML2W5PSf1z48hn2FB9mCoCiAMsjkEQhvejHxfWlOf1hEWL3fX4y1GZUgE0PErOpaAisBjs-FTBDdqT4kgDyhOnNCtsqRY4tkyPbfzoRspONwBF3KnoicvuMpPJ8yeU6cPU9lZ4B_HIFMw0804Lq12EHLUiXcad6ZrclLn-sOk2bE4_Y1obQvZW",
    round: true,
  },
  {
    id: "2",
    title: "Invoice #INV-9902",
    subtitle: "Generated for Tuition Fees • 45 mins ago",
    badge: "Invoice",
    badgeBg: "#dbeafe",
    badgeColor: "#1d4ed8",
    icon: Receipt,
    iconBg: PRIMARY_FIXED,
    iconColor: PRIMARY,
  },
  {
    id: "3",
    title: "Mark Richardson",
    subtitle: "Assigned to Mathematics Dept • 2 hours ago",
    badge: "Teacher",
    badgeBg: "#f3e8ff",
    badgeColor: "#7e22ce",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDfjYycpQXLVGHvCPtO2MSW65idd9Tnu6cJQkH_uptMHCUCFX2YVGAtHU48ug3RnQew-H5_2pdh-HPqxzRNLTZfDTXc2QCouDF3BBqrAyAWErRi7r3tKes4dBIkL-xUeYF9Sel3zQNGTqJLj_brcTP61aHXuLInu1_iHz5_cDO1J8hJMo5Yj37AFH811DvcK4PNpROIa8atg-1NLPEMESroO8ELumc8GUpB3WOnKg5Dyoi9VlNPHisBLK5IpZMwTqpPbqH0v9jGu2Nj",
    round: true,
  },
];

function FrozenSlab({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <View
      className={`overflow-hidden rounded-2xl border border-white/80 bg-white/80 shadow-sm ${className}`}
      style={{
        shadowColor: "#002850",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 15,
        elevation: 3,
      }}
    >
      {children}
    </View>
  );
}

function ActionBentoCard({ action }: { action: ActionCard }) {
  const Icon = action.icon;

  return (
    <Pressable
      className={`active:opacity-90 ${action.wide ? "w-full" : "w-[48%]"}`}
      onPress={() => {}}
    >
      <FrozenSlab className={`gap-3 p-4 ${action.wide ? "" : "min-h-[140px]"}`}>
        {action.wide ? (
          <View className="flex-row items-start justify-between">
            <View
              className="h-10 w-10 items-center justify-center rounded-lg"
              style={{ backgroundColor: action.iconBg }}
            >
              <Icon size={22} color={action.iconColor} />
            </View>
            {action.badge ? (
              <View className="rounded-full bg-[#1b0058]/10 px-2 py-1">
                <Text className="text-[10px] font-bold text-[#1b0058]">
                  {action.badge}
                </Text>
              </View>
            ) : null}
          </View>
        ) : (
          <View
            className="h-10 w-10 items-center justify-center rounded-lg"
            style={{ backgroundColor: action.iconBg }}
          >
            <Icon size={22} color={action.iconColor} />
          </View>
        )}
        <View>
          <Text
            className="mb-1 text-[10px] font-semibold uppercase tracking-wider"
            style={{ color: action.categoryColor }}
          >
            {action.category}
          </Text>
          <Text className="text-xl font-semibold text-[#171c24]">{action.title}</Text>
          {action.subtitle ? (
            <Text className="mt-1 text-sm text-[#484553]">{action.subtitle}</Text>
          ) : null}
        </View>
      </FrozenSlab>
    </Pressable>
  );
}

function FinanceShortcutButton({
  label,
  icon: Icon,
  variant,
}: (typeof FINANCE_SHORTCUTS)[number]) {
  const base = "min-h-[88px] flex-1 items-center justify-center gap-2 rounded-xl px-3 py-3 active:opacity-90";

  if (variant === "primary") {
    return (
      <Pressable className={`${base} bg-[#1b0058] shadow-md`} onPress={() => {}}>
        <Icon size={20} color="#ffffff" />
        <Text className="text-center text-[11px] font-semibold uppercase tracking-wide text-white">
          {label}
        </Text>
      </Pressable>
    );
  }

  if (variant === "secondary") {
    return (
      <Pressable className={`${base} bg-[#005eb1] shadow-md`} onPress={() => {}}>
        <Icon size={20} color="#ffffff" />
        <Text className="text-center text-[11px] font-semibold uppercase tracking-wide text-white">
          {label}
        </Text>
      </Pressable>
    );
  }

  if (variant === "outline") {
    return (
      <Pressable
        className={`${base} border border-[#1b0058]/20 bg-white/80`}
        onPress={() => {}}
      >
        <Icon size={20} color={PRIMARY} />
        <Text className="text-center text-[11px] font-semibold uppercase tracking-wide text-[#1b0058]">
          {label}
        </Text>
      </Pressable>
    );
  }

  return (
    <Pressable
      className={`${base} border border-[#cac4d5] bg-white/80`}
      onPress={() => {}}
    >
      <Icon size={20} color={ON_SURFACE_VARIANT} />
      <Text className="text-center text-[11px] font-semibold uppercase tracking-wide text-[#484553]">
        {label}
      </Text>
    </Pressable>
  );
}

export default function Add() {
  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: BACKGROUND }} edges={["top"]}>
      <View className="flex-row items-center justify-between border-b border-white/20 bg-white/80 px-4 py-3 shadow-sm">
        <View className="flex-row items-center gap-3">
          <View
            className="h-10 w-10 items-center justify-center rounded-xl"
            style={{ backgroundColor: PRIMARY_FIXED }}
          >
            <School size={22} color={PRIMARY} />
          </View>
          <Text className="text-2xl font-semibold tracking-tight text-[#1b0058]">
            Joy School
          </Text>
        </View>
        <View className="h-10 w-10 overflow-hidden rounded-full border-2 border-[#e7deff]">
          <Image
            source={{ uri: PROFILE_IMAGE }}
            className="h-full w-full"
            contentFit="cover"
          />
        </View>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerClassName="px-4 pb-28 pt-6"
        showsVerticalScrollIndicator={false}
      >
        <View className="mb-8">
          <Text className="mb-2 text-[28px] font-semibold leading-9 text-[#171c24]">
            Create New Record
          </Text>
          <Text className="text-base leading-6 text-[#484553]">
            Select an action to add new data to the school ecosystem.
          </Text>
        </View>

        <View className="mb-12 flex-row flex-wrap justify-between gap-y-4">
          {BENTO_ACTIONS.map((action) => (
            <ActionBentoCard key={action.id} action={action} />
          ))}
        </View>

        <View className="mb-12">
          <Text className="mb-4 text-xl font-semibold text-[#171c24]">
            Finance Shortcuts
          </Text>
          <View className="flex-row flex-wrap gap-3">
            {FINANCE_SHORTCUTS.map((shortcut) => (
              <View key={shortcut.id} className="w-[48%]">
                <FinanceShortcutButton {...shortcut} />
              </View>
            ))}
          </View>
        </View>

        <View className="mb-8">
          <View className="mb-4 flex-row items-end justify-between">
            <Text className="text-xl font-semibold text-[#171c24]">Recent Additions</Text>
            <Pressable className="active:opacity-70">
              <Text className="text-xs font-semibold uppercase tracking-wide text-[#1b0058]">
                View All
              </Text>
            </Pressable>
          </View>

          <FrozenSlab>
            {RECENT_ADDITIONS.map((item, index) => {
              const isLast = index === RECENT_ADDITIONS.length - 1;
              const FeedIcon = item.icon;

              return (
                <Pressable
                  key={item.id}
                  className={`flex-row items-center gap-4 p-3 active:bg-white/40 ${isLast ? "" : "border-b border-white/30"}`}
                  onPress={() => {}}
                >
                  {item.image ? (
                    <View
                      className={`h-10 w-10 overflow-hidden bg-[#eaedfa] ${item.round ? "rounded-full" : "rounded-lg"}`}
                    >
                      <Image
                        source={{ uri: item.image }}
                        className="h-full w-full"
                        contentFit="cover"
                      />
                    </View>
                  ) : (
                    <View
                      className="h-10 w-10 items-center justify-center rounded-lg"
                      style={{ backgroundColor: item.iconBg }}
                    >
                      {FeedIcon ? (
                        <FeedIcon size={20} color={item.iconColor} />
                      ) : null}
                    </View>
                  )}
                  <View className="min-w-0 flex-1">
                    <Text className="text-base font-semibold text-[#171c24]">
                      {item.title}
                    </Text>
                    <Text className="text-[11px] text-[#484553]">{item.subtitle}</Text>
                  </View>
                  <View
                    className="rounded px-2 py-0.5"
                    style={{ backgroundColor: item.badgeBg }}
                  >
                    <Text
                      className="text-[10px] font-bold uppercase tracking-wider"
                      style={{ color: item.badgeColor }}
                    >
                      {item.badge}
                    </Text>
                  </View>
                </Pressable>
              );
            })}
          </FrozenSlab>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
