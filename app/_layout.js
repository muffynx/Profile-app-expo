import { Tabs } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Layout() {
  return (
    <View style={styles.container}>
      <Tabs>
        <Tabs.Screen name="index" options={{ title: "Profile" }} />
        <Tabs.Screen name="about" options={{ title: "About Me" }} />
        <Tabs.Screen name="contact" options={{ title: "Contact" }} />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2", 
    paddingTop: 50,
    paddingBottom: 20,
  },
});
