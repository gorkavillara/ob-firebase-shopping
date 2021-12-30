// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getMessaging, getToken } from "firebase/messaging"
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4w_NN9PlyMNGJSWxRvLEXhKPqt4sLPQQ",
  authDomain: "fir-shopping-d850e.firebaseapp.com",
  projectId: "fir-shopping-d850e",
  storageBucket: "fir-shopping-d850e.appspot.com",
  messagingSenderId: "941636314377",
  appId: "1:941636314377:web:2e6f89ca7f6860b1075fd8"
};

const devFirebaseConfig = {
  apiKey: "AIzaSyDqNwmq6qv8whVq815F6sQsLe096_Rw71k",
  authDomain: "dev-firebase-shopping.firebaseapp.com",
  projectId: "dev-firebase-shopping",
  storageBucket: "dev-firebase-shopping.appspot.com",
  messagingSenderId: "100202499296",
  appId: "1:100202499296:web:3d106b1ac8edf055b71485"
}

// Initialize Firebase
let app;
if (process.env.NODE_ENV === 'production') {
  app = initializeApp(firebaseConfig);
} else {
  app = initializeApp(devFirebaseConfig);
}
export {
  app
}

const vapidKeyProd = "BCvoTGdzUG6EqGo8w5LJksrzlAgbfFkDrCIEAt6KRzize45m6wmVCL6KVF-xSBx_1dFIjOaDRYvU3FF26dmP_60";
const vapidKeyDev = "BNGgoKxl8MsVsqTTbN4iUpFMtMcG1jvtizfdIucLmbGUAbiesYAoMfzMM7UF8IIDwWfFYidVt6QfNkJcD7je1GE";

export const messaging = getMessaging();

getToken(messaging, { vapidKey: process.env.NODE_ENV === 'production' ? vapidKeyProd : vapidKeyDev })
  .then(currentToken => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      // ...
      // console.log('currentToken', currentToken);
      sendTokenToServer(currentToken);
    } else {
      // Show permission request UI
      console.log('No registration token available. Request permission to generate one.');
      // ...
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
  });

const sendTokenToServer = token => {
  if (localStorage.getItem('tokenSentToServer')) return;
  // TO-DO: Implementar la lógica de que en el servidor se almacene el token
  localStorage.setItem('tokenSentToServer', '1');
}

export const db = getFirestore();
