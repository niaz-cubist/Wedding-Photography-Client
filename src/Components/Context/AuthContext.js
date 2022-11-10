import React, { useState, useEffect } from 'react';
import { createContext } from 'react';
import app from '../Authentication/Firebase.init';
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'


export const Context = createContext()
const auth = getAuth(app)

const AuthContext = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //Google
    const provider = new GoogleAuthProvider();

    const google = () => {
        return signInWithPopup(auth, provider)
    }
    //Create User by Email Password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //Login with email password
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    //LogOut
    const logOut = () => {
        localStorage.removeItem('genius-token');
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        createUser, login, loading, logOut, user, google
    }


    return (
        <Context.Provider value={authInfo}>
            {children}
        </Context.Provider >
    );
};

export default AuthContext;