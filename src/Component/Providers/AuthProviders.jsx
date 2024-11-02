import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext();

// Google provider
const GoogleProvider = new GoogleAuthProvider();

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // createUser
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  

  // Login User
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider);
  };

   // LogOut
   const logOut = () => {
    setUser(null);
    signOut(auth);
  };

  const updateUserProfile = (name, photo) =>{
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
    })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
      console.log('current user', currentUser)
    })
    return () => {
      return unsubscribe();
    }
  }, [])

  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    googleLogin,
    logOut,
    updateUserProfile
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;

AuthProviders.propTypes = {
  children: PropTypes.node,
};

