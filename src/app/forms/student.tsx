import { router } from "expo-router";
import {
  Calendar,
  Camera,
  Mail,
  Pencil,
  Phone,
  UserPlus,
} from "lucide-react-native";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

import {
  FieldLabel,
  FormScreenLayout,
  FormSelect,
  FormTextInput,
  GlassCard,
  PrimaryButton,
  RangeRow,
  SectionTitle,
  SegmentedControl,
  ToggleRow,
} from "@/components/forms/form-primitives";
import { JoySchoolColors as C } from "@/constants/joy-school";

const CLASS_OPTIONS = ["HSK 1 (A)", "HSK 1 (B)", "HSK 2", "English Taily"];
const TEACHER_OPTIONS = ["Ly Ya Chinese", "Xiao Ai", "Zhi Long", "Fan Xia"];

export default function StudentRegistrationForm() {
  const [gender, setGender] = useState<"Female" | "Male">("Female");
  const [classLevel, setClassLevel] = useState(CLASS_OPTIONS[0]);
  const [teacher, setTeacher] = useState(TEACHER_OPTIONS[0]);
  const [motorbike, setMotorbike] = useState(true);
  const [active, setActive] = useState(true);
  const [discount, setDiscount] = useState(0);

  return (
    <FormScreenLayout title="Joy School Night Class" showBackTitle>
      <View className="mb-8 items-center">
        <View className="relative">
          <Pressable className="h-32 w-32 items-center justify-center overflow-hidden rounded-full border-2 border-dashed border-[#cac4d5]/60 bg-white/80 active:opacity-90">
            <Camera size={40} color={C.onSurfaceVariant} />
          </Pressable>
          <View
            className="absolute bottom-0 right-0 rounded-full p-2"
            style={{ backgroundColor: C.primary }}
          >
            <Pencil size={14} color="#ffffff" />
          </View>
        </View>
        <Text className="mt-4 text-2xl font-semibold text-[#171c24]">New Registration</Text>
        <Text className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#484553]">
          Complete student profile details
        </Text>
      </View>

      <View className="gap-6">
        <View className="gap-4">
          <SectionTitle title="Basic Information" />
          <View>
            <FieldLabel>Full Name (English / Khmer)</FieldLabel>
            <FormTextInput placeholder="e.g. Sok Samnang / សុខ សំណាង" />
          </View>
          <View className="flex-row gap-4">
            <View className="flex-1">
              <FieldLabel>Student Code</FieldLabel>
              <FormTextInput
                defaultValue="JSNC-112"
                className="font-bold"
                style={{ color: C.primary }}
              />
            </View>
            <View className="flex-1">
              <FieldLabel>Gender</FieldLabel>
              <SegmentedControl
                options={["Female", "Male"] as const}
                value={gender}
                onChange={setGender}
              />
            </View>
          </View>
          <View>
            <FieldLabel>Birthday</FieldLabel>
            <View className="relative">
              <FormTextInput placeholder="YYYY-MM-DD" />
              <Calendar
                size={20}
                color={C.onSurfaceVariant}
                style={{ position: "absolute", right: 16, top: 14 }}
              />
            </View>
          </View>
        </View>

        <View className="gap-4">
          <SectionTitle title="Contact Details" />
          <View>
            <FieldLabel>Phone Number</FieldLabel>
            <View className="relative">
              <Phone
                size={18}
                color={C.onSurfaceVariant}
                style={{ position: "absolute", left: 14, top: 15, zIndex: 1 }}
              />
              <FormTextInput
                className="pl-10"
                placeholder="09x xxx xxxx"
                keyboardType="phone-pad"
              />
            </View>
          </View>
          <View>
            <FieldLabel>Email Address</FieldLabel>
            <View className="relative">
              <Mail
                size={18}
                color={C.onSurfaceVariant}
                style={{ position: "absolute", left: 14, top: 15, zIndex: 1 }}
              />
              <FormTextInput
                className="pl-10"
                placeholder="student@gmail.com"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>
          <View>
            <FieldLabel>Address</FieldLabel>
            <TextInput
              placeholder="Street, District, Province..."
              placeholderTextColor={`${C.onSurfaceVariant}99`}
              multiline
              numberOfLines={2}
              className="min-h-[80px] rounded-xl border border-[#cac4d5]/60 bg-white/50 px-4 py-3 text-base text-[#171c24]"
              textAlignVertical="top"
            />
          </View>
        </View>

        <GlassCard className="gap-4 p-5">
          <SectionTitle title="Academic Assignment" />
          <FormSelect
            label="Class Level"
            value={classLevel}
            options={CLASS_OPTIONS}
            onChange={setClassLevel}
          />
          <FormSelect
            label="Teacher Assignment"
            value={teacher}
            options={TEACHER_OPTIONS}
            onChange={setTeacher}
          />
          <View>
            <FieldLabel>Subject</FieldLabel>
            <View className="mt-2 flex-row flex-wrap gap-2">
              <View
                className="rounded-full px-3 py-1.5"
                style={{ backgroundColor: C.secondaryContainer }}
              >
                <Text className="text-xs font-semibold" style={{ color: C.onSecondaryContainer }}>
                  HSK 1
                </Text>
              </View>
              <Pressable className="flex-row items-center gap-1 rounded-full bg-[#eaedfa] px-3 py-1.5 active:opacity-80">
                <Text className="text-xs font-medium text-[#484553]">Add Subject</Text>
                <Text className="text-xs font-bold text-[#484553]">+</Text>
              </Pressable>
            </View>
          </View>
        </GlassCard>

        <View className="gap-4">
          <SectionTitle title="Enrollment Settings" />
          <View className="flex-row gap-4">
            <View className="flex-1 rounded-xl border border-[#cac4d5]/60 bg-white/50 p-4">
              <ToggleRow label="Motorbike" value={motorbike} onValueChange={setMotorbike} />
            </View>
            <View className="flex-1 rounded-xl border border-[#cac4d5]/60 bg-white/50 p-4">
              <ToggleRow label="Status Active" value={active} onValueChange={setActive} />
            </View>
          </View>
          <View>
            <FieldLabel>Discount Applied (%)</FieldLabel>
            <RangeRow
              label=""
              value={discount}
              onChange={setDiscount}
              min={0}
              max={100}
              step={5}
            />
            <Text
              className="-mt-2 text-right text-2xl font-semibold"
              style={{ color: C.primary }}
            >
              {discount}%
            </Text>
          </View>
        </View>

        <PrimaryButton
          label="Register Student"
          icon={<UserPlus size={22} color="#ffffff" />}
          onPress={() => router.back()}
        />
      </View>
    </FormScreenLayout>
  );
}
