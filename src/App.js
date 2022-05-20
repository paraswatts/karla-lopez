import React, { useEffect, useState } from 'react'
import './App.css';
import './shared/styles/index.scss'
import Routes from "./routes";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";
import { initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getApp } from "firebase/app";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import { getStorage, connectStorageEmulator } from "firebase/storage";
import { SnackbarProvider } from "notistack";
import Grow from '@material-ui/core/Grow';
import { makeStyles } from '@material-ui/core/styles'
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCBqtyDXEP6zXC8LULDKaLrPbuGHR6l94",
  authDomain: "karla-lopez.firebaseapp.com",
  projectId: "karla-lopez",
  storageBucket: "karla-lopez.appspot.com",
  messagingSenderId: "155228029387",
  appId: "1:155228029387:web:5b78cbba642a19746c364e",
  measurementId: "G-CH0EZN2WD8"
};

const firebaseApp = initializeApp(firebaseConfig);
export const functions = getFunctions(getApp());
export const db = getFirestore();
export const storage = getStorage();

function App() {
  const [toggle, setToggle] = useState(false)
  const useStyles = makeStyles(theme => ({
    success: { backgroundColor: 'purple' },
    error: { backgroundColor: 'blue' },
    warning: { backgroundColor: 'green' },
    info: { backgroundColor: 'yellow' },
  }));

  useEffect(() => {
    const auth = getAuth();
    signInAnonymously(auth)
      .then(() => {
        console.log("signed in")
        // Signed in..
      })
      .catch((error) => {
        console.log("signed in error", error)
      });

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });


  }, [])

  const classes = useStyles();
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      autoHideDuration={3000}
      classes={{
        variantSuccess: classes.success
      }}
      TransitionComponent={Grow}
    >
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    </SnackbarProvider>
  )
}

export default App;
