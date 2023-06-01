import { createContext, useState } from "react";
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { useEffect } from "react";


export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // create new user
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in user
    const signIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(email, password)
    }

    // user logout
    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            // console.log(currentUser);
            setLoading(false);
        })
        return ()=>{
            return unsubscribe();
        }
    })



    const authInfo = {

        user,
        loading,
        createUser,
        signIn,
        logOut
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;