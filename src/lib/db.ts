import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtPcKA8tJJ75bj-GxhB2HoT5a1gc3vn-8",
  authDomain: "my-project-64340-1680002537934.firebaseapp.com",
  projectId: "my-project-64340-1680002537934",
  storageBucket: "my-project-64340-1680002537934.appspot.com",
  messagingSenderId: "308630123427",
  appId: "1:308630123427:web:96cdb152746ce628f36016",
  measurementId: "G-G35E6330VJ"
};

const app = initializeApp(firebaseConfig);
if (typeof window !== "undefined") {
  const analytics = getAnalytics(app);
}

const db = getFirestore(app);
export default db;
