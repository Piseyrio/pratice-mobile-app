import { Image } from "expo-image";
import { router } from "expo-router";
import {
    Badge,
    BarChart3,
    Bell,
    BookOpen,
    Calendar,
    ClipboardCheck,
    GraduationCap,
    Receipt,
    School,
    TrendingUp,
    UserPlus,
    Users,
    UserX,
    type LucideIcon,
} from "lucide-react-native";
import { useState, type ReactNode } from "react";
import {
    Pressable,
    ScrollView,
    Text,
    View,
    type LayoutChangeEvent,
} from "react-native";

import { FORM_ROUTES } from "@/constants/joy-school";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Circle } from "react-native-svg";

const PRIMARY = "#1b0058";
const PRIMARY_CONTAINER = "#30008f";
const SECONDARY = "#005eb1";
const TERTIARY = "#6a5f00";
const TERTIARY_CONTAINER = "#bcac41";
const ERROR = "#ba1a1a";
const ON_SURFACE_VARIANT = "#484553";
const CHART_HEIGHT = 160;
const BACKGROUND = "#f9f9ff";
const SURFACE_CONTAINER = "#eaedfa";
const SURFACE_CONTAINER_LOW = "#f1f3ff";
const OUTLINE_VARIANT = "#cac4d5";

const PROFILE_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAEfU7fM_EiuVjDPdjk-WjagtUX3hXmFv71AsIfu7Yv8RXUkaOFRpIj-PQeRueJnvVgF94ZYM4KKaB9Yrjs93DSkEYsapnJgkIAWW7i1T1HVUgpIL5iYfC9QFue9ItqNW7fWmaM9zvnlo2LXV35rJAl6bUs4errszhtxaEy1oFn34hasQR-_jfydVjrb4Z0GjOc1kbg4gD6RC7X7RYqPL4YhS_T2IwOUPmJomXJTuEqgYsD8SabzCsD0hB_tHtg4q2BUBvml8_rgW9S";

const QUICK_SUMMARY = [
  {
    id: "subjects",
    label: "Subjects",
    count: 12,
    icon: BookOpen,
    tint: PRIMARY,
    bg: `${PRIMARY}1a`,
  },
  {
    id: "classes",
    label: "Classes",
    count: 13,
    icon: GraduationCap,
    tint: SECONDARY,
    bg: `${SECONDARY}1a`,
  },
  {
    id: "schedule",
    label: "Schedule",
    count: 50,
    icon: Calendar,
    tint: TERTIARY,
    bg: `${TERTIARY}1a`,
  },
] as const;

const QUICK_ACTIONS = [
  {
    id: "student",
    label: "Add Student",
    icon: UserPlus,
    tint: PRIMARY,
    bg: `${PRIMARY}1a`,
  },
  {
    id: "attendance",
    label: "Mark Attendance",
    icon: ClipboardCheck,
    tint: SECONDARY,
    bg: `${SECONDARY}1a`,
  },
  {
    id: "invoice",
    label: "New Invoice",
    icon: Receipt,
    tint: PRIMARY_CONTAINER,
    bg: `${PRIMARY_CONTAINER}1a`,
  },
  {
    id: "reports",
    label: "Reports",
    icon: BarChart3,
    tint: TERTIARY,
    bg: `${TERTIARY}1a`,
  },
] as const;

const ATTENDANCE_BARS = [
  { day: "Mon", height: 0.88, dimmed: false },
  { day: "Tue", height: 0.92, dimmed: false },
  { day: "Wed", height: 0.85, dimmed: false },
  { day: "Thu", height: 0.98, dimmed: false },
  { day: "Fri", height: 0.94, dimmed: false },
  { day: "Sat", height: 0.4, dimmed: true },
  { day: "Sun", height: 0.3, dimmed: true },
] as const;

const CASH_FLOW_HEIGHTS = [0.4, 0.6, 0.45, 0.8, 0.95, 0.7, 0.9] as const;

const TEACHERS = [
  {
    name: "Fan Xia",
    students: 5,
    motorYes: 3,
    motorNo: 2,
    paid: "$0",
    pending: "$0",
    chargePaid: "$13.00",
  },
  {
    name: "John Smith",
    students: 8,
    motorYes: 5,
    motorNo: 3,
    paid: "$1,200",
    pending: "$200",
    chargePaid: "$45.00",
  },
  {
    name: "Mary Jane",
    students: 4,
    motorYes: 4,
    motorNo: 0,
    paid: "$800",
    pending: "$50",
    chargePaid: "$20.00",
  },
] as const;

