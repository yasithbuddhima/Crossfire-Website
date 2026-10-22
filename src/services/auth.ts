import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "../firebase";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";

// Method to Register Team
// Register team using team name and the team leaders email
export const registerTeam = async (
  teamUserName: string,
  leaderEmail: string,
  password: string,
) => {
  try {
    // Conver the team name into lower case to uniquely identify
    const teamUsernameLowerCase = teamUserName.trim().toLowerCase();

    const userNameQuery = query(
      collection(db, "teams"),
      where("teamUsernameLowerCase", "==", teamUsernameLowerCase),
    );

    const userNameSnapshot = await getDocs(userNameQuery);

    // Check if the username exist
    if (!userNameSnapshot.empty) {
      const customError = new Error("This team username is already taken.");
      (customError as any).code = "auth/username-already-in-use";
      throw customError;
    }

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      leaderEmail,
      password,
    );

    const user = userCredential.user;

    // Store the Team Username and the Team Leaders Mail in the firestore
    await setDoc(doc(db, "teams", user.uid), {
      uid: user.uid,
      teamUsername: teamUserName.trim(),
      teamUsernameLowerCase: teamUsernameLowerCase,
      leaderEmail: leaderEmail.trim(),
      createdAt: new Date().toISOString(),
    });

    // TODO : Get Other Team details too

    return user;
  } catch (error) {
    console.error("Firebase Auth Error in Service:", error);
    throw error;
  }
};

// Method to sign in with the team username and the password
// Retrieve the corresponding leader email from the db and sign in through that mail
export const signInWithUsername = async (
  teamUserName: string,
  password: string,
) => {
  try {
    const usernameQuery = query(
      collection(db, "teams"),
      where("teamUsernameLowerCase", "==", teamUserName.trim().toLowerCase()),
    );
    const usernameSnapshot = await getDocs(usernameQuery);

    if (usernameSnapshot.empty) {
      const customError = new Error("Team username not found.");
      (customError as any).code = "auth/username-not-found";
      throw customError;
    }

    const teamData = usernameSnapshot.docs[0].data();
    const leaderEmail = teamData.leaderEmail;

    const userCredential = await signInWithEmailAndPassword(
      auth,
      leaderEmail,
      password,
    );

    // TODO : Get Other Team details too

    return userCredential.user;
  } catch (error) {
    console.error("Firebase Auth Error in Service:", error);
    throw error;
  }
};

// Method to reset the password
export const resetTeamPassword = async (teamUserName: string) => {
  try {
    const usernameQuery = query(
      collection(db, "teams"),
      where("teamUsernameLowerCase", "==", teamUserName.trim().toLowerCase()),
    );
    const usernameSnapshot = await getDocs(usernameQuery);

    if (usernameSnapshot.empty) {
      const customError = new Error("Team username not found.");
      (customError as any).code = "auth/username-not-found";
      throw customError;
    }

    const leaderEmail = usernameSnapshot.docs[0].data().leaderEmail;

    // Send password reset email directly to the leader
    await sendPasswordResetEmail(auth, leaderEmail);

    // TODO: Change the Password Reset Template in firebase/auth/templates
    // ? BTW Password reset mails going to spam, have a look into that would ya
  } catch (error) {
    throw error;
  }
};

// Method to sign out
export const teamSignOut = async () => {
  await signOut(auth);
};
