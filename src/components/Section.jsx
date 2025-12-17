export default function Section({ title, children }) {
  return (
    <section style={{ marginBottom: "3rem" }}>
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
}
