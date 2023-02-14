import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth, db } from 'firebaseApp'
import { doc, getDoc } from 'firebase/firestore'

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  confirmPasswordReset,
} from 'firebase/auth'

const AuthContext = createContext({
  currentUser: null,
  userData: null,
  signInWithGoogle: null,
  login: null,
  register: null,
  logout: null,
  forgotPassword: null,
  resetPassword: null,
  isAuthenticated: null,
})

export const useAuth = () => useContext(AuthContext)

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [userData, setUserData] = useState({})

  const fetchUser = async (user) => {
    const userRef = doc(db, `users/${user.uid}`)
    const userDoc = await getDoc(userRef)

    if (!userDoc.exists()) {
      console.error(`User ${user.uid} not found`)
      logout()
      throw new Error(`User ${user.uid} not found`)
    }

    setUserData(userDoc.data())
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setCurrentUser(user)
        fetchUser(user)
      } else {
        setCurrentUser(null)
        setUserData({})
      }
    })
    return () => {
      unsubscribe()
    }
    // eslint-disable-next-line
  }, [])

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function forgotPassword(email) {
    return sendPasswordResetEmail(auth, email, {
      url: `http://localhost:3000/login`,
    })
  }

  function resetPassword(oobCode, newPassword) {
    return confirmPasswordReset(auth, oobCode, newPassword)
  }

  function logout() {
    return signOut(auth)
  }

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
  }

  function isAuthenticated() {
    return !!currentUser
  }

  const value = {
    currentUser,
    userData,
    signInWithGoogle,
    login,
    register,
    logout,
    forgotPassword,
    resetPassword,
    isAuthenticated,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
