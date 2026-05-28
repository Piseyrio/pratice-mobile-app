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
    <SafeAreaView className="">
      <View className="p-4 rounded-lg bg-[#004e99]">
        <View className="flex-row items-center justify-between">
          <View className=" p-4 rounded-lg">
            <Text className="text-4xl font-bold text-white">$9,589.50</Text>
            <Text className="text-sm text-white">Available Balance</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <View className=" p-4 rounded-lg">
              <BellDot size={35} color="red" />
            </View>
            <View className="border-2 border-white rounded-full">
              <Image
                source={require("@/assets/images/pisey.jpg")}
                className="w-12 h-12 rounded-full"
              />
            </View>
          </View>
        </View>
        <View className="">
          <View className=" flex-row justify-between items-center p-4 rounded-lg">
            <View className=" p-4 rounded-lg items-center gap-4 justify-center">
              <View className="bg-white p-4 rounded-2xl">
                <Send size={28} color="blue" />
              </View>
              <View className="">
                <Text className="text-md font-bold text-white">Send</Text>
              </View>
            </View>
            <View className=" p-4 rounded-lg items-center gap-4 justify-center">
              <View className="bg-white p-4 rounded-2xl">
                <Download size={28} color="blue" />
              </View>
              <View className="">
                <Text className="text-md font-bold text-white">Request</Text>
              </View>
            </View>
            <View className=" p-4 rounded-lg items-center gap-4 justify-center">
              <View className="bg-white p-4 rounded-2xl">
                <CircleDollarSign size={28} color="blue" />
              </View>
              <View className="">
                <Text className="text-md font-bold text-white">Load</Text>
              </View>
            </View>
            <View className=" p-4 rounded-lg items-center gap-4 justify-center">
              <View className="bg-white p-4 rounded-2xl">
                <Wallet size={28} color="blue" />
              </View>
              <View className="">
                <Text className="text-md font-bold text-white">Topup</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View className="bg-white">
        <View className=" ">
          <View className=" px-4 pt-4 rounded-lg flex-row items-center justify-between">
            <Text className="text-2xl font-bold text-black">
              Recent Transactions
            </Text>
            <Text className="text-sm font-bold text-blue-600">See all</Text>
          </View>
        </View>
        <View className="flex-row items-center gap-4 p-4">
          <View className="border-2 border-blue-600 p-2 px-4 rounded-full">
            <Text className="text-md font-bold text-blue-600">All</Text>
          </View>
          <View className="border border-gray-200 p-2 gap-2 px-4 rounded-full flex-row items-center justify-between">
            <View className="h-2.5 w-2.5 rounded-full bg-green-400" />
            <Text className="text-md font-medium text-slate-600">Income</Text>
          </View>
          <View className="border border-gray-200 p-2 gap-2 px-4 rounded-full flex-row items-center justify-center">
            <View className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <Text className="text-md font-medium text-slate-600">Expense</Text>
          </View>
        </View>

        <View className="flex-row items-center justify-between px-4">
          <Text className="text-lg font-bold text-gray-500">TODAY</Text>
        </View>
        <View className="p-4">
          <View className=" rounded-xl border border-red-200 mb-4">
            <View className="flex-row items-center justify-between">
              <View className="gap-4 p-4 rounded-lg flex-row items-center justify-between">
                <View className="bg-gray-200 p-2 rounded-lg">
                  <ShoppingCart size={30} color="blue" />
                </View>
                <View className="flex-col items-start justify-center">
                  <Text className="text-md font-bold text-black ">Grocery</Text>
                  <Text className="text-sm text-gray-500">Eataly downtown</Text>
                </View>
              </View>
              <View className="p-4 rounded-lg ">
                <Text className="text-md font-bold text-black">-$50.68</Text>
                <Text className="text-sm text-gray-500">Aug 26</Text>
              </View>
            </View>
          </View>

          <View className=" rounded-xl border border-red-200">
            <View className="flex-row items-center justify-between">
              <View className=" p-4 gap-4 rounded-lg flex-row items-center justify-between">
                <View className="bg-gray-200 p-2 rounded-lg">
                  <CarFront size={30} color="blue" />
                </View>
                <View className="flex-col items-start justify-center">
                  <Text className="text-md font-bold text-black ">
                    Transport
                  </Text>
                  <Text className="text-sm text-gray-500">UBER Pool</Text>
                </View>
              </View>
              <View className="p-4 rounded-lg ">
                <Text className="text-md font-bold text-black">-$5.00</Text>
                <Text className="text-sm text-gray-500">Aug 26</Text>
              </View>
            </View>
          </View>
        </View>
        <View className="flex-row items-center justify-between px-4">
          <Text className="text-lg font-bold text-gray-500">YESTERDAY</Text>
        </View>
        <View className="p-4">
          <View className=" border rounded-xl border-red-200 mb-4">
            <View className="flex-row items-center justify-between">
              <View className=" p-4 gap-4 rounded-lg flex-row ">
                <View className="bg-gray-200 p-2 rounded-xl">
                  <Wallet size={30} color="green" />
                </View>
                <View className="flex-col items-start justify-center">
                  <Text className="text-md font-bold text-black ">Payment</Text>
                  <Text className="text-sm text-gray-500">
                    Payment from Piseyrio
                  </Text>
                </View>
              </View>
              <View className="p-4 rounded-lg">
                <Text className="text-md font-bold text-green-500">
                  +$564.00
                </Text>
                <Text className="text-sm text-gray-500">Aug 25</Text>
              </View>
            </View>
          </View>
          <View className=" border rounded-xl border-red-200 mb-4">
            <View className="flex-row items-center justify-between">
              <View className=" p-4 gap-4 rounded-lg flex-row ">
                <View className="bg-gray-200 p-2 rounded-xl">
                  <Wallet size={30} color="green" />
                </View>
                <View className="flex-col items-start justify-center">
                  <Text className="text-md font-bold text-black ">Payment</Text>
                  <Text className="text-sm text-gray-500">
                    Payment from Piseyrio
                  </Text>
                </View>
              </View>
              <View className="p-4 rounded-lg">
                <Text className="text-md font-bold text-green-500">
                  +$564.00
                </Text>
                <Text className="text-sm text-gray-500">Aug 25</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
