import { StyleSheet, Text, View, ScrollView, Linking, ImageBackground } from "react-native";

const Contact = () => {
  return (
    <ImageBackground
      
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>Contact Information</Text>

          <Text style={styles.contactText}>Address: 220 Ban Nhong Dern Nong Khai 43000</Text>

          <Text style={styles.contactText}>Email: 
            <Text 
              style={styles.linkText} 
              onPress={() => Linking.openURL('mailto:asoog9966@gmail.com')}
            >
              asoog9966@gmail.com
            </Text>
          </Text>

          <Text style={styles.contactText}>Phone: +66 610482490</Text>

          <Text style={styles.contactText}>
            GitHub: 
            <Text 
              style={styles.linkText} 
              onPress={() => Linking.openURL('https://github.com/muffynx')}
            >
              https://github.com/muffynx
            </Text>
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.7)", 
    padding: 20,
    width: "100%",
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#4A90E2",
    marginBottom: 20,
    textAlign: "center",
  },
  contactText: {
    fontSize: 18,
    color: "#333",
    marginBottom: 15,
    padding: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)", 
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  linkText: {
    color: "#4A90E2", 
    textDecorationLine: "underline", 
  },
});

export default Contact;
