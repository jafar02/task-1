import Section from "./components/Section";
import ComparisonTable from "./components/ComparisonTable";
import Architecture from "./components/Architecture";
import InteractiveCharts from "./components/InteractiveCharts";

function App() {
  return (
    <div>
      <h1>Twin Health – Competitor & Technical Analysis</h1>

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
      <strong>Data Ingestion:</strong> Wearables, CGM devices, and user inputs
      stream data via secure APIs.
    </li>
    <li>
      <strong>Backend Services:</strong> Microservices handle data validation,
      normalization, and storage.
    </li>
    <li>
      <strong>AI / ML Layer:</strong> Models simulate metabolic responses using
      a personalized digital twin.
    </li>
    <li>
      <strong>Recommendation Engine:</strong> Outputs actionable lifestyle and
      nutrition guidance.
    </li>
    <li>
      <strong>Clinician Dashboard:</strong> Doctors monitor progress and adjust
      care plans.
    </li>
  </ul>
</Section>

<Section title="Validation & Evidence">
  <ul>
    <li>
      Clinical studies show AI-based metabolic programs improve Type-2 diabetes outcomes.
    </li>
    <li>
      Twin Health has partnerships with hospitals and research institutions.
    </li>
    <li>
      Real-world patient data demonstrates improved HbA1c levels and personalized nutrition effectiveness.
    </li>
    <li>
      Ongoing trials ensure continuous validation of algorithms and recommendations.
    </li>
  </ul>
</Section>

<Section title="Interactive Analysis">
  <InteractiveCharts />
</Section>

      <Section title="Conclusion">
        <p>
          Twin Health differentiates itself by combining clinical care with
          AI-driven physiological modeling rather than generic coaching
          approaches.
        </p>
      </Section>
    </div>
  );
}

export default App;
