import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip } from 'chart.js';
import { useMemo } from 'react';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip);

export default function LineChart({ data }) {
  const options = useMemo(() => ({
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: 'var(--color-chart-labels)',
          font: {
            weight: '600'
          }
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'var(--color-chart-grid)'
        },
        ticks: {
          color: 'var(--color-chart-ticks)',
          font: {
            weight: '600'
          }
        }
      },
      x: {
        grid: {
          color: 'var(--color-chart-grid)'
        },
        ticks: {
          color: 'var(--color-chart-ticks)',
          font: {
            weight: '600'
          }
        }
      }
    }
  }), []);

  if (!data) return null;

  return <Line data={data} options={options} />;
}