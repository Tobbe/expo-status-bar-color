import { Platform, Text, View } from "react-native";
import { setStatusBarBackgroundColor, StatusBar } from "expo-status-bar";

export default function Index() {
  if (Platform.OS === "android") {
    setStatusBarBackgroundColor("#00ff00");
  }

  return (
    <View>
      <StatusBar backgroundColor="#00ff00" />
      <Text>StatusBar is expected to be green</Text>
    </View>
  );
}
