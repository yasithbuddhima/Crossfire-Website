import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setLoading(true);
      if (user) {
        setCurrentUser(user);

        // Check if user is an admin in Firestore
        // try {
        //   const adminDoc = await getDoc(doc(db, "admins", user.uid));
        //   setIsAdmin(adminDoc.exists());
        // } catch (error) {
        //   console.error("Error checking admin status:", error);
        //   setIsAdmin(false);
        // }

        // TODO: Implement this using checking teh user in the firebase DB
        setIsAdmin(false);
        // TODO:
      } else {
        setCurrentUser(null);
        setIsAdmin(false);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    isAdmin,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
