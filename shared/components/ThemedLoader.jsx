import { ActivityIndicator, useColorScheme, Text } from "react-native";
import { Colors } from "../../constants/Colors";
import ThemedView from "./ThemedView";

const ThemedLoader = ({ message = "Please wait..." }) => {
  const colorscheme = useColorScheme();
  const theme = Colors[colorscheme] ?? Colors.light;

  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <ActivityIndicator size="large" color={theme.text} />
      <Text
        style={{
          marginTop: 15,
          fontSize: 16,
          color: theme.text,
          textAlign: "center",
        }}
      >
        {message}
      </Text>
    </ThemedView>
  );
};

export default ThemedLoader;
