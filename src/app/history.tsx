import { CircleCheck, CircleX } from "lucide-react-native";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function History() {
  return (
    <SafeAreaView>
      <View className="px-4 ">
        <Text className="text-2xl font-bold text-black">My Transactions</Text>
        <View className="flex-row items-center justify-start gap-2 mt-4">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center justify-between">
              <Text className="text-sm bg-green-900 p-2 px-4 rounded-full text-white">
                All
              </Text>
            </View>
          </View>
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center justify-between">
              <Text className="text-sm bg-white border border-gray-200 p-2 px-4 rounded-full text-gray-500">
                Deposit of funds
              </Text>
            </View>
          </View>
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center justify-between">
              <Text className="text-sm bg-white border border-gray-200 p-2 px-4 rounded-full text-gray-500">
                Withdrawal of funds
              </Text>
            </View>
          </View>
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center justify-between">
              <Text className="text-sm bg-white border border-gray-200 p-2 px-4 rounded-full text-gray-500">
                Withdrawal of funds
              </Text>
            </View>
          </View>
        </View>
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center justify-between">
                <Text className="text-sm text-gray-500">Date</Text>
              </View>
              <View className="flex-row items-center justify-between">
                <CircleX size={20} color="red" />
              </View>
            </View>
            <View className="flex-row items-center justify-between">
              <CircleCheck size={20} color="green" />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
