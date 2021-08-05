import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
const firebaseConfig = {
	apiKey: "AIzaSyAOsjBcga79GVtrzIY0wyzGTX4TSEUmbMk",
	authDomain: "whatsapp-clone-419a9.firebaseapp.com",
	projectId: "whatsapp-clone-419a9",
	storageBucket: "whatsapp-clone-419a9.appspot.com",
	messagingSenderId: "1015311062338",
	appId: "1:1015311062338:web:6a96d38bc2cdbfcadd64db",
	measurementId: "G-PVJXXSTKMT"
      };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
