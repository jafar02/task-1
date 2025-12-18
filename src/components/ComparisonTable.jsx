import React from "react";

const competitors = [
  { company: "Twin Health", focus: "Metabolic health & diabetes reversal", features: "Whole-body digital twin, AI-powered personalized care, CGM integration", strength: "Personalized, data-driven, clinically validated", weakness: "Niche, may require wearable/CGM devices" },
  { company: "Virta Health", focus: "Type-2 diabetes reversal", features: "Remote care, nutritional intervention, continuous monitoring", strength: "Proven diabetes reversal, strong clinical support", weakness: "High program commitment, subscription-based" },
  { company: "Omada Health", focus: "Chronic condition management", features: "Digital program, behavior change, remote coaching", strength: "Multi-condition, scalable", weakness: "Less personalized than Twin Health digital twin" },
  { company: "Noom", focus: "Weight management & pre-diabetes", features: "Psychology-based coaching, tracking, app engagement", strength: "Popular app, user-friendly, behavior-focused", weakness: "Limited clinical validation for diabetes reversal" },
  { company: "Livongo (Teladoc)", focus: "Diabetes & chronic care", features: "Remote monitoring devices, coaching, data analytics", strength: "Established brand, large patient base", weakness: "Focus on monitoring rather than reversal" },
  { company: "Glooko", focus: "Diabetes & health data platform", features: "Device integration, analytics for clinicians", strength: "Strong device/data ecosystem", weakness: "Limited patient-facing interventions" },
  { company: "Dexcom", focus: "CGM & metabolic monitoring", features: "Continuous glucose monitoring devices", strength: "Accurate real-time data", weakness: "Not a full care program" },
  { company: "Abbott", focus: "Medical devices", features: "CGM and wearable devices", strength: "Device reliability", weakness: "Requires integration with programs" },
  { company: "Unlearn", focus: "AI for clinical trials", features: "Digital twin simulation for research", strength: "Innovative AI approach", weakness: "Not patient-facing" },
  { company: "Q Bio", focus: "Biometric digital twin", features: "Whole-body scans & AI health modeling", strength: "Comprehensive data model", weakness: "Broad health focus, less disease-specific" },
  { company: "Included Health", focus: "AI personal health assistant", features: "Telehealth and guidance", strength: "AI-driven guidance", weakness: "Not specialized in metabolic care" },
  { company: "Dacadoo", focus: "Health engagement & analytics", features: "Risk scores, behavior tracking", strength: "Gamified engagement", weakness: "Not clinically specialized" },
];

const CompetitorTable = () => {
  return (
    <div style={{ overflowX: "auto" }}>
      <table className="comparison-table" style={{ minWidth: "900px" }}>
        <thead>
          <tr>
            <th className="dark-header">Company</th>
            <th className="dark-header">Focus Area</th>
            <th className="dark-header">Approach / Features</th>
            <th className="dark-header">Strength</th>
            <th className="dark-header">Weakness</th>
          </tr>
        </thead>

        <tbody>
          {competitors.map((c, index) => (
            <tr key={index}>
              <td>{c.company}</td>
              <td>{c.focus}</td>
              <td>{c.features}</td>
              <td>{c.strength}</td>
              <td>{c.weakness}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompetitorTable;
