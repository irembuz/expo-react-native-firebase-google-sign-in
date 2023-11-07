import { Button, StyleSheet, Text, View } from "react-native";

import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

import { auth, REACT_APP_WEB_CLIENT_ID } from "../firebaseConfig";

GoogleSignin.configure({
  webClientId: REACT_APP_WEB_CLIENT_ID,
});

const HomePage = ({ navigation }) => {
  const onGoogleButtonPress = async () => {
    try {
      // TODO: Add Google Signin which fetches the idToken

      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });

      // Get the user's ID token
      const { idToken } = await GoogleSignin.signIn();

      if (idToken) {
        // Create a Google credential with the token
        const credential = GoogleAuthProvider.credential(idToken);

        signInWithCredential(auth, credential).then((result) => {
          if (result && result.user) {
            navigation.navigate("Dashboard");
          }
        })
        .catch((error) => {
          console.log("Error in Firebase signInWithCredential", error.message);
        });
      }
    } catch (error) {
      console.log("Error in GoogleSignin", error.message);
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
