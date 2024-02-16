import { createContext, useState } from "react";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // providers
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // create new user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in user
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Update user info
  const userProfile = (displayName, photoURL) => {
    const user = auth.currentUser;
    return updateProfile(user, { displayName, photoURL });
  };

  // user logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Continue with google
  const continueWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // continue with Facebook
  const continueWithFacebook = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };

  // Continue with github
  const continueWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  // refresh user profile
  const refreshUserProfile = () => {
    setLoading(true);
    const currentUser = auth.currentUser;

    if (currentUser) {
      userProfile(currentUser.displayName, currentUser.photoURL)
        .then(() => {
          // Assuming the user profile update was successful
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
  
      if (currentUser) {
        try {
          const response = await axios.post("https://bistro-boss-server-cyan-nu.vercel.app/jwt", {
            email: currentUser.email,
          });
          // console.log(response.data);
          localStorage.setItem("bistro_access_token", response.data.token);
        } catch (error) {
          console.error("Error fetching JWT:", error);
          // Handle error if needed
        } finally {
          setLoading(false);
        }
      } else {
        localStorage.removeItem("bistro_access_token");
        setLoading(false);
      }
    });
  
    return () => unsubscribe();
  }, []);
  

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    userProfile,
    logOut,
    continueWithGoogle,
    continueWithFacebook,
    continueWithGithub,
    refreshUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
