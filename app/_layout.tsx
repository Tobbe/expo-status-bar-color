import { Stack } from "expo-router";
import { Platform, StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        navigationBarColor: "transparent",
        statusBarBackgroundColor:
          Platform.OS === "android" ? "transparent" : undefined,
        statusBarStyle: "dark",
        statusBarTranslucent: true,
        contentStyle: styles.contentStyle,
      }}
    />
  );
}

const styles = StyleSheet.create({
  statusbarIndexScreen: {
    // Match the color of the image at the top of the screen
    color: "#e1d1b9",
  },
  contentStyle: {
    backgroundColor: "#fff9ed",
  },
});
