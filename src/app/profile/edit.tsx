import { Image } from "expo-image";
import { router, useNavigation } from "expo-router";
import {
  ArrowLeft,
  Bell,
  Cake,
  Calendar,
  Download,
  Fingerprint,
  History,
  Mail,
  MapPin,
  Phone,
  Star,
  User,
  Users,
} from "lucide-react-native";
import { useLayoutEffect, type ReactNode } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  View,
  type LucideIcon,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const PRIMARY = "#1b0058";
const ON_SURFACE_VARIANT = "#484553";
const OUTLINE_VARIANT = "#cac4d5";
const SURFACE_CONTAINER_LOW = "#f1f3ff";
const SURFACE_CONTAINER_HIGH = "#dfe2ef";
const TERTIARY = "#6a5f00";
const TERTIARY_FIXED = "#f6e472";
const TERTIARY_CONTAINER = "#bcac41";
const SECONDARY = "#005eb1";
const ERROR = "#ba1a1a";
const BACKGROUND = "#f9f9ff";

const STUDENT_PHOTO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBJEZ3d8_SqgGKRrJ2rDCsbd-pkXksBpQK22cKrKh9i7fiRMzwbebmLQ_CqCicyWVddi_Xl4d4jOeNFMiyQpjStDwjFNaw0QOYaqMBTb8lt8gzC7pFoU6YsChW6zDs6yJK_tru-2QdyILRqmgy8-kGGLHMYFPvsZJzqlInyMVTtDkPOHeC6Iv-hT7_wsYrsIcmnIDr0vjYhL9cR2cVxw4KyQ4Ikg3-9EW4b73z0P2gKruA8n6m9jmiD__QMI_IolSmX2u-h3J1j77g6";

const ID_CARD_PHOTO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB8QsTVOR_mnHtYYSFvGVqgapfGpL7AiEA6mIq20KASEvOUu5T15jJ61KcA0R2WXPSX4RQNPelZUi6L-R7_C4VZEBvw6hpg8cLsc9aCY_3_mdqA9JuNlvjmG69KLBvMSe6euxYIwZFlgC0LVP_Q6xjZIynd4ZE-yo9Vi93oBzhigx7PHgWdBGkxwIOVacXDuCkCfvNta8v-RZolHFTzJM6y8UNYa74SU7i-Yki9VfZTyoX7RRBVgk3hQfoYAIKYgB_F-h6AWqQ6ZCEE";

const QR_CODE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD_0H9FqLzBSUytiiLKJI-0cn55m9ot7G6AyrA_Ayr9e8oyNUZXzP5IsH148NZDGcDRc18JLpvPKNPBGywbEjJq06PeFM3eIrwWzQ5lu7ObrMwyRIqybMRK-Zr3dEFEgfHVIXO3mBucaiqv8_xTeJf3KM6AwjzPDm3xI4rhU4EF7cAQ3SNxBBgpd1wfGnXWAUuPhFBSkxr5Qcm-fWF0wNsvnQgOdTynMAoo4eyv2b2k_siLof9pizHk4VzMvC9h6r-lqtOUX9hzdnzU";

const HEADER_AVATAR =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCHwvPLWZ1xBLa1QT2CgQaDxhR27_4BeJW82gyJzc8LzvDLqqA1vlRJKl5L6JNqc-uPxWB_e_wFcCA6JWiqHuNvwusfT58niRvS326rPwqFzbAIb0wHdEiPNa7MB5-NB-X6wwuDif8shD_aU9Al6h1j7PdbjQnXrxa_rtBsQxPVUhIz-OLpRBv5xNjVNjUfiqk7i_iZ0MEKjt1RlLEHbDa6tTAEFIET2dytLyTM64m3VfQ2mx9WX1wjp2hwRDB8Xjq4ceha8ck5RXsv";

const PERSONAL_ROWS = [
  { label: "Birthday", value: "Aug 11, 2022", icon: Cake, color: TERTIARY_CONTAINER },
  { label: "Phone", value: "090222753", icon: Phone, color: SECONDARY },
  { label: "Account Email", value: "JSNC-20@gmail.com", icon: Mail, color: PRIMARY },
  { label: "Father's Name", value: "Yes", icon: User, color: ERROR },
  { label: "Mother's Name", value: "Yes", icon: Users, color: "#30008f" },
  { label: "Address", value: "ដង្កោ", icon: MapPin, color: "#484000" },
] as const;

