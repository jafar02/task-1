import { useState } from "react";

export default function DigitalTwinDemo() {
  const [food, setFood] = useState("Rice");
  const [steps, setSteps] = useState(2000);
  const [sleep, setSleep] = useState(6);
  const [glucose, setGlucose] = useState(null);

  const simulateTwin = () => {
    let base = 110;
    if (food === "Rice") base += 35;
    if (food === "Salad") base -= 10;
    if (steps > 5000) base -= 15;
    if (sleep < 6) base += 10;
    setGlucose(base);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.title}>Digital Twin – Metabolism Simulator</h2>
        <p style={styles.desc}>
          This demo shows how a digital twin predicts glucose response
          using lifestyle inputs.
        </p>

        <div style={styles.field}>
          <label>Food Type</label>
          <select value={food} onChange={(e) => setFood(e.target.value)}>
            <option>Rice</option>
            <option>Salad</option>
            <option>Protein-rich meal</option>
          </select>
        </div>

        <div style={styles.field}>
          <label>Daily Steps</label>
          <input
            type="number"
            value={steps}
            onChange={(e) => setSteps(Number(e.target.value))}
          />
        </div>

        <div style={styles.field}>
          <label>Sleep Hours</label>
          <input
            type="number"
            value={sleep}
            onChange={(e) => setSleep(Number(e.target.value))}
          />
        </div>

        <button style={styles.button} onClick={simulateTwin}>
          Predict Glucose Response
        </button>

        {glucose && (
          <div style={styles.result}>
            <p>Predicted Blood Glucose</p>
            <h3>{glucose} mg/dL</h3>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    marginTop: "30px",
  },
  card: {
    background: "#fff",
    padding: "24px",
    borderRadius: "12px",
    maxWidth: "420px",
    width: "100%",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  },
  title: { marginBottom: "8px" },
  desc: { fontSize: "14px", color: "#555", marginBottom: "16px" },
  field: { display: "flex", flexDirection: "column", marginBottom: "12px" },
  button: {
    padding: "10px",
    background: "#4F46E5",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  result: {
    marginTop: "16px",
    background: "#F3F4F6",
    padding: "12px",
    borderRadius: "8px",
    textAlign: "center",
  },
};