function FrozenSlab({
  children,
  className = "",
  elevated = false,
}: {
  children: ReactNode;
  className?: string;
  elevated?: boolean;
}) {
  return (
    <View
      className={`overflow-hidden rounded-2xl border border-white/80 bg-white/80 shadow-sm ${className}`}
      style={{
        backgroundColor: elevated
          ? "rgba(255,255,255,0.95)"
          : "rgba(255,255,255,0.8)",
        shadowColor: "#002850",
        shadowOffset: { width: 0, height: elevated ? 8 : 4 },
        shadowOpacity: elevated ? 0.08 : 0.05,
        shadowRadius: elevated ? 16 : 15,
        elevation: elevated ? 5 : 3,
      }}
    >
      {children}
    </View>
  );
}

function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
}: {
  options: readonly { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  const [layouts, setLayouts] = useState<
    Record<string, { x: number; width: number }>
  >({});

  const activeLayout = layouts[value];

  return (
    <View
      className="relative flex-row rounded-full p-1"
      style={{ backgroundColor: SURFACE_CONTAINER_LOW }}
    >
      {activeLayout ? (
        <View
          className="absolute top-1 rounded-full bg-white shadow-sm"
          style={{
            left: activeLayout.x,
            width: activeLayout.width,
            height: 32,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 2,
          }}
        />
      ) : null}
      {options.map((opt) => {
        const selected = value === opt.value;
        return (
          <Pressable
            key={opt.value}
            className="z-10 h-8 items-center justify-center px-4 active:opacity-80"
            onPress={() => onChange(opt.value)}
            onLayout={(e: LayoutChangeEvent) => {
              const { x, width } = e.nativeEvent.layout;
              setLayouts((prev) => ({ ...prev, [opt.value]: { x, width } }));
            }}
          >
            <Text
              className="text-[13px] font-semibold"
              style={{ color: selected ? PRIMARY : ON_SURFACE_VARIANT }}
            >
              {opt.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

function CircularProgress({ percentage }: { percentage: number }) {
  const size = 64;
  const stroke = 6;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <View className="h-16 w-16 items-center justify-center">
      <Svg width={size} height={size} style={{ position: "absolute" }}>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={SURFACE_CONTAINER}
          strokeWidth={stroke}
          fill="none"
        />
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={PRIMARY}
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
          strokeLinecap="round"
          rotation="-90"
          origin={`${size / 2}, ${size / 2}`}
        />
      </Svg>
      <View className="h-12 w-12 items-center justify-center rounded-full bg-white">
        <Text className="text-[10px] font-black text-[#1b0058]">
          {percentage}%
        </Text>
      </View>
    </View>
  );
}

function SectionHeader({
  title,
  actionLabel = "View All",
}: {
  title: string;
  actionLabel?: string;
}) {
  return (
    <View className="mb-4 flex-row items-center justify-between">
      <Text className="text-xl font-semibold text-[#171c24]">{title}</Text>
      <Pressable className="active:opacity-70">
        <Text className="text-xs font-semibold uppercase tracking-wide text-[#1b0058]">
          {actionLabel}
        </Text>
      </Pressable>
    </View>
  );
}

function QuickSummaryRow({
  label,
  count,
  icon: Icon,
  tint,
  bg,
  isLast,
}: {
  label: string;
  count: number;
  icon: LucideIcon;
  tint: string;
  bg: string;
  isLast: boolean;
}) {
  return (
    <View
      className={`flex-row items-center gap-4 py-3 ${isLast ? "" : "border-b border-[#cac4d5]/10"}`}
    >
      <View
        className="h-10 w-10 items-center justify-center rounded-xl"
        style={{ backgroundColor: bg }}
      >
        <Icon size={20} color={tint} />
      </View>
      <Text className="flex-1 text-base font-medium text-[#171c24]">
        {label}
      </Text>
      <View
        className="rounded-full px-2.5 py-0.5"
        style={{ backgroundColor: bg }}
      >
        <Text className="text-sm font-bold" style={{ color: tint }}>
          {count}
        </Text>
      </View>
      <Pressable className="active:opacity-70">
        <Text className="text-xs font-semibold uppercase tracking-wide text-[#1b0058]">
          Open
        </Text>
      </Pressable>
    </View>
  );
}

function TeacherCard({
  name,
  students,
  motorYes,
  motorNo,
  paid,
  pending,
  chargePaid,
}: (typeof TEACHERS)[number]) {
  return (
    <FrozenSlab className="gap-4 p-5">
      <View>
        <Text className="text-base font-semibold text-[#1b0058]">{name}</Text>
        <Text className="text-[11px] text-[#484553]">
          {students} Students Total
        </Text>
      </View>
      <View className="gap-2">
        <View>
          <Text className="text-[10px] font-bold uppercase text-[#484553]">
            Motor Status
          </Text>
          <Text className="text-sm text-[#171c24]">
            <Text className="font-semibold text-green-600">{motorYes}</Text>{" "}
            Have motor |{" "}
            <Text className="font-semibold text-[#484553]">{motorNo}</Text> No
            motor
          </Text>
        </View>
        <View>
          <Text className="text-[10px] font-bold uppercase text-[#484553]">
            Payments
          </Text>
          <Text className="text-sm text-[#171c24]">
            Paid: <Text className="font-semibold">{paid}</Text> | Pending:{" "}
            <Text className="font-semibold">{pending}</Text> | ChargePaid:{" "}
            <Text className="font-semibold text-[#1b0058]">{chargePaid}</Text>
          </Text>
        </View>
      </View>
    </FrozenSlab>
  );
}

function ActiveOverview() {
  return (
    <View className="gap-8">
      <View className="flex-row items-start gap-4">
        <View
          className="h-16 w-16 items-center justify-center rounded-2xl"
          style={{ backgroundColor: `${PRIMARY}1a` }}
        >
          <Users size={28} color={PRIMARY} />
        </View>
        <View className="flex-1">
          <Text className="text-[10px] font-bold uppercase tracking-wider text-[#484553]">
            Active Students
          </Text>
          <Text className="text-3xl font-black text-[#171c24]">1,284</Text>
          <View className="mt-4 gap-2">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center gap-2">
                <View className="h-2 w-2 rounded-full bg-[#005eb1]" />
                <Text className="text-sm font-medium text-[#484553]">Male</Text>
              </View>
              <Text className="text-sm font-bold text-[#171c24]">582</Text>
            </View>
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center gap-2">
                <View
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: TERTIARY_CONTAINER }}
                />
                <Text className="text-sm font-medium text-[#484553]">
                  Female
                </Text>
              </View>
              <Text className="text-sm font-bold text-[#171c24]">702</Text>
            </View>
          </View>
        </View>
      </View>

      <View className="flex-row items-center gap-4">
        <View
          className="h-12 w-12 items-center justify-center rounded-xl"
          style={{ backgroundColor: SURFACE_CONTAINER }}
        >
          <Badge size={22} color={ON_SURFACE_VARIANT} />
        </View>
        <View>
          <Text className="text-[10px] font-bold uppercase tracking-wider text-[#484553]">
            Total Staff
          </Text>
          <Text className="text-xl font-bold text-[#171c24]">86 Members</Text>
        </View>
      </View>

      <View
        className="flex-row items-center gap-4 rounded-2xl p-4"
        style={{ backgroundColor: SURFACE_CONTAINER_LOW }}
      >
        <CircularProgress percentage={94} />
        <View>
          <Text className="text-[10px] font-bold uppercase tracking-wider text-[#484553]">
            Attendance
          </Text>
          <Text className="text-lg font-bold text-[#171c24]">Very High</Text>
          <Text className="text-xs text-[#484553]">1,207 Present</Text>
        </View>
      </View>

      <View className="gap-3">
        <View className="flex-row items-end justify-between">
          <View>
            <Text className="text-[10px] font-bold uppercase tracking-wider text-[#484553]">
              Daily Revenue
            </Text>
            <Text className="text-xl font-bold text-[#171c24]">$12,450</Text>
          </View>
          <Text className="mb-1 text-xs font-bold text-[#005eb1]">
            85% Goal
          </Text>
        </View>
        <View
          className="h-3 overflow-hidden rounded-full"
          style={{ backgroundColor: SURFACE_CONTAINER }}
        >
          <View
            className="h-full rounded-full bg-[#1b0058]"
            style={{ width: "85%" }}
          />
        </View>
        <View className="flex-row items-center gap-1">
          <TrendingUp size={14} color={ON_SURFACE_VARIANT} />
          <Text className="text-[10px] text-[#484553]">
            12% increase from yesterday
          </Text>
        </View>
      </View>
    </View>
  );
}

function InactiveOverview() {
  return (
    <View className="gap-8">
      <View className="flex-row items-start gap-4">
        <View
          className="h-16 w-16 items-center justify-center rounded-2xl"
          style={{ backgroundColor: `${ERROR}1a` }}
        >
          <UserX size={28} color={ERROR} />
        </View>
        <View>
          <Text className="text-[10px] font-bold uppercase tracking-wider text-[#484553]">
            Archived Records
          </Text>
          <Text className="text-3xl font-black text-[#171c24]">158</Text>
          <Text className="mt-2 text-xs text-[#484553]">
            Staff and student exits
          </Text>
        </View>
      </View>

      <View className="flex-row gap-4">
        <View
          className="flex-1 rounded-xl border p-5"
          style={{
            backgroundColor: SURFACE_CONTAINER_LOW,
            borderColor: `${OUTLINE_VARIANT}33`,
          }}
        >
          <Text className="mb-1 text-[10px] font-bold uppercase text-[#484553]">
            Graduated
          </Text>
          <Text className="text-xl font-bold text-[#171c24]">156</Text>
          <Text className="text-[10px] text-[#484553]">Class of 2023</Text>
        </View>
        <View
          className="flex-1 rounded-xl border p-5"
          style={{
            backgroundColor: SURFACE_CONTAINER_LOW,
            borderColor: `${OUTLINE_VARIANT}33`,
          }}
        >
          <Text className="mb-1 text-[10px] font-bold uppercase text-[#484553]">
            Suspended
          </Text>
          <Text className="text-xl font-bold text-[#ba1a1a]">2</Text>
          <Text className="text-[10px] text-[#ba1a1a]">Pending Review</Text>
        </View>
      </View>
    </View>
  );
}

export default function Home() {
  const [overview, setOverview] = useState<"active" | "inactive">("active");
  const [attendancePeriod, setAttendancePeriod] = useState<
    "week" | "month" | "year"
  >("week");

  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: BACKGROUND }}
      edges={["top"]}
    >
      <View className="flex-row items-center justify-between border-b border-white/20 bg-white/80 px-4 py-3 shadow-sm">
        <View className="flex-row items-center gap-3">
          <School size={24} color={PRIMARY} />
          <Text className="text-2xl font-semibold tracking-tight text-[#1b0058]">
            Joy School
          </Text>
        </View>
        <View className="flex-row items-center gap-4">
          <Pressable className="rounded-full p-2 active:opacity-70">
            <Bell size={24} color={ON_SURFACE_VARIANT} />
          </Pressable>
          <View className="h-10 w-10 overflow-hidden rounded-full border-2 border-[#1b0058]/20">
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
        <View className="mb-6">
          <Text className="mb-2 text-[28px] font-semibold leading-9 text-[#171c24]">
            Welcome back, Admin
          </Text>
          <Text className="mb-6 text-base leading-6 text-[#484553]">
            Here is what&apos;s happening at Joy School today.
          </Text>
          <SegmentedControl
            options={[
              { value: "active" as const, label: "Active" },
              { value: "inactive" as const, label: "Inactive" },
            ]}
            value={overview}
            onChange={setOverview}
          />
        </View>

        <View className="mb-10">
          <FrozenSlab elevated className="gap-8 rounded-[2rem] p-6">
            <Text className="text-xl font-semibold text-[#171c24]">
              School Overview
            </Text>
            {overview === "active" ? <ActiveOverview /> : <InactiveOverview />}
          </FrozenSlab>
        </View>

        <View className="mb-10">
          <SectionHeader title="Quick Summary" />
          <FrozenSlab elevated className="p-4">
            {QUICK_SUMMARY.map((item, index) => (
              <QuickSummaryRow
                key={item.id}
                {...item}
                isLast={index === QUICK_SUMMARY.length - 1}
              />
            ))}
          </FrozenSlab>
        </View>

        <View className="mb-10">
          <SectionHeader title="Quick Actions" />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerClassName="gap-4 pb-2"
          >
            {QUICK_ACTIONS.map((action) => {
              const Icon = action.icon;
              return (
                <Pressable
                  key={action.id}
                  className="h-28 min-w-[110px] shrink-0 active:opacity-90"
                  onPress={() => {
                    if (action.id === "student")
                      router.push(FORM_ROUTES.student);
                  }}
                >
                  <FrozenSlab className="h-full items-center justify-center gap-2 p-3">
                    <View
                      className="h-10 w-10 items-center justify-center rounded-full"
                      style={{ backgroundColor: action.bg }}
                    >
                      <Icon size={22} color={action.tint} />
                    </View>
                    <Text className="text-center text-xs font-semibold text-[#171c24]">
                      {action.label}
                    </Text>
                  </FrozenSlab>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>

        <View className="mb-10">
          <FrozenSlab className="p-6">
            <View className="mb-8 flex-row items-start justify-between gap-4">
              <Text className="flex-1 text-xl font-semibold text-[#171c24]">
                Attendance Trends
              </Text>
              <SegmentedControl
                options={[
                  { value: "week" as const, label: "Week" },
                  { value: "month" as const, label: "Month" },
                  { value: "year" as const, label: "Year" },
                ]}
                value={attendancePeriod}
                onChange={setAttendancePeriod}
              />
            </View>
            <View
              className="relative flex-row items-end gap-2 px-2"
              style={{ height: CHART_HEIGHT + 24 }}
            >
              {ATTENDANCE_BARS.map((bar) => (
                <View
                  key={bar.day}
                  className="flex-1 items-center gap-2"
                  style={{ opacity: bar.dimmed ? 0.4 : 1 }}
                >
                  <View
                    className="w-full rounded-t-lg bg-[#2f038e]"
                    style={{ height: bar.height * CHART_HEIGHT }}
                  />
                  <Text className="text-[10px] font-bold uppercase text-[#484553]">
                    {bar.day}
                  </Text>
                </View>
              ))}
              <View className="pointer-events-none absolute inset-0 justify-between py-1">
                {["100%", "75%", "50%", "25%"].map((label) => (
                  <View
                    key={label}
                    className="w-full border-t border-dashed pt-1"
                    style={{ borderColor: `${OUTLINE_VARIANT}4d` }}
                  >
                    <Text className="text-[10px] text-[#484553]/50">
                      {label}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </FrozenSlab>
        </View>

        <View className="mb-10">
          <FrozenSlab className="p-6">
            <Text className="mb-4 text-xl font-semibold text-[#171c24]">
              Teacher Breakdown
            </Text>
            <View className="gap-4">
              {TEACHERS.map((teacher) => (
                <TeacherCard key={teacher.name} {...teacher} />
              ))}
            </View>
            <Pressable className="mt-4 items-center active:opacity-70">
              <Text className="text-xs font-semibold uppercase tracking-wide text-[#1b0058]">
                View All Teachers
              </Text>
            </Pressable>

            <View
              className="mt-8 rounded-xl border p-6"
              style={{
                backgroundColor: `${PRIMARY}0a`,
                borderColor: `${PRIMARY}33`,
              }}
            >
              <Text className="mb-3 text-[10px] font-bold uppercase tracking-widest text-[#1b0058]">
                Grand Total Breakdown
              </Text>
              <Text className="text-2xl font-bold text-[#1b0058]">
                5 Students Total (All)
              </Text>
              <Text className="text-sm text-[#484553]">
                Consolidated overview
              </Text>
              <View className="mt-4 gap-4">
                <View className="border-l-2 border-[#1b0058]/10 pl-4">
                  <Text className="text-[10px] font-bold uppercase text-[#484553]">
                    Total Motor Count
                  </Text>
                  <Text className="text-lg font-semibold text-[#171c24]">
                    3 <Text className="text-xs font-normal">Yes</Text> / 2{" "}
                    <Text className="text-xs font-normal">No</Text>
                  </Text>
                </View>
                <View className="border-l-2 border-[#1b0058]/10 pl-4">
                  <Text className="text-[10px] font-bold uppercase text-[#484553]">
                    Total ChargePaid
                  </Text>
                  <Text className="text-lg font-semibold text-[#1b0058]">
                    $13.00
                  </Text>
                </View>
              </View>
            </View>

            <View
              className="mt-8 rounded-xl border p-4"
              style={{
                backgroundColor: `${PRIMARY}0d`,
                borderColor: `${PRIMARY}1a`,
              }}
            >
              <Text className="mb-4 text-[11px] font-medium text-[#1b0058]">
                Cash Flow (7 days)
              </Text>
              <View className="h-24 flex-row items-end gap-2">
                {CASH_FLOW_HEIGHTS.map((h, i) => {
                  const opacity = 0.2 + (i / 6) * 0.8;
                  return (
                    <View
                      key={i}
                      className="flex-1 rounded-t-sm"
                      style={{
                        height: h * 96,
                        backgroundColor: PRIMARY,
                        opacity,
                      }}
                    />
                  );
                })}
              </View>
            </View>
          </FrozenSlab>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
