import React, { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

const InteractiveCharts = () => {
  const [activeSection, setActiveSection] = useState('survey'); // 'survey' or 'comparison'

  const surveyData = {
    labels: ['Option A', 'Option B', 'Option C'],
    datasets: [{
      label: 'Survey Votes',
      data: [12, 19, 7],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }]
  };

  const comparisonData = {
    labels: ['Metric 1', 'Metric 2', 'Metric 3', 'Metric 4'],
    datasets: [
      {
        label: 'Competitor A',
        data: [5, 9, 7, 14],
        borderColor: '#36A2EB',
        fill: false,
        tension: 0.2
      },
      {
        label: 'Competitor B',
        data: [8, 6, 12, 10],
        borderColor: '#FF6384',
        fill: false,
        tension: 0.2
      }
    ]
  };

  const buttonStyle = {
    padding: '10px 20px',
    marginRight: '10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#4CAF50',
    color: 'white',
    cursor: 'pointer'
  };

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <button style={buttonStyle} onClick={() => setActiveSection('survey')}>Survey</button>
        <button style={buttonStyle} onClick={() => setActiveSection('comparison')}>Comparison</button>
      </div>

      {activeSection === 'survey' && (
        <div>
          <h3>Survey Results</h3>
          <Bar data={surveyData} />
        </div>
      )}

      {activeSection === 'comparison' && (
        <div>
          <h3>Comparison Chart</h3>
          <Line data={comparisonData} />
        </div>
      )}
    </div>
  );
};

export default InteractiveCharts;
