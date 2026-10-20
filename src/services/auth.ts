import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

// This is the function to sign up ( Register Team ) with email and password
// Return a promise
// Promise<import("firebase/auth").User>
export const signUpWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return userCredential.user;
  } catch (error) {
    // Forward the exact error code so the UI can decide what message to show
    console.error("Firebase Auth Error in Service:", error);
    throw error;
  }
};

// Function to Login
// Return a promise
// Promise<import("firebase/auth").User>
export const signInWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return userCredential.user;
  } catch (error) {
    // Forward the exact error code so the UI can decide what message to show
    console.error("Firebase Auth Error in Service:", error);
    throw error;
  }
};
