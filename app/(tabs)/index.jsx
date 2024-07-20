import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Fontisto } from "@expo/vector-icons";
export default function HomeScreen() {
  const route = useRouter();
  return (
    <SafeAreaView className=" flex-1 bg-[#23272f] ">
      <View className="flex-1 justify-center items-center w-full ">
        <Text className="font-raleway text-center text-4xl font-bold text-white mb-20">
          X & O
        </Text>
        <View className="w-[100%] justify-center items-center gap-5">
          <TouchableOpacity
            className="w-[50%] h-20 border border-black-200 justify-center bg-white "
            onPress={() => route.push("/play")}
          >
            <Text className="text-center font-raleway text-2xl font-bold ">
              Play
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
