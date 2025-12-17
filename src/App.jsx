import Section from "./components/Section";
import ComparisonTable from "./components/ComparisonTable";
import Architecture from "./components/Architecture";


function App() {
  return (
    <div style={styles.app}>
      {/* HEADER */}
      <header style={styles.header}>
        <h1>Twin Health Analysis Dashboard</h1>
        <p>AI-driven metabolic care – competitor & technical insights</p>
      </header>

      {/* SUMMARY CARDS */}
      <div style={styles.cardGrid}>
        <div style={styles.infoCard}>
          <h3>🎯 Problem</h3>
          <p>Traditional programs ignore individual metabolic differences</p>
        </div>

        <div style={styles.infoCard}>
          <h3>🧠 Solution</h3>
          <p>Whole-body AI digital twins for personalized care</p>
        </div>

        <div style={styles.infoCard}>
          <h3>📈 Outcome</h3>
          <p>Clinically validated metabolic health improvement</p>
        </div>
      </div>

      {/* CONTENT */}
      <main style={styles.container}>
        <Section title="Problem Statement">
          <p>
            Chronic metabolic conditions such as Type-2 diabetes are rising
            globally. Traditional programs provide generic lifestyle advice that
            fails to account for individual metabolic differences.
          </p>
        </Section>

        <Section title="What is Twin Health">
          <p>
            Twin Health is a digital health platform that uses AI-powered
            whole-body digital twins to deliver personalized metabolic care.
          </p>
        </Section>

        <Section title="Why Twin Health is Unique">
          <ul>
            <li>Whole-body physiological digital twin</li>
            <li>Real-time personalization using wearable and CGM data</li>
            <li>Clinically validated outcomes</li>
          </ul>
        </Section>

       

        <Section title="Competitor Comparison">
          <ComparisonTable />
        </Section>

        <Section title="System Architecture">
          <Architecture />
        </Section>

        <Section title="Technical Deep Dive">
          <ul>
            <li>
              <strong>Data Ingestion:</strong> Wearables, CGM devices, and user
              inputs stream data via secure APIs.
            </li>
            <li>
              <strong>Backend Services:</strong> Microservices handle data
              validation, normalization, and storage.
            </li>
            <li>
              <strong>AI / ML Layer:</strong> Personalized metabolic simulation
              models.
            </li>
            <li>
              <strong>Recommendation Engine:</strong> Actionable lifestyle and
              nutrition guidance.
            </li>
            <li>
              <strong>Clinician Dashboard:</strong> Doctors monitor and optimize
              care plans.
            </li>
          </ul>
        </Section>

        <Section title="Validation & Evidence">
          <ul>
            <li>Clinically proven improvements in Type-2 diabetes outcomes</li>
            <li>Hospital and research institution partnerships</li>
            <li>Improved HbA1c and personalized nutrition effectiveness</li>
            <li>Continuous algorithm validation through real-world data</li>
          </ul>
        </Section>

        <Section title="Conclusion">
          <p>
            Twin Health differentiates itself by combining clinical care with
            AI-driven physiological modeling rather than generic coaching
            approaches.
          </p>
        </Section>
      </main>
    </div>
  );
}

/* 🎨 STYLES */
const styles = {
  app: {
    backgroundColor: "#F3F4F6",
    minHeight: "100vh",
    fontFamily: "Inter, system-ui, sans-serif",
  },
  header: {
    background: "linear-gradient(135deg, #4F46E5, #22C55E)",
    color: "white",
    padding: "50px 20px",
    textAlign: "center",
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    padding: "30px 20px",
  },
  infoCard: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "20px",
  },
};

export default App;
