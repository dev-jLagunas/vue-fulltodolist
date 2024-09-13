import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcAlFflAgTtW4vRGK4jbTz_D9D4B441EY",
  authDomain: "vue-todo-app-f5900.firebaseapp.com",
  projectId: "vue-todo-app-f5900",
  storageBucket: "vue-todo-app-f5900.appspot.com",
  messagingSenderId: "311935554567",
  appId: "1:311935554567:web:701f9dee1089f82ac846a2",
  measurementId: "G-KNYVMWGVF2",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
