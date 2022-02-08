import {
  onAuthStateChanged,
  sendSignInLinkToEmail,
  signInWithPopup,
} from "@firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { GithubAuthProvider, GoogleAuthProvider, signOut } from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  function GoogleSignUp() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }

  function GithubSignUp() {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  }

  function EmailLinkSingUp(email) {
    const actionCodeSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be in the authorized domains list in the Firebase Console.
      url: "https://blogtiple.page.link/importblog",
      // This must be true.
      handleCodeInApp: true,
      iOS: {
        bundleId: "com.blogtiple.ios",
      },
      android: {
        packageName: "com.blogtiple.android",
        installApp: true,
        minimumVersion: "12",
      },
      dynamicLinkDomain: "blogtiple.page.link",
    };
    return sendSignInLinkToEmail(auth, email, actionCodeSettings);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  // signOut function
  function SignUserOut() {
    return signOut(auth);
  }

  const value = {
    currentUser,
    GoogleSignUp,
    GithubSignUp,
    SignUserOut,
    EmailLinkSingUp,
  };

  return (
    <div>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </div>
  );
};
