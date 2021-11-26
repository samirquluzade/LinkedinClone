import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDiCBwDl9kyRyHwAnX_FMqYkdFJ9SNo-_E",
    authDomain: "linkedinclone-a8e14.firebaseapp.com",
    projectId: "linkedinclone-a8e14",
    storageBucket: "linkedinclone-a8e14.appspot.com",
    messagingSenderId: "394567543919",
    appId: "1:394567543919:web:aa64e29d1b2d7bad56b19a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth,provider,storage};
export default db;