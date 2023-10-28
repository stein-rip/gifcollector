import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD3eTz7t71ADCg39TW1Ze7VR3JCU7lR1c",
  authDomain: "giphy-90c66.firebaseapp.com",
  projectId: "giphy-90c66",
  storageBucket: "giphy-90c66.appspot.com",
  messagingSenderId: "266139769223",
  appId: "1:266139769223:web:2879ec9666ebfececc9b22",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOut(): void {
  auth.signOut();
}
