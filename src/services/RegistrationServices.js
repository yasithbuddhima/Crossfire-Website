import { doc, setDoc } from "firebase/firestore";
import { Team } from "../models/Team";
import { registerTeam } from "./auth";
import { db } from "../firebase";

export async function HandleTeamRegistration(formData) {
  if (!(formData.slip instanceof File)) {
    throw new Error("A payment slip is required.");
  }

  // Sign in using team leaders credentias and save team deatils to teams data
  const user = await registerTeam(
    formData.teamUsername,
    formData.leaderEmail,
    formData.password,
  );

  const teamID = user.uid;

  // TODO: Upload the slip to supabase
  // get paymentSlipURL

  // Create a new Team
  const teamInstance = Team.fromFormState(formData, teamID);
  //   teamInstance.paymentSlipURL = paymentSlipURL;

  await setDoc(doc(db, "teamData", teamID), teamInstance.toJSON());
  return teamInstance;
}
