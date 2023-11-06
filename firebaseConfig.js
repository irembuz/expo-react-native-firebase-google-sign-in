import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// Your web app Firebase configuration
export const firebaseConfig = {
  apiKey: "REACT_APP_API_KEY",
  authDomain: "REACT_APP_AUTH_DOMAIN",
  projectId: "REACT_APP_PROJECT_ID",
  storageBucket: "REACT_APP_STORAGE_BUCKET",
  messagingSenderId: "REACT_APP_MESSAGING_SENDER_ID",
  appId: "REACT_APP_APP_ID",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const googleAuthProvider = new GoogleAuthProvider();

export const REACT_APP_WEB_CLIENT_ID = "REACT_APP_WEB_CLIENT_ID";
