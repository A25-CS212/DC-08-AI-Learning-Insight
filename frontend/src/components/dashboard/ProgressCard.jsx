import LineChart from '../charts/LineChart';
import { mockChartData } from '../../services/mockApi';
import { useTheme } from '../../hooks/useTheme';
import { useLocalization } from '../../hooks/useLocalization';
import { useMemo } from 'react';

export default function ProgressCard() {
  const { theme } = useTheme();
  const { t } = useLocalization();

  const chartData = useMemo(() => {
    const colorLastWeek = theme === 'light' ? '#2D3E50' : '#FFFFFF';
    const colorThisWeek = '#1D4ED8';

    if (!mockChartData || !mockChartData.line) return null;

    const translatedLabels = [
      t.dashboard.lineLabels.monday,
      t.dashboard.lineLabels.tuesday,
      t.dashboard.lineLabels.wednesday,
      t.dashboard.lineLabels.thursday,
      t.dashboard.lineLabels.friday,
      t.dashboard.lineLabels.saturday,
      t.dashboard.lineLabels.sunday,
    ];

    return {
      labels: translatedLabels,
      datasets: [
        {
          label: t.dashboard.lastWeek,
          data: mockChartData.line.datasets[0].data,
          borderColor: colorLastWeek,
          borderWidth: 2,
          fill: false,
        },
        {
          label: t.dashboard.thisWeek,
          data: mockChartData.line.datasets[1].data,
          borderColor: colorThisWeek,
          borderWidth: 2,
          fill: false,
        },
      ],
    };
  }, [theme, t]);

  return (
    <div className="rounded-xl bg-white p-6 shadow-md dark:bg-dark-background-card">
      <h3 className="mb-4 text-3xl font-bold text-dark-blue dark:text-white">Progress</h3>
      <div className="w-full h-auto">
        <LineChart data={chartData} />
      </div>
    </div>
  );
}