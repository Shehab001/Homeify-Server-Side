import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const Context = ({ children }) => {
  const [user, setUser] = useState({});
  const [authControl, setAuthControl] = useState("signin");

  const [state, setState] = React.useState({
    right: false,
  });
  console.log(state.right);

  const toggleDrawer = (anchor, open) => (event) => {
    // alert("hi");
    console.log(anchor, open);
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const providerLogin = (provider) => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("inside auth state change", currentUser);
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    updateUserProfile,
    logOut,
    signIn,
    providerLogin,
    state,
    setState,
    toggleDrawer,
    authControl,
    setAuthControl,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Context;
