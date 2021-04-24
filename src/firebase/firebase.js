//eslint-disable-next-line
import firebase from "firebase";
import "firebase/auth";

var app = firebase.initializeApp({
    apiKey: "AIzaSyBPlom3RpdFiuFk9V9DusXaMiJT5LQjdn0",
    authDomain: "diligentcoderfolio.firebaseapp.com",
    projectId: "diligentcoderfolio",
    storageBucket: "diligentcoderfolio.appspot.com",
    messagingSenderId: "258806132103",
    appId: "1:258806132103:web:ceb5eca3aa24611b233722",
    measurementId: "G-XQTLWTMDE6"
});

export const auth = app.auth();
auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);
export default app;
export const db = app.firestore();