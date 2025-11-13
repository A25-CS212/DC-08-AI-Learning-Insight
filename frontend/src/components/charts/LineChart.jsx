import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip } from 'chart.js';
import { useMemo } from 'react'; // <-- 1. Impor useMemo

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip);

export default function LineChart({ data }) {
  // 2. Bungkus semua 'options' di dalam useMemo
  const options = useMemo(() => ({
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: 'var(--color-chart-labels)', // Pakai Var CSS
          font: {
            weight: '600' // Semi-bold
          }
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'var(--color-chart-grid)' // Pakai Var CSS
        },
        ticks: {
          color: 'var(--color-chart-ticks)', // Pakai Var CSS
          font: {
            weight: '600' // Semi-bold
          }
        }
      },
      x: { // <-- Tambahkan styling untuk sumbu X
        grid: {
          color: 'var(--color-chart-grid)' // Pakai Var CSS
        },
        ticks: {
          color: 'var(--color-chart-ticks)', // Pakai Var CSS
          font: {
            weight: '600' // Semi-bold
          }
        }
      }
    }
    // 3. Array dependensi kosong: Buat 'options' ini sekali saja
  }), []);

  // Penjaga jika data belum siap
  if (!data) return null;

  return <Line data={data} options={options} />;
}