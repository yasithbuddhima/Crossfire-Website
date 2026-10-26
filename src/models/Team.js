export class Team {
  constructor({
    teamId = null,
    teamUsername = "",
    leaderName = "",
    leaderEmail = "",
    leaderRegNo = "",
    leaderContact = "",
    players = [],
    paymentStatus = "pending",
    paymentSlipURL = "",
    createdAt = new Date().toISOString(),
  }) {
    this.teamId = teamId;
    this.teamUsername = teamUsername;
    this.leader = {
      name: leaderName,
      email: leaderEmail,
      regNo: leaderRegNo,
      contact: leaderContact,
    };
    this.players = players;
    this.paymentStatus = paymentStatus;
    this.paymentSlipURL = paymentSlipURL;
    this.createdAt = createdAt;
  }

  //   Convert to JSON
  //   To upload to Firebase/firestore
  toJSON() {
    return {
      teamId: this.teamId,
      teamUsername: this.teamUsername,
      leader: this.leader,
      players: this.players,
      paymentStatus: this.paymentStatus,
      paymentSlipURL: this.paymentSlipURL,
      createdAt: this.createdAt,
    };
  }

  //   Convert from JSON / Firebase doc to Team
  static fromJSON(docId, data) {
    return new Team({
      teamId: docId,
      teamUsername: data.teamUsername || "",
      leaderName: data.leader?.name || "",
      leaderEmail: data.leader?.email || "",
      leaderRegNo: data.leader?.regNo || "",
      leaderContact: data.leader?.contact || "",
      players: data.players || [],
      paymentStatus: data.paymentStatus || "pending",
      paymentSlipURL: data.paymentSlipURL || "",
      createdAt: data.createdAt || "",
    });
  }

  //   Method to create a new Team from a form state
  static fromFormState(state, teamId = null) {
    const members = [
      {
        name: state.member1Name,
        email: state.member1Email,
        regNo: state.member1RegNo,
        contact: state.member1Contact,
      },
      {
        name: state.member2Name,
        email: state.member2Email,
        regNo: state.member2RegNo,
        contact: state.member2Contact,
      },
      {
        name: state.member3Name,
        email: state.member3Email,
        regNo: state.member3RegNo,
        contact: state.member3Contact,
      },
      {
        name: state.member4Name,
        email: state.member4Email,
        regNo: state.member4RegNo,
        contact: state.member4Contact,
      },
    ];

    return new Team({
      teamId,
      teamUsername: state.teamUsername,
      leaderName: state.leaderName,
      leaderEmail: state.leaderEmail,
      leaderRegNo: state.leaderRegNo,
      leaderContact: state.leaderContact,
      players: members,
    });
  }
}
