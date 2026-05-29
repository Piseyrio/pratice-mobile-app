import { Image } from "expo-image";
import { router } from "expo-router";
import { ListPlus, Sparkles } from "lucide-react-native";
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

const DEPARTMENT_OPTIONS = ["Select", "Science", "Arts", "Technology"];

const SUBJECT_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCNBxKx8oTmWmGDY66FctdJBETBCAuFygpejsprnuxSPdjx5iwfb_FQgfG9rKQa-zEni-YCDhGBWV8IOs2g11I58gosxHB0Lhfg-ce3INrEKNL_AfNr2qHjZIiPK34RLpmcIzl9zxdO99oJZDl-zrbOymw7Tv8HG7XtgGP-GxpxisdN4lXbRLOPk7tMrfNRDOPMYcisUxz2ND5qnxH-FfkukTVFjp-gnoAgjJA4_8goVcl7FN8aKyJYrhkkXjACAl1Vv19Yhr_TY9jq";

export default function NewSubjectForm() {
  const [department, setDepartment] = useState(DEPARTMENT_OPTIONS[0]);

  return (
    <FormScreenLayout title="New Subject">
      <GlassCard className="gap-5 p-6">
        <View>
          <Text className="text-2xl font-semibold text-[#1b0058]">Subject Details</Text>
          <Text className="text-sm text-[#484553]">សូមបំពេញព័ត៌មានខាងក្រោម</Text>
        </View>

        <View>
          <FieldLabel>Subject Name (ឈ្មោះមុខវិជ្ជា)</FieldLabel>
          <FormTextInput placeholder="e.g. Advanced Mathematics" />
        </View>

        <View>
          <FieldLabel>Subject Code (កូដមុខវិជ្ជា)</FieldLabel>
          <FormTextInput placeholder="e.g. MATH301" autoCapitalize="characters" />
        </View>

        <View className="flex-row gap-4">
          <View className="flex-1">
            <FieldLabel>Credits</FieldLabel>
            <FormTextInput placeholder="3" keyboardType="number-pad" />
          </View>
          <View className="flex-1">
            <FormSelect
              label="Department"
              value={department}
              options={DEPARTMENT_OPTIONS}
              onChange={setDepartment}
            />
          </View>
        </View>

        <View className="h-40 overflow-hidden rounded-xl">
          <Image source={{ uri: SUBJECT_IMAGE }} className="h-full w-full" contentFit="cover" />
          <View
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(27, 0, 88, 0.2)" }}
          />
          <View className="absolute bottom-4 left-4 flex-row items-center gap-2">
            <Sparkles size={18} color="#ffffff" fill="#ffffff" />
            <Text className="text-xs font-semibold uppercase tracking-wide text-white">
              Create with Joy School
            </Text>
          </View>
        </View>

        <PrimaryButton
          label="Create Subject"
          icon={<ListPlus size={22} color="#ffffff" />}
          onPress={() => router.back()}
        />
      </GlassCard>
    </FormScreenLayout>
  );
}
