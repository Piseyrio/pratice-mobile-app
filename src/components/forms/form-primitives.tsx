import { Image } from "expo-image";
import { router } from "expo-router";
import { ArrowLeft, ChevronDown, School } from "lucide-react-native";
import { type ReactNode, useState } from "react";
import {
  Pressable,
  ScrollView,
  Switch,
  Text,
  TextInput,
  View,
  type TextInputProps,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { JoySchoolColors as C } from "@/constants/joy-school";

const HEADER_AVATAR =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCUoXzRSHO-I4bcX0lrN7VMI9s7pI4o20_kggyYIidOhlanm6Ytcz9FHs0096itYTrL62IQQK2T1010quxHML6aGE0ce5e4yoI3pUqaeC9ouV4oFIhHSg7wr__Tbp6_jP_5MSm09hVfVTIMQODtyBxdMa44D30s0sQcCxPyqGaL0WWYVwVDK7r4zdc1WieYBdfs7tYr4xIZVdKD3tEqjC6t9wUbjxnSTnfAWhqhenYiOn7cTuVHofNDPS3SGGnodOfUTRbzV-0s_DJS";

export function GlassCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <View
      className={`overflow-hidden rounded-xl border border-white/50 bg-white/80 p-4 ${className}`}
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

export function SectionTitle({
  title,
  icon,
}: {
  title: string;
  icon?: ReactNode;
}) {
  return (
    <View className="mb-3 flex-row items-center gap-2">
      {icon}
      <Text
        className="text-xs font-semibold uppercase tracking-wider"
        style={{ color: C.primary }}
      >
        {title}
      </Text>
    </View>
  );
}

export function FieldLabel({ children }: { children: string }) {
  return (
    <Text className="mb-1 ml-1 text-xs font-semibold uppercase tracking-wide text-[#484553]">
      {children}
    </Text>
  );
}

export function FormTextInput({
  className = "",
  ...props
}: TextInputProps & { className?: string }) {
  return (
    <TextInput
      placeholderTextColor={`${C.onSurfaceVariant}99`}
      className={`rounded-xl border border-[#cac4d5]/60 bg-white/50 px-4 py-3 text-base text-[#171c24] ${className}`}
      {...props}
    />
  );
}

export function FormSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <View>
      <FieldLabel>{label}</FieldLabel>
      <Pressable
        onPress={() => setOpen((o) => !o)}
        className="flex-row items-center justify-between rounded-xl border border-[#cac4d5]/60 bg-white/50 px-4 py-3 active:opacity-90"
      >
        <Text className="text-base text-[#171c24]">{value}</Text>
        <ChevronDown size={20} color={C.onSurfaceVariant} />
      </Pressable>
      {open ? (
        <View className="mt-2 overflow-hidden rounded-xl border border-[#cac4d5]/40 bg-white">
          {options.map((option) => (
            <Pressable
              key={option}
              onPress={() => {
                onChange(option);
                setOpen(false);
              }}
              className={`border-b border-[#cac4d5]/20 px-4 py-3 active:bg-[#f1f3ff] ${option === value ? "bg-[#f1f3ff]" : ""}`}
            >
              <Text
                className="text-base"
                style={{
                  color: option === value ? C.primary : C.onSurface,
                  fontWeight: option === value ? "600" : "400",
                }}
              >
                {option}
              </Text>
            </Pressable>
          ))}
        </View>
      ) : null}
    </View>
  );
}

