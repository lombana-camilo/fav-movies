import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./config/firebase.js"
//redux 
// import firebase from "firebase/compat/app";
// import { ReactReduxFirebaseProvider } from "react-redux-firebase";
// import { createFirestoreInstance } from "redux-firestore";
import store from "./store/store.js";


// const rrfProps = {
//    firebase,
//    config:app,
//    dispatch:store.dispatch,
//    createFirestoreInstance,
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {/* <ReactReduxFirebaseProvider {...rrfProps}> */}
          <App />
        {/* </ReactReduxFirebaseProvider> */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
