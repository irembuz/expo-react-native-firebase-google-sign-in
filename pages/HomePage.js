import { Button, StyleSheet, Text, View } from "react-native";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { auth } from "../firebaseConfig";

const HomePage = ({ navigation }) => {
  const onGoogleButtonPress = async () => {
    try {
      // TODO: Add Google Signin which fetches the idToken

      if (idToken) {
        // Create a Google credential with the token
        const credential = GoogleAuthProvider.credential(idToken);

        signInWithCredential(auth, credential).then((result) => {
          if (result && result.user) {
            navigation.navigate("Dashboard");
          }
        });
      }
    } catch (error) {
      console.log("Error in GoogleSignin");
      return;
    }
  };

  return (
    <View style={styles.homePage}>
      <Text>HomePage</Text>
      <Button title="Continue with Google" onPress={onGoogleButtonPress} />
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
