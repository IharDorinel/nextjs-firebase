import { initializeApp } from "firebase/app";


export const createFirebaseApp = () => {
    const clientCredentials = {
        apiKey: "AIzaSyBr4GS1cHSYEYka8FCTK3Z_5akUFUMIQfo",
        authDomain: "next-project-a0010.firebaseapp.com",
        projectId: "next-project-a0010",
        storageBucket: "next-project-a0010.appspot.com",
        messagingSenderId: "37843380881",
        appId: "1:37843380881:web:2fa0735530b59bb7546d30",
        measurementId: "G-PRF47ZG8VX"
    }

    return initializeApp(clientCredentials)

};