const ATTENDANCE_STATS = [
  { label: "Present", value: "109", color: "#504700" },
  { label: "Late", value: "0", color: TERTIARY },
  { label: "Absent", value: "96", color: ERROR },
  { label: "Excused", value: "20", color: SECONDARY },
] as const;

const WEEKLY_SCHEDULE = [
  { day: "Sun", title: "Combine...", time: "10:00 - 11:00" },
  { day: "Mon", title: "HSK 5 - F...", time: "18:00 - 19:00" },
  { day: "Tue", title: "HSK 5 - F...", time: "18:00 - 19:00" },
  { day: "Wed", title: "HSK 5 - F...", time: "18:00 - 19:00" },
  { day: "Thu", title: "Thu - Ser...", time: "18:00 - 19:00" },
  { day: "Fri", title: "HSK 5 - F...", time: "18:00 - 19:00" },
] as const;

function FrozenSlab({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <View
      className={`overflow-hidden rounded-xl border border-white/50 bg-white/80 shadow-sm ${className}`}
    >
      {children}
    </View>
  );
}

function DetailRow({
  label,
  value,
  icon: Icon,
  iconColor,
}: {
  label: string;
  value: string;
  icon: LucideIcon;
  iconColor: string;
}) {
  return (
    <View className="flex-row items-center justify-between">
      <View className="flex-row items-center gap-3">
        <Icon size={20} color={iconColor} />
        <Text className="text-sm text-[#484553]">{label}</Text>
      </View>
      <Text className="text-sm font-bold text-[#171c24]">{value}</Text>
    </View>
  );
}

function EnrollmentRow({
  label,
  value,
  isLast,
}: {
  label: string;
  value: string;
  isLast?: boolean;
}) {
  return (
    <View
      className={`flex-row items-center justify-between ${isLast ? "" : "border-b border-[#cac4d5]/30 pb-3"}`}
    >
      <Text className="text-base text-[#484553]">{label}</Text>
      <Text className="text-base font-bold" style={{ color: "#004788" }}>
        {value}
      </Text>
    </View>
  );
}

