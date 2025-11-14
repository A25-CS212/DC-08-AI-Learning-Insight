import LineChart from '../charts/LineChart';
import { mockChartData } from '../../services/mockApi';
import { useTheme } from '../../hooks/useTheme';
import { useMemo } from 'react';

export default function ProgressCard() {
  const { theme } = useTheme();

  const chartData = useMemo(() => {
    const colorLastWeek = theme === 'light' ? '#2D3E50' : '#FFFFFF';
    const colorThisWeek = '#1D4ED8';

    if (!mockChartData || !mockChartData.line) return null;

    return {
      labels: mockChartData.line.labels,
      datasets: [
        {
          label: 'Minggu Lalu',
          data: mockChartData.line.datasets[0].data,
          borderColor: colorLastWeek,
          borderWidth: 2,
          fill: false,
        },
        {
          label: 'Minggu Ini',
          data: mockChartData.line.datasets[1].data,
          borderColor: colorThisWeek,
          borderWidth: 2,
          fill: false,
        },
      ],
    };
  }, [theme]);

  return (
    <div className="rounded-xl bg-white p-6 shadow-md dark:bg-dark-background-card">
      <h3 className="mb-4 text-3xl font-bold text-dark-blue dark:text-white">Progress</h3>
      <div className="w-full h-auto">
        <LineChart data={chartData} />
      </div>
    </div>
  );
}