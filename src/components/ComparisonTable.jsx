import React from "react";

const competitors = [
  {
    company: "Twin Health",
    focus: "Metabolic health & diabetes reversal",
    features: "Whole-body digital twin, AI-driven personalization, CGM integration",
    strength: "Highly personalized, clinically validated outcomes",
    weakness: "Premium pricing, requires CGM devices"
  },
  {
    company: "Sugar.fit (India)",
    focus: "Diabetes management & reversal",
    features: "CGM-based insights, nutrition coaching, fitness & doctor support",
    strength: "India-focused care model, lifestyle-driven",
    weakness: "Limited deep AI modeling vs Twin Health"
  },
  {
    company: "BeatO (India)",
    focus: "Diabetes management ecosystem",
    features: "Smart glucometers, app tracking, medicine delivery, coaching",
    strength: "Strong hardware + service integration",
    weakness: "Primarily management, not true reversal"
  },
  {
    company: "Fitterfly (India)",
    focus: "Digital therapeutics for diabetes",
    features: "Personalized programs, nutrition & behavior coaching",
    strength: "Clinically backed programs, affordable",
    weakness: "No digital twin or advanced AI layer"
  },
  {
    company: "HealthifyMe (India)",
    focus: "Nutrition & weight management",
    features: "Calorie tracking, AI coach, fitness plans",
    strength: "Large user base, strong food database",
    weakness: "Not diabetes-specific"
  },
  {
    company: "Ultrahuman (India)",
    focus: "Metabolic & glucose tracking",
    features: "CGM-based metabolic insights, wearable integration",
    strength: "Advanced real-time glucose analytics",
    weakness: "More wellness-focused than clinical"
  },
  {
    company: "Virta Health",
    focus: "Type-2 diabetes reversal",
    features: "Remote care, nutrition-based intervention, coaching",
    strength: "Strong clinical evidence",
    weakness: "Strict program adherence required"
  },
  {
    company: "Livongo (Teladoc)",
    focus: "Diabetes & chronic care",
    features: "Connected devices, coaching, analytics",
    strength: "Large enterprise adoption",
    weakness: "Focuses on monitoring, not reversal"
  },
  {
    company: "Dexcom",
    focus: "Continuous glucose monitoring",
    features: "Real-time CGM devices",
    strength: "Highly accurate glucose data",
    weakness: "Not a care or treatment platform"
  },
  {
    company: "Abbott (FreeStyle Libre)",
    focus: "Medical devices & CGM",
    features: "Widely used CGM sensors",
    strength: "Reliable, scalable device ecosystem",
    weakness: "Requires third-party care programs"
  }
];

const CompetitorTable = () => {
  return (
    <div style={{ overflowX: "auto" }}>
      <table
        className="comparison-table"
        style={{ minWidth: "1000px", borderCollapse: "collapse" }}
      >
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
