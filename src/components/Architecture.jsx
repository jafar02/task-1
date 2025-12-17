export default function Architecture() {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        src="/architecture.png"
        alt="Twin Health Architecture"
        style={{
          width: "70%",
          maxWidth: "800px",
          height: "auto",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      />
      <p style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
        High-level system architecture showing data ingestion, AI processing,
        digital twin modeling, and clinician feedback loop.
      </p>
    </div>
  );
}
