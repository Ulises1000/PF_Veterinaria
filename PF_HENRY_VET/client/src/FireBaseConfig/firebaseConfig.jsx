import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl6c4ry99QnW_ZZ37eVn5HrKbOuyn4erE",
  authDomain: "fir-b6c39.firebaseapp.com",
  projectId: "fir-b6c39",
  storageBucket: "fir-b6c39.appspot.com",
  messagingSenderId: "393174659446",
  appId: "1:393174659446:web:d16bfc866a686c06478a57",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);