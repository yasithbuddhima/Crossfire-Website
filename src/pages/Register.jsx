import { useState } from "react";
import { HandleTeamRegistration } from "../services/RegistrationServices";

const memberFields = [
  { key: "member1", label: "Member 1" },
  { key: "member2", label: "Member 2" },
  { key: "member3", label: "Member 3" },
  { key: "member4", label: "Member 4" },
];

const initialFormData = {
  teamUsername: "",
  password: "",
  leaderName: "",
  leaderEmail: "",
  leaderRegNo: "",
  leaderContact: "",
  member1Name: "",
  member1Email: "",
  member1RegNo: "",
  member1Contact: "",
  member2Name: "",
  member2Email: "",
  member2RegNo: "",
  member2Contact: "",
  member3Name: "",
  member3Email: "",
  member3RegNo: "",
  member3Contact: "",
  member4Name: "",
  member4Email: "",
  member4RegNo: "",
  member4Contact: "",
};

function Register() {
  const [formData, setFormData] = useState(initialFormData);
  const [slip, setSlip] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (!slip) {
      setError("Please upload the payment slip.");
      return;
    }

    setLoading(true);
    try {
      await HandleTeamRegistration({ ...formData, slip });
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setError("This email address is already registered.");
      } else if (err.code === "auth/weak-password") {
        setError("Password should be at least 6 characters.");
      } else if (err.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else if (err.code === "auth/username-already-in-use") {
        setError("This team name is already registered.");
      } else {
        setError(
          err.message || "Failed to register the team. Please try again.",
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const renderPersonFields = (prefix, label) => (
    <fieldset style={{ marginBottom: "1rem" }}>
      <legend>{label}</legend>
      <input
        name={`${prefix}Name`}
        placeholder="Full name"
        value={formData[`${prefix}Name`]}
        onChange={updateField}
        required
      />
      <input
        name={`${prefix}Email`}
        type="email"
        placeholder="Email"
        value={formData[`${prefix}Email`]}
        onChange={updateField}
        required
      />
      <input
        name={`${prefix}RegNo`}
        placeholder="Student registration number"
        value={formData[`${prefix}RegNo`]}
        onChange={updateField}
        required
      />
      <input
        name={`${prefix}Contact`}
        type="tel"
        placeholder="Contact number"
        value={formData[`${prefix}Contact`]}
        onChange={updateField}
        required
      />
    </fieldset>
  );

  return (
    <main style={{ maxWidth: "600px", margin: "2rem auto", padding: "1rem" }}>
      <h2>Register Team</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Team details</legend>
          <input
            name="teamUsername"
            placeholder="Team name"
            value={formData.teamUsername}
            onChange={updateField}
            required
          />
          <input
            name="password"
            type="password"
            minLength="6"
            placeholder="Password"
            value={formData.password}
            onChange={updateField}
            required
          />
        </fieldset>

        {renderPersonFields("leader", "Team leader")}
        {memberFields.map(({ key, label }) => renderPersonFields(key, label))}

        <label>
          Payment slip
          <input
            type="file"
            accept="image/*,.pdf"
            onChange={(event) => setSlip(event.target.files?.[0] || null)}
            required
          />
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register team"}
        </button>
      </form>
    </main>
  );
}

export default Register;
