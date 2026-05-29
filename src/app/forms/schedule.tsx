import { router } from "expo-router";
import { CalendarPlus, Info, ListChecks } from "lucide-react-native";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

import {
  FieldLabel,
  FormScreenLayout,
  FormSelect,
  FormTextInput,
  GlassCard,
  PrimaryButton,
  RangeRow,
  SectionTitle,
  ToggleRow,
} from "@/components/forms/form-primitives";
import { JoySchoolColors as C } from "@/constants/joy-school";

const CLASS_OPTIONS = ["Select Class", "Grade 10-A", "Grade 11-B"];
const SUBJECT_OPTIONS = ["Select Subject", "Mathematics", "Physics"];
const TEACHER_OPTIONS = ["Select Teacher", "Dr. Smith", "Prof. Johnson"];
const RECURRENCE_OPTIONS = ["Weekly", "Daily", "Custom"] as const;
const DAYS = ["M", "T", "W", "T", "F", "S", "S"] as const;

export default function CreateScheduleForm() {
  const [className, setClassName] = useState(CLASS_OPTIONS[0]);
  const [subject, setSubject] = useState(SUBJECT_OPTIONS[0]);
  const [teacher, setTeacher] = useState(TEACHER_OPTIONS[0]);
  const [recurrence, setRecurrence] =
    useState<(typeof RECURRENCE_OPTIONS)[number]>("Weekly");
  const [selectedDay, setSelectedDay] = useState(1);
  const [scanOpens, setScanOpens] = useState(60);
  const [presentGrace, setPresentGrace] = useState(15);
  const [lateLimit, setLateLimit] = useState(45);
  const [checkoutClose, setCheckoutClose] = useState(30);
  const [requireCheckout, setRequireCheckout] = useState(true);
  const [active, setActive] = useState(true);

  return (
    <FormScreenLayout
      title="Create New Schedule"
      subtitle="Configure class times and attendance rules."
    >
      <View className="gap-6">
        <GlassCard className="gap-4">
          <SectionTitle
            title="Basic Information"
            icon={<Info size={18} color={C.primary} />}
          />
          <View>
            <FieldLabel>Label (Optional)</FieldLabel>
            <FormTextInput placeholder="e.g. Morning Assembly" />
          </View>
          <FormSelect
            label="Class"
            value={className}
            options={CLASS_OPTIONS}
            onChange={setClassName}
          />
          <FormSelect
            label="Subject"
            value={subject}
            options={SUBJECT_OPTIONS}
            onChange={setSubject}
          />
          <FormSelect
            label="Teacher"
            value={teacher}
            options={TEACHER_OPTIONS}
            onChange={setTeacher}
          />
        </GlassCard>

        <GlassCard className="gap-4">
          <SectionTitle title="Time & Day" icon={<CalendarPlus size={18} color={C.primary} />} />
          <View>
            <FieldLabel>Recurrence Type</FieldLabel>
            <View className="flex-row gap-2">
              {RECURRENCE_OPTIONS.map((option) => {
                const selected = recurrence === option;
                return (
                  <Pressable
                    key={option}
                    onPress={() => setRecurrence(option)}
                    className="rounded-full px-4 py-2 active:opacity-90"
                    style={{
                      backgroundColor: selected ? C.primaryContainer : C.surfaceContainer,
                    }}
                  >
                    <Text
                      className="text-xs font-bold"
                      style={{
                        color: selected ? C.onPrimary : C.onSurfaceVariant,
                      }}
                    >
                      {option}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </View>
          <View>
            <FieldLabel>Day of Week</FieldLabel>
            <View className="flex-row gap-1">
              {DAYS.map((day, index) => {
                const selected = selectedDay === index;
                return (
                  <Pressable
                    key={`${day}-${index}`}
                    onPress={() => setSelectedDay(index)}
                    className="h-10 flex-1 items-center justify-center rounded-lg active:opacity-90"
                    style={{
                      borderWidth: selected ? 2 : 1,
                      borderColor: selected ? C.primary : C.outlineVariant,
                      backgroundColor: selected ? `${C.primary}0d` : "rgba(255,255,255,0.5)",
                    }}
                  >
                    <Text
                      className="text-xs"
                      style={{
                        color: selected ? C.primary : C.onSurfaceVariant,
                        fontWeight: selected ? "700" : "400",
                      }}
                    >
                      {day}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </View>
          <View className="flex-row gap-4">
            <View className="flex-1">
              <FieldLabel>Start Time</FieldLabel>
              <FormTextInput
                defaultValue="08:00"
                className="text-center font-bold"
                placeholder="08:00"
              />
            </View>
            <View className="flex-1">
              <FieldLabel>End Time</FieldLabel>
              <FormTextInput
                defaultValue="10:00"
                className="text-center font-bold"
                placeholder="10:00"
              />
            </View>
          </View>
        </GlassCard>

        <GlassCard className="gap-5">
          <View className="flex-row items-center justify-between">
            <SectionTitle
              title="Attendance Rules"
              icon={<ListChecks size={18} color={C.primary} />}
            />
            <View
              className="rounded-full px-2 py-0.5"
              style={{ backgroundColor: C.secondaryContainer }}
            >
              <Text className="text-[11px] font-medium" style={{ color: C.onSecondaryContainer }}>
                Standard
              </Text>
            </View>
          </View>
          <RangeRow
            label="Scan Opens"
            value={scanOpens}
            onChange={setScanOpens}
            min={0}
            max={120}
            hint="Students can enter from -60m"
          />
          <RangeRow
            label="Present Grace"
            value={presentGrace}
            onChange={setPresentGrace}
            min={0}
            max={60}
            hint="Status = PRESENT until +15m"
          />
          <RangeRow
            label="Late Limit"
            value={lateLimit}
            onChange={setLateLimit}
            min={0}
            max={120}
            hint="Status = LATE until +45m. After this = ABSENT."
          />
          <RangeRow
            label="Checkout Close"
            value={checkoutClose}
            onChange={setCheckoutClose}
            min={0}
            max={60}
            hint="Checkout allowed until +30m after end"
          />
        </GlassCard>

        <GlassCard className="gap-4">
          <ToggleRow
            label="Require Checkout"
            subtitle="Uncheck for scan-in only"
            value={requireCheckout}
            onValueChange={setRequireCheckout}
          />
          <View className="border-t border-[#cac4d5]/30 pt-4">
            <ToggleRow
              label="Active (Enabled)"
              subtitle="Schedule will be live immediately"
              value={active}
              onValueChange={setActive}
            />
          </View>
        </GlassCard>

        <PrimaryButton
          label="Create Schedule"
          icon={<CalendarPlus size={22} color="#ffffff" />}
          onPress={() => router.back()}
        />
      </View>
    </FormScreenLayout>
  );
}
