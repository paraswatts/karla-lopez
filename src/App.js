import React, { useState } from 'react'
import './App.css';
import './shared/styles/index.scss'
import Routes from "./routes";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";
import { CartProvider } from "use-shopping-cart";
import getStripe from './shared/stripe/getStripe';
import { initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getApp } from "firebase/app";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import { getStorage, connectStorageEmulator } from "firebase/storage";
import { SnackbarProvider } from "notistack";
import Grow from '@material-ui/core/Grow';
import { makeStyles } from '@material-ui/core/styles'
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBaKm3ZeD8IDaN1b2Y_2o2CHzRRRMsa8OI",
  authDomain: "postablur-app.firebaseapp.com",
  databaseURL: "https://postablur-app.firebaseio.com",
  projectId: "postablur-app",
  storageBucket: "postablur-app.appspot.com",
  messagingSenderId: "56914402503",
  appId: "1:56914402503:web:820787dc19b6fd46f872e2"
};
const firebaseApp = initializeApp(firebaseConfig);
export const functions = getFunctions(getApp());
export const db = getFirestore();
export const storage = getStorage();
if (window.location.hostname === 'localhost') {
  // connectFirestoreEmulator(db, 'localhost', 8080);
  // connectFunctionsEmulator(functions, 'localhost', 5001);
  // connectStorageEmulator(storage, "localhost", 9199);
}

function App() {
  const [toggle, setToggle] = useState(false)
  const useStyles = makeStyles(theme => ({
    success: { backgroundColor: 'purple' },
    error: { backgroundColor: 'blue' },
    warning: { backgroundColor: 'green' },
    info: { backgroundColor: 'yellow' },
  }));

  const classes = useStyles();
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
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
