import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// EMPLOYEE APP
const firebaseConfig = {
  apiKey: "AIzaSyBeCQMMLWJEt0AziJd_GlLT5v6P-nQUcUs",
  authDomain: "virtualtryonclothing-e26f4.firebaseapp.com",
  projectId: "virtualtryonclothing-e26f4",
  storageBucket: "virtualtryonclothing-e26f4.appspot.com",
  messagingSenderId: "338582404336",
  appId: "1:338582404336:web:82c5da2685820115a81635",
  measurementId: "G-59YXNV66CK"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth(app);
export const storage = getStorage(app);