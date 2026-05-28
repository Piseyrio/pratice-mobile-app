import { useState } from "react";
import { Text, TextInput, View } from "react-native";

export default function Add() {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvv, setCvv] = useState("");

  return (
    <View className="flex-1 bg-white p-4 pt-safe">
      <View>
        <Text>Your Cards</Text>
        <View className="h-2.5 w-2.5 rounded-full bg-black" />
        <View className="h-2.5 w-2.5 rounded-full bg-black  " />
        <View className="h-2.5 w-2.5 rounded-full bg-black" />
      </View>
      <View className="mb-6 items-center">
        <View className="h-[220px] w-full max-w-[360px] overflow-hidden rounded-3xl bg-[#0A56D8] px-6 py-5">
          <View className="absolute -right-12 top-6 h-56 w-56 rounded-full bg-[#0848B5]" />
          <View className="absolute -right-20 top-0 h-56 w-56 rounded-full bg-[#0D62F2]" />

          <View className="flex-row items-start justify-between">
            <View className="mt-6 h-10 w-14 rounded-lg bg-[#F2C94C]" />
            <Text className="text-4xl font-extrabold italic text-white">
              VISA
            </Text>
          </View>

          <Text className="mt-8 text-3xl font-bold tracking-widest text-white">
            **** **** **** 2864
          </Text>

          <View className="mt-5 flex-row items-end justify-between">
            <Text className="text-lg font-semibold text-white">
              Ahmad Fawaid
            </Text>
            <View className="flex-row gap-6">
              <View>
                <Text className="text-[10px] tracking-wide text-blue-100">
                  EXPIRES
                </Text>
                <Text className="text-xl font-bold text-white">08/22</Text>
              </View>
              <View>
                <Text className="text-[10px] tracking-wide text-blue-100">
                  CVV
                </Text>
                <Text className="text-xl font-bold text-white">826</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View className=" items-center flex-row gap-2 justify-center ">
        <View className="h-2.5 w-2.5 rounded-full bg-[#0A56D8]" />
        <View className="h-2.5 w-2.5 rounded-full bg-slate-300" />
      </View>

      <Text className="mb-4 text-2xl font-bold text-slate-900">Add Card</Text>
      <View className="gap-3">
        <View>
          <Text className="mb-1 text-sm text-slate-600">Card Holder Name</Text>
          <TextInput
            value={cardName}
            onChangeText={setCardName}
            placeholder="FULL NAME"
            className="rounded-xl border border-slate-300 px-3 py-3 text-slate-900"
          />
        </View>

        <View>
          <Text className="mb-1 text-sm text-slate-600">Card Number</Text>
          <TextInput
            value={cardNumber}
            onChangeText={setCardNumber}
            placeholder="1234 5678 9012 3456"
            keyboardType="number-pad"
            maxLength={19}
            className="rounded-xl border border-slate-300 px-3 py-3 text-slate-900"
          />
        </View>

        <View className="flex-row gap-3">
          <View className="flex-1">
            <Text className="mb-1 text-sm text-slate-600">MM</Text>
            <TextInput
              value={expiryMonth}
              onChangeText={setExpiryMonth}
              placeholder="08"
              keyboardType="number-pad"
              maxLength={2}
              className="rounded-xl border border-slate-300 px-3 py-3 text-slate-900"
            />
          </View>

          <View className="flex-1">
            <Text className="mb-1 text-sm text-slate-600">YY</Text>
            <TextInput
              value={expiryYear}
              onChangeText={setExpiryYear}
              placeholder="28"
              keyboardType="number-pad"
              maxLength={2}
              className="rounded-xl border border-slate-300 px-3 py-3 text-slate-900"
            />
          </View>

          <View className="flex-1">
            <Text className="mb-1 text-sm text-slate-600">CVV</Text>
            <TextInput
              value={cvv}
              onChangeText={setCvv}
              placeholder="123"
              keyboardType="number-pad"
              maxLength={3}
              secureTextEntry
              className="rounded-xl border border-slate-300 px-3 py-3 text-slate-900"
            />
          </View>
        </View>
      </View>
    </View>
  );
}