export function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
}: {
  options: T[];
  value: T;
  onChange: (value: T) => void;
}) {
  return (
    <View className="flex-row rounded-xl border border-[#cac4d5]/30 bg-[#f1f3ff] p-1">
      {options.map((option) => {
        const selected = option === value;
        return (
          <Pressable
            key={option}
            onPress={() => onChange(option)}
            className={`flex-1 items-center rounded-lg py-2 ${selected ? "bg-white shadow-sm" : ""}`}
          >
            <Text
              className="text-xs font-semibold"
              style={{ color: selected ? C.primary : C.onSurfaceVariant }}
            >
              {option}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

export function ToggleRow({
  label,
  value,
  onValueChange,
  subtitle,
}: {
  label: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
  subtitle?: string;
}) {
  return (
    <View className="flex-row items-center justify-between py-1">
      <View className="flex-1 pr-3">
        <Text className="text-base font-medium text-[#171c24]">{label}</Text>
        {subtitle ? (
          <Text className="mt-0.5 text-xs text-[#484553]">{subtitle}</Text>
        ) : null}
      </View>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: C.surfaceContainerHighest, true: C.primary }}
        thumbColor="#ffffff"
      />
    </View>
  );
}

export function RangeRow({
  label,
  value,
  onChange,
  min,
  max,
  step = 5,
  hint,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
  hint?: string;
}) {
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <View className="gap-2">
      <View className="flex-row items-center justify-between">
        <Text className="text-xs font-semibold uppercase text-[#171c24]">{label}</Text>
        <Text className="text-base font-bold" style={{ color: C.primary }}>
          {value}{" "}
          <Text className="text-xs font-normal text-[#484553]">min</Text>
        </Text>
      </View>
      <View className="h-1.5 overflow-hidden rounded-full bg-[#dfe2ef]">
        <View
          className="h-full rounded-full"
          style={{ width: `${pct}%`, backgroundColor: C.primary }}
        />
      </View>
      <View className="flex-row justify-between">
        <Pressable
          onPress={() => onChange(Math.max(min, value - step))}
          className="rounded-lg bg-[#f1f3ff] px-3 py-1 active:opacity-70"
        >
          <Text className="font-bold text-[#1b0058]">−</Text>
        </Pressable>
        <Pressable
          onPress={() => onChange(Math.min(max, value + step))}
          className="rounded-lg bg-[#f1f3ff] px-3 py-1 active:opacity-70"
        >
          <Text className="font-bold text-[#1b0058]">+</Text>
        </Pressable>
      </View>
      {hint ? <Text className="text-[10px] italic text-[#484553]">{hint}</Text> : null}
    </View>
  );
}

export function PrimaryButton({
  label,
  onPress,
  icon,
}: {
  label: string;
  onPress?: () => void;
  icon?: ReactNode;
}) {
  return (
    <Pressable
      onPress={onPress}
      className="mt-4 flex-row items-center justify-center gap-2 rounded-2xl py-4 active:opacity-90"
      style={{ backgroundColor: C.primary }}
    >
      {icon}
      <Text className="text-lg font-semibold text-white">{label}</Text>
    </Pressable>
  );
}

export function FormScreenLayout({
  title,
  subtitle,
  children,
  showBackTitle,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  showBackTitle?: boolean;
}) {
  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: C.background }} edges={["top"]}>
      <View className="flex-row items-center justify-between border-b border-white/20 bg-white/80 px-4 py-3 shadow-sm">
        <View className="flex-row items-center gap-2">
          <Pressable
            onPress={() => router.back()}
            className="h-10 w-10 items-center justify-center rounded-full active:bg-[#f1f3ff]"
          >
            <ArrowLeft size={22} color={C.primary} />
          </Pressable>
          {showBackTitle ? (
            <View className="flex-row items-center gap-2">
              <School size={22} color={C.primary} />
              <Text className="text-lg font-semibold text-[#1b0058]">{title}</Text>
            </View>
          ) : (
            <Text className="text-lg font-semibold text-[#1b0058]">{title}</Text>
          )}
        </View>
        <View className="h-9 w-9 overflow-hidden rounded-full border border-[#e7deff]">
          <Image source={{ uri: HEADER_AVATAR }} className="h-full w-full" contentFit="cover" />
        </View>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerClassName="px-4 pb-28 pt-6"
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {subtitle ? (
          <View className="mb-6">
            {!showBackTitle ? (
              <Text className="text-[28px] font-semibold leading-9 text-[#171c24]">{title}</Text>
            ) : null}
            <Text className={`text-sm text-[#484553] ${showBackTitle ? "mt-1" : "mt-2"}`}>
              {subtitle}
            </Text>
          </View>
        ) : null}
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}
