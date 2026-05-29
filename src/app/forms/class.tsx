import { router } from "expo-router";
import { Calendar, DoorOpen, PlusCircle, Users } from "lucide-react-native";
import { useState } from "react";
import { Text, View } from "react-native";

import {
  FieldLabel,
  FormScreenLayout,
  FormSelect,
  FormTextInput,
  GlassCard,
  PrimaryButton,
} from "@/components/forms/form-primitives";
import { JoySchoolColors as C } from "@/constants/joy-school";

const GRADE_OPTIONS = ["Select Level", "Primary 1", "Primary 2", "Grade 10", "Grade 11", "Grade 12"];
const TEACHER_OPTIONS = [
  "Choose Teacher",
  "Sokha Phally",
  "Vannak Raksmey",
  "Keo Socheata",
];

export default function NewClassForm() {
  const [grade, setGrade] = useState(GRADE_OPTIONS[0]);
  const [teacher, setTeacher] = useState(TEACHER_OPTIONS[0]);

  return (
    <FormScreenLayout
      title="New Class"
      subtitle="សូមបញ្ចូលព័ត៌មានថ្នាក់ថ្មីខាងក្រោម — Add a new class to the school system."
    >
      <GlassCard className="gap-5 p-6">
        <View>
          <View className="mb-1 flex-row items-center justify-between">
            <FieldLabel>Class Name / ឈ្មោះថ្នាក់</FieldLabel>
            <Text style={{ color: C.error }} className="font-bold">
              *
            </Text>
          </View>
          <FormTextInput placeholder="e.g. Grade 12A" />
        </View>

        <FormSelect
          label="Grade Level / កម្រិតថ្នាក់"
          value={grade}
          options={GRADE_OPTIONS}
          onChange={setGrade}
        />

        <FormSelect
          label="Homeroom Teacher / គ្រូបន្ទុកថ្នាក់"
          value={teacher}
          options={TEACHER_OPTIONS}
          onChange={setTeacher}
        />

        <View>
          <FieldLabel>Room / Section / បន្ទប់</FieldLabel>
          <View className="relative">
            <DoorOpen
              size={20}
              color={C.onSurfaceVariant}
              style={{ position: "absolute", left: 12, top: 14, zIndex: 1 }}
            />
            <FormTextInput className="pl-10" placeholder="Room 304" />
          </View>
        </View>

        <PrimaryButton
          label="Create Class"
          icon={<PlusCircle size={20} color="#ffffff" />}
          onPress={() => router.back()}
        />
      </GlassCard>

      <View className="mt-8 flex-row gap-4">
        <GlassCard className="flex-1 flex-row items-center gap-3 p-4">
          <View
            className="h-10 w-10 items-center justify-center rounded-lg"
            style={{ backgroundColor: C.primaryFixed }}
          >
            <Users size={20} color={C.primary} />
          </View>
          <View>
            <Text className="text-[11px] text-[#484553]">Capacity</Text>
            <Text className="text-base font-bold text-[#171c24]">35 Seats</Text>
          </View>
        </GlassCard>
        <GlassCard className="flex-1 flex-row items-center gap-3 p-4">
          <View
            className="h-10 w-10 items-center justify-center rounded-lg"
            style={{ backgroundColor: C.secondaryFixed }}
          >
            <Calendar size={20} color={C.secondary} />
          </View>
          <View>
            <Text className="text-[11px] text-[#484553]">Term</Text>
            <Text className="text-base font-bold text-[#171c24]">2024 - 25</Text>
          </View>
        </GlassCard>
      </View>
    </FormScreenLayout>
  );
}
