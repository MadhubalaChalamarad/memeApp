import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDmWd9zwVn6y_2g1Uo3c8R2_GGtTqI_HBo",
  authDomain: "app-19a2e.firebaseapp.com",
  projectId: "app-19a2e",
  storageBucket: "app-19a2e.appspot.com",
  messagingSenderId: "203529850606",
  appId: "1:203529850606:web:c7bf33b08bae0e11ab2dff",
  databaseURL: "https://app-19a2e-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig);
