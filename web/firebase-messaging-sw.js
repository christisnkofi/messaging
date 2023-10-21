importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyCDESA9XZqtfDauanM0k4Ee7DSCLvccwZI",
  authDomain: "messaging-f7ed0.firebaseapp.com",
  projectId: "messaging-f7ed0",
  storageBucket: "messaging-f7ed0.appspot.com",
  messagingSenderId: "419647799677",
  appId: "1:419647799677:web:3e475f4948eebe97a5cc14",
  measurementId: "G-6GQFER279G"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});