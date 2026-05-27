import {
    BellDot,
    CarFront,
    CircleDollarSign,
    Download,
    Send,
    ShoppingCart,
    Wallet,
} from "lucide-react-native";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Home() {
  return (
    <SafeAreaView className="p-4 rounded-lg">
      <View className="flex-row items-center justify-between">
        <View className="bg-green-600 p-4 rounded-lg">
          <Text className="text-2xl font-bold text-white">$2,589.50</Text>
          <Text className="text-sm text-white">Available Balance</Text>
        </View>
        <View className="flex-row items-center justify-between">
          <View className=" p-4 rounded-lg">
            <BellDot size={24} color="red" />
          </View>
          <View className="border-2 border-white rounded-full">
            <Image
              source={require("@/assets/images/pisey.jpg")}
              className="w-10 h-10 rounded-full"
            />
          </View>
        </View>
      </View>
      <View className="flex-row items-center justify-between">
        <View className=" flex-row items-center justify-between bg-red-600 p-4 rounded-lg">
          <View className="bg-red-600 p-4 rounded-lg">
            <Send size={24} color="white" />
            <Text className="text-md font-bold text-white">Send</Text>
          </View>
          <View className="bg-red-600 p-4 rounded-lg">
            <Download size={24} color="white" />
            <Text className="text-md font-bold text-white">Request</Text>
          </View>
          <View className="bg-red-600 p-4 rounded-lg">
            <CircleDollarSign size={24} color="white" />
            <Text className="text-md font-bold text-white">Loan</Text>
          </View>
          <View className="bg-red-600 p-4 rounded-lg">
            <Wallet size={24} color="white" />
            <Text className="text-md font-bold text-white">Topup</Text>
          </View>
        </View>
      </View>
      <View className="flex-row items-center justify-between">
        <View className=" flex-row items-center justify-between bg-red-600 p-4 rounded-lg">
          <View className="bg-red-600 p-4 rounded-lg flex-row items-center justify-between">
            <Text className="text-lg font-bold text-white">
              Recent Transactions
            </Text>
            <Text className="text-sm text-white">See all</Text>
          </View>
        </View>
      </View>
      <View className="flex-row items-center justify-between">
        <View className="bg-red-600 p-4 rounded-lg">
          <Download size={24} color="white" />
          <Text className="text-md font-bold text-white">All</Text>
        </View>
        <View className="bg-red-600 p-4 rounded-lg">
          <CircleDollarSign size={24} color="white" />
          <Text className="text-md font-bold text-white">Income</Text>
        </View>
        <View className="bg-red-600 p-4 rounded-lg">
          <Wallet size={24} color="white" />
          <Text className="text-md font-bold text-white">Expense</Text>
        </View>
      </View>

      <View className="flex-row items-center justify-between">
        <Text className="text-lg font-bold text-gray-500">TODAY</Text>
      </View>

      <View className="flex-row items-center justify-between border-2 border-white">
        <View className=" p-4 gap-4 rounded-lg flex-row items-center justify-between">
          <ShoppingCart size={35} color="blue" />
          <View className="flex-col items-start justify-center">
            <Text className="text-md font-bold text-black ">Grocery</Text>
            <Text className="text-sm text-gray-500">Eataly downtown</Text>
          </View>
        </View>
        <View className="p-4 rounded-lg">
          <Text className="text-md font-bold text-black">-$50.68</Text>
          <Text className="text-sm text-gray-500">Aug 26</Text>
        </View>
      </View>
      <View className="flex-row items-center justify-between border-2 border-white">
        <View className=" p-4 gap-4 rounded-lg flex-row items-center justify-between">
          <CarFront size={35} color="blue" />
          <View className="flex-col items-start justify-center">
            <Text className="text-md font-bold text-black ">Transport</Text>
            <Text className="text-sm text-gray-500">UBER Pool</Text>
          </View>
        </View>
        <View className="p-4 rounded-lg">
          <Text className="text-md font-bold text-black">-$5.00</Text>
          <Text className="text-sm text-gray-500">Aug 26</Text>
        </View>
      </View>

      <View className="flex-row items-center justify-between">
        <Text className="text-lg font-bold text-gray-500">YESTERDAY</Text>
      </View>

      <View className="flex-row items-center justify-between border-2 border-white">
        <View className=" p-4 gap-4 rounded-lg flex-row items-center justify-between">
          <Wallet size={35} color="green" />
          <View className="flex-col items-start justify-center">
            <Text className="text-md font-bold text-black ">Payment</Text>
            <Text className="text-sm text-gray-500">Payment from Piseyrio</Text>
          </View>
        </View>
        <View className="p-4 rounded-lg">
          <Text className="text-md font-bold text-green-500">+$564.00</Text>
          <Text className="text-sm text-gray-500">Aug 25</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
