import {getApp, getApps, initializeApp} from 'firebase/app'
import { getFirestore} from 'firebase/firestore'
import { getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAlLn4Qy_byTaB88Bt4qMuCH07Sy9z_txs",
    authDomain: "abike-s.firebaseapp.com",
    databaseURL: "https://abike-s-default-rtdb.firebaseio.com",
    projectId: "abike-s",
    storageBucket: "abike-s.appspot.com",
    messagingSenderId: "50244852550",
    appId: "1:50244852550:web:fbd24f15b71444dde76347"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);


  export { app, firestore, storage}