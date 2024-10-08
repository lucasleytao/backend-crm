// src/BD/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCvmdlYAWDxFmXkYuNSUvUpPVmclvJG8VU",
    authDomain: "handcrm-dd9af.firebaseapp.com",
    projectId: "handcrm-dd9af",
    storageBucket: "handcrm-dd9af.appspot.com",
    messagingSenderId: "701666791824",
    appId: "1:701666791824:web:f6b3d2fb10ac57bf0aa315",
    measurementId: "G-SVS5DGM8EG"
};

let app;
let auth;
let db;
let analytics;

// tratamento de erro

try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app); // recebe as configuracoes do firebase
    analytics = getAnalytics(app);

    console.log("Firebase inicializado com sucesso");
    
} catch (error) {
    console.error("Erro ao inicializar o Firebase:", error);
}

export { auth, db, analytics };


