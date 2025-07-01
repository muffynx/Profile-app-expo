import { StyleSheet, Text, View, Image } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/png.jpg")}
        style={styles.profile}
      />
      <Text style={styles.title}>Natdanai Pakpoom</Text>
      <Text style={styles.subtitle}>Computer and Information Science</Text>
      <Text style={styles.text}>Khon Kaen University</Text>
      <Text style={styles.text}>Student Id: 653450088-3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#e0e0e0", 
  },
  profile: {
    width: 120,
    height: 120,
    borderRadius: 60, 
    borderWidth: 3,
    borderColor: "#4A90E2",
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#4A90E2",
    marginTop: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#555",
    marginTop: 5,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    color: "#333",
    marginTop: 5,
    textAlign: "center",
  },
});

export default Home;
