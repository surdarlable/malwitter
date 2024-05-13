import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0DRpvyYfCSXvnlx6gqR8NVJDbyVHwjlY",
  authDomain: "malwitter.firebaseapp.com",
  projectId: "malwitter",
  storageBucket: "malwitter.appspot.com",
  messagingSenderId: "806535720350",
  appId: "1:806535720350:web:f2c09bd8e36cee915afa8f"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);