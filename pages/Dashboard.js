import { StyleSheet, Text, View } from "react-native";

const Dashboard = () => {
  return (
    <View style={styles.dashboard}>
      <Text>Dashboard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dashboard: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Dashboard;
