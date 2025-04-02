import { getApp, getApps, initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyB_xNt1OtnVN7DNBvBdEkHn8f8T7JFdL_o",
  authDomain: "real-time-ai-voice-agent.firebaseapp.com",
  projectId: "real-time-ai-voice-agent",
  storageBucket: "real-time-ai-voice-agent.firebasestorage.app",
  messagingSenderId: "618051153128",
  appId: "1:618051153128:web:bcd7046ee498cc363b6d5d",
  measurementId: "G-GVQ03X7LHP"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);