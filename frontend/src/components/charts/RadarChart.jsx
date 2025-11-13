import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function RadarChart({ data }) {
  const options = {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: 'var(--color-chart-labels)'
        },
        font: {
          weight: '800'
        }
      },
    },
    scales: {
      r: {
        angleLines: {
          color: 'var(--color-chart-grid)'
        },
        grid: {
          color: 'var(--color-chart-grid)'
        },
        pointLabels: {
          color: 'var(--color-chart-labels)',
          font: {
            size: 12
          }
        },
        ticks: {
          backdropColor: 'transparent',
          color: 'var(--color-chart-ticks)'
        }
      }
    }
  };
  return <Radar data={data} options={options} />;
}