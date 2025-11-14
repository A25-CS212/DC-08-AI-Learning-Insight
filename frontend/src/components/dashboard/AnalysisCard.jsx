import { Info } from 'lucide-react';
import RadarChart from '../charts/RadarChart';
import { mockChartData } from '../../services/mockApi';
import { useTheme } from '../../hooks/useTheme';
import { useMemo } from 'react';
import { mlClusterData } from '../../services/mlClusterData';

export default function AnalysisCard() {
  const { theme } = useTheme();

  const clusterIdToShow = 0;

  const clusterInfo = mlClusterData.clusters.find(
    (cluster) => cluster.cluster_id === clusterIdToShow
  );

  const chartData = useMemo(() => {
    const colorLastWeek = theme === 'light' ? '#2D3E50' : '#FFFFFF';
    const colorThisWeek = '#1D4ED8';

    const fillLastWeek = theme === 'light'
      ? 'rgba(45, 62, 80, 0.5)'     // #2D3E50 @ 50%
      : 'rgba(250, 249, 246, 0.5)'; // #FAF9F6 @ 50%

    const fillThisWeek = 'rgba(29, 78, 216, 0.5)'; // #1D4ED8 @ 50%
    return {
      labels: mockChartData.radar.labels,
      datasets: [
        {
          label: 'Minggu Lalu',
          data: mockChartData.radar.datasets[0].data,
          borderColor: colorLastWeek,
          backgroundColor: fillLastWeek,
          borderWidth: 2,
        },
        {
          label: 'Minggu Ini',
          data: mockChartData.radar.datasets[1].data,
          borderColor: colorThisWeek,
          backgroundColor: fillThisWeek,
          borderWidth: 2,
        },
      ],
    };
  }, [theme]);

  return (
    <div className="rounded-xl bg-white p-6 shadow-md dark:bg-dark-background-card">
      <h3 className="mb-4 text-3xl font-bold text-dark-blue dark:text-white">
        Analisis Pola Belajar
      </h3>

      {/* Info Box */}
      <div className="mb-4 relative rounded-lg border-3 border-primary-blue p-3 dark:bg-dark-background-card/30">

        <div className="flex items-center gap-4">
          <div className="relative w-18 h-18 flex items-center justify-center rounded-full bg-[#EAF2FF] border-4 border-primary-blue">
            <img
              src="/icon-banner.png"
              alt="Icon Analisis"
              className="w-16 h-16 object-contain rounded-full"
            />
          </div>

          <div>
            <p className="font-bold text-2xl text-dark-blue dark:text-white">Anda adalah seorang {clusterInfo.label}</p>
            <p className="text-sm text-dark-blue dark:text-white">{clusterInfo.description}</p>
          </div>
        </div>

        {/* nanti ada info ketika di klik atau hover */}
        <Info className="absolute top-3 right-3 h-6 w-6 shrink-0 text-primary-blue"
          title="Info lebih lanjut tentang kategori"
        />
      </div>

      {/* Radar Chart */}
      <div className="w-full h-auto">
        <RadarChart data={chartData} />
      </div>
    </div>
  );
}