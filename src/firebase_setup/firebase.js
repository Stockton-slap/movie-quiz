import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQBcFSDiM6FtGB-vWrgJuvQgJnGUhxt90",
  authDomain: "quiz-d48fe.firebaseapp.com",
  projectId: "quiz-d48fe",
  storageBucket: "quiz-d48fe.appspot.com",
  messagingSenderId: "623922465135",
  appId: "1:623922465135:web:77056bee7f1b679335809a",
  measurementId: "G-Y0BPXNQ3VB",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
