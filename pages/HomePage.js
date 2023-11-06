import { Button, StyleSheet, Text, View } from "react-native";

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.homePage}>
      <Text>HomePage</Text>
      <Button
        title="Go to Dashboard"
        onPress={() => navigation.navigate("Dashboard")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homePage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomePage;