export default function EditProfile() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    const tabNav = navigation.getParent();
    tabNav?.setOptions({ tabBarStyle: { display: "none" } });
    return () => tabNav?.setOptions({ tabBarStyle: undefined });
  }, [navigation]);

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: BACKGROUND }} edges={["top"]}>
      <View className="flex-row items-center justify-between border-b border-[#cac4d5]/30 bg-[#f9f9ff]/80 px-4 py-3">
        <View className="flex-row items-center gap-3">
          <Pressable
            onPress={() => router.back()}
            className="h-10 w-10 items-center justify-center rounded-full active:bg-black/5"
          >
            <ArrowLeft size={22} color={PRIMARY} />
          </Pressable>
          <Text className="text-lg font-semibold text-[#171c24]">Joy School Night Class</Text>
        </View>
        <View className="flex-row items-center gap-4">
          <Bell size={22} color={ON_SURFACE_VARIANT} />
          <View className="h-10 w-10 overflow-hidden rounded-full border-2 border-[#1b0058]/20">
            <Image source={{ uri: HEADER_AVATAR }} className="h-full w-full" contentFit="cover" />
          </View>
        </View>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerClassName="gap-6 px-4 pb-8 pt-6"
        showsVerticalScrollIndicator={false}
      >
        <FrozenSlab className="items-center p-6">
          <View className="relative mb-4">
            <View className="h-40 w-32 overflow-hidden rounded-xl border-4 border-white shadow-md">
              <Image
                source={{ uri: STUDENT_PHOTO }}
                className="h-full w-full"
                contentFit="cover"
              />
            </View>
            <View className="absolute -bottom-2 left-0 right-0 items-center">
              <View className="rounded-full border border-[#cac4d5]/20 bg-white px-3 py-1 shadow-sm">
                <Text className="text-[11px] font-medium tracking-widest text-[#504700]">
                  ACTIVE
                </Text>
              </View>
            </View>
          </View>
          <Text className="text-center text-2xl font-semibold text-[#171c24]">
            ស្រីនុត ហាង/苏玲娜
          </Text>
          <View className="mt-6 w-full gap-2">
            <View
              className="flex-row items-center justify-between rounded-lg p-3"
              style={{ backgroundColor: SURFACE_CONTAINER_LOW }}
            >
              <View className="flex-row items-center gap-2">
                <Star size={16} color={PRIMARY} />
                <Text className="text-xs font-semibold uppercase tracking-wide text-[#484553]">
                  Code
                </Text>
              </View>
              <Text className="text-sm font-bold text-[#171c24]">JSNC-20</Text>
            </View>
            <View
              className="flex-row items-center justify-between rounded-lg p-3"
              style={{ backgroundColor: SURFACE_CONTAINER_LOW }}
            >
              <View className="flex-row items-center gap-2">
                <Fingerprint size={16} color={PRIMARY} />
                <Text className="text-xs font-semibold uppercase tracking-wide text-[#484553]">
                  Biometric
                </Text>
              </View>
              <Text className="text-sm font-bold text-[#171c24]">20</Text>
            </View>
          </View>
        </FrozenSlab>

        <FrozenSlab className="p-5">
          <View className="mb-5 flex-row items-center justify-between px-1">
            <Text className="text-2xl font-semibold text-[#171c24]">Personal & Contact</Text>
            <Text className="text-[11px] text-[#797584]">Joined Dec 2025</Text>
          </View>
          <View className="gap-4">
            {PERSONAL_ROWS.map((row) => (
              <DetailRow
                key={row.label}
                label={row.label}
                value={row.value}
                icon={row.icon}
                iconColor={row.color}
              />
            ))}
          </View>
        </FrozenSlab>

        <FrozenSlab className="p-6">
          <Text className="mb-4 text-2xl font-semibold text-[#171c24]">Enrollment</Text>
          <View className="gap-4">
            <EnrollmentRow label="Class" value="C.5 Fan Xia" />
            <EnrollmentRow label="Subjects" value="Hsk 5 Fan Xai" isLast />
          </View>
        </FrozenSlab>

        <FrozenSlab className="p-6">
          <Text className="mb-6 text-2xl font-semibold text-[#171c24]">Lifetime Attendance</Text>
          <View className="flex-row">
            {ATTENDANCE_STATS.map((stat) => (
              <View key={stat.label} className="flex-1 items-center">
                <Text className="text-2xl font-bold" style={{ color: stat.color }}>
                  {stat.value}
                </Text>
                <Text className="text-[11px] text-[#797584]">{stat.label}</Text>
              </View>
            ))}
          </View>
        </FrozenSlab>

        <FrozenSlab className="p-4">
          <View className="mb-4 flex-row items-center gap-2">
            <Calendar size={22} color="#484000" />
            <Text className="text-lg font-semibold text-[#171c24]">Enrolled Weekly Schedule</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pb-2">
            <View className="flex-row gap-2">
              {WEEKLY_SCHEDULE.map((item) => (
                <View key={item.day} className="items-center gap-2">
                  <Text className="text-xs font-bold text-[#171c24]">{item.day}</Text>
                  <View
                    className="w-20 rounded-lg border p-2"
                    style={{
                      backgroundColor: `${TERTIARY_FIXED}33`,
                      borderColor: `${TERTIARY_FIXED}4d`,
                    }}
                  >
                    <Text className="text-center text-[10px] font-bold text-[#171c24]">
                      {item.title}
                    </Text>
                    <Text className="text-center text-[10px] text-[#797584]">{item.time}</Text>
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
          <Text className="mt-3 text-center text-[10px] italic text-[#797584]">
            Read-only timetable based on enrolled sessions.
          </Text>
        </FrozenSlab>

        <FrozenSlab className="p-4">
          <Text className="mb-6 px-2 text-2xl font-semibold text-[#171c24]">Student ID Card</Text>
          <View
            className="overflow-hidden rounded-2xl border p-6 shadow-lg"
            style={{
              backgroundColor: "#f0f4ff",
              borderColor: `${OUTLINE_VARIANT}33`,
            }}
          >
            <View className="mb-6 flex-row items-start justify-between">
              <View>
                <Text className="text-sm font-bold leading-tight" style={{ color: "#4b00d3" }}>
                  សាលាអសប្បាយសិក្សា
                </Text>
                <Text className="text-xs font-bold text-[#ba1a1a]">喜乐学校夜学班</Text>
                <Text className="mt-1 text-[10px] font-bold uppercase tracking-widest text-[#171c24]">
                  Joy School Night Class
                </Text>
              </View>
              <View className="rounded bg-[#1b0058]/5 p-2">
                <Text className="text-[10px] font-bold text-[#1b0058]">វេនយប់</Text>
              </View>
            </View>
            <View className="flex-row gap-4">
              <View className="h-32 w-24 overflow-hidden rounded-lg border-2 border-white shadow-sm">
                <Image
                  source={{ uri: ID_CARD_PHOTO }}
                  className="h-full w-full"
                  contentFit="cover"
                />
              </View>
              <View className="flex-1">
                <Text className="text-2xl font-bold text-[#171c24]">ស្រីនុត</Text>
                <Text className="mb-2 text-2xl font-bold text-[#171c24]">ហាង/苏玲娜</Text>
                <View className="gap-1">
                  <View className="flex-row justify-between">
                    <Text className="text-[10px] text-[#797584]">Code :</Text>
                    <Text className="text-[10px] font-bold">JSNC-20</Text>
                  </View>
                  <View className="flex-row justify-between">
                    <Text className="text-[10px] text-[#797584]">scan :</Text>
                    <Text className="text-[10px] font-bold">20</Text>
                  </View>
                </View>
                <View className="mt-4 flex-row items-center gap-1 self-start rounded-full border border-yellow-400/30 bg-yellow-400/20 px-2 py-0.5">
                  <Star size={12} color="#854d0e" fill="#854d0e" />
                  <Text className="text-[10px] font-bold text-yellow-800">STUDENT</Text>
                  <Star size={12} color="#854d0e" fill="#854d0e" />
                </View>
              </View>
            </View>
            <View className="mt-6 flex-row items-end justify-between">
              <View className="gap-1">
                <Text className="text-[10px]">
                  <Text className="text-[#797584]">Class : </Text>
                  <Text className="font-bold">C.5 Fan Xia</Text>
                </Text>
                <Text className="text-[10px]">
                  <Text className="text-[#797584]">Subject : </Text>
                  <Text className="font-bold">Hsk 5 Fan Xai</Text>
                </Text>
                <Text className="text-[10px]">
                  <Text className="text-[#797584]">Teacher : </Text>
                  <Text className="font-bold">Fan xia</Text>
                </Text>
              </View>
              <View className="h-16 w-16 rounded-md border border-[#cac4d5]/30 bg-white p-1">
                <Image source={{ uri: QR_CODE }} className="h-full w-full" contentFit="contain" />
              </View>
            </View>
            <View className="mt-6 flex-row items-center justify-between border-t border-dashed border-[#cac4d5]/50 pt-4">
              <Text className="max-w-[150px] text-[8px] text-[#797584]">
                អាស័យដ្ឋាន : ផ្ទះលេខ51 ផ្លូវ193/384 សង្កាត់ទួលស្វាយព្រៃ1 ខណ្ឌបឹងកេងកង ភ្នំពេញ
              </Text>
              <Text className="max-w-[120px] text-right text-[8px] italic text-[#797584]">
                Tip, This Card is allowed by JoySchool-NightClass only
              </Text>
            </View>
          </View>
          <Pressable
            className="mt-6 flex-row items-center justify-center gap-2 rounded-xl border border-white/50 py-3 active:opacity-90"
            style={{ backgroundColor: SURFACE_CONTAINER_HIGH }}
          >
            <Download size={18} color={PRIMARY} />
            <Text className="text-sm font-bold" style={{ color: PRIMARY }}>
              Export this card as PDF
            </Text>
          </Pressable>
        </FrozenSlab>

        <FrozenSlab className="mb-4 p-6">
          <View className="mb-6 flex-row items-center gap-2">
            <History size={22} color="#4b00d3" />
            <Text className="text-2xl font-semibold text-[#171c24]">Latest Attendance Scan</Text>
          </View>
          <View className="gap-3">
            {[
              { label: "Class", value: "C.5 Fan Xia" },
              { label: "Subject", value: "Hsk 5 Fan Xai" },
              { label: "Teacher", value: "Fan xia" },
            ].map((row) => (
              <View key={row.label} className="flex-row items-center justify-between">
                <Text className="text-sm text-[#797584]">{row.label}</Text>
                <Text className="text-sm font-bold" style={{ color: "#4b00d3" }}>
                  {row.value}
                </Text>
              </View>
            ))}
            <View className="gap-2 border-t border-[#cac4d5]/20 pt-3">
              {[
                { label: "Last Scan Date", value: "May 25, 2026", accent: false },
                { label: "Last Check IN", value: "May 26, 2026, 05:44 PM", accent: false },
                { label: "Final Status", value: "PRESENT", accent: true },
              ].map((row) => (
                <View key={row.label} className="flex-row items-center justify-between">
                  <Text className="text-sm text-[#797584]">{row.label}</Text>
                  <Text
                    className="text-sm font-bold"
                    style={{ color: row.accent ? "#504700" : "#171c24" }}
                  >
                    {row.value}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </FrozenSlab>
      </ScrollView>
    </SafeAreaView>
  );
}
