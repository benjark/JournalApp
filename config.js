// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import React, { useState } from 'react';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGwyjHX6vhjsBAXeGMCEZfBOfzwikLDPc",
  authDomain: "missionary-mental-health.firebaseapp.com",
  projectId: "missionary-mental-health",
  storageBucket: "missionary-mental-health.appspot.com",
  messagingSenderId: "733294962332",
  appId: "1:733294962332:web:3b0e8dfddcb1bbec9a2f59"
};

let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

const db = firebase.firestore();

// Get a reference to the "journals" collection
const journalsCollection = db.collection('journals');

// Read data from the "journals" collection
journalsCollection.get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
});

export {firebase,auth,db,journalsCollection};
