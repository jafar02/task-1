import { competitors } from "../data/competitors";

export default function ComparisonTable() {
  return (
    <table border="1" cellPadding="8" width="100%">
      <thead>
        <tr>
          <th>Company</th>
          <th>AI Digital Twin</th>
          <th>Clinical Evidence</th>
          <th>Primary Focus</th>
        </tr>
      </thead>
      <tbody>
        {competitors.map((c) => (
          <tr key={c.name}>
            <td>{c.name}</td>
            <td>{c.aiTwin}</td>
            <td>{c.clinical}</td>
            <td>{c.focus}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
