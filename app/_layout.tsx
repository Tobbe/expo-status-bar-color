import { Stack } from "expo-router";
import { Platform } from "react-native";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        statusBarTranslucent: true,
        statusBarStyle: "dark",
        statusBarBackgroundColor:
          Platform.OS === "android" ? "transparent" : undefined,
      }}
    />
  );
}
