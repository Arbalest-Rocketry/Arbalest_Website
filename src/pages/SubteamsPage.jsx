import "./Subteams.css";
import Footer from "../Footer";

// Team structure. Edit the lists below to change the chart.
const executives = {
  top: "President",
  second: ["Vice President", "Treasurer"],
};

const subteams = [
  { name: "Business", color: "#b7f34a", leads: ["Business"] },
  {
    name: "Electrical",
    color: "#6b7bff",
    leads: ["Avionics", "Ground Station", "Imaging"],
  },
  {
    name: "Mechanical",
    color: "#3fe0e8",
    leads: ["Aerostructure", "Composites", "Launch Rail"],
  },
  {
    name: "Propulsion",
    color: "#ff3b3b",
    leads: ["Propulsion", "Vehicle Integration", "Fluid Systems", "Test Stand"],
  },
  {
    name: "Payload",
    color: "#c58cff",
    leads: [
      "Payload Electrical",
      "Science",
      "Engineering",
      "Software",
    ],
  },
];

const memberTiers = ["Senior Members", "General Members"];

export default function SubteamsPage() {
  return (
    <>
      <section className="structure">
        <h1 className="structure-title">Team Structure</h1>

        <div className="org-chart">
          {/* Executives */}
          <div className="org-exec">
            <div className="org-exec-box org-exec-top">{executives.top}</div>
            <div className="org-line" aria-hidden="true" />
            <div className="org-exec-row">
              {executives.second.map((role) => (
                <div key={role} className="org-exec-box">
                  {role}
                </div>
              ))}
            </div>
            <div className="org-line" aria-hidden="true" />
          </div>

          {/* Subteams and their leads */}
          <div className="org-teams">
            {subteams.map((team) => (
              <div
                key={team.name}
                className="org-team"
                style={{ "--team-color": team.color }}
              >
                <h2 className="org-team-name">{team.name}</h2>
                <ul className="org-leads">
                  {team.leads.map((lead) => (
                    <li key={lead}>{lead}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Members across every subteam */}
          <div className="org-members">
            {memberTiers.map((tier) => (
              <div key={tier} className="org-member-tier">
                {tier}
              </div>
            ))}
            <p className="org-members-note">Members join any subteam above.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
