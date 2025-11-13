import LineChart from '../charts/LineChart';
import { mockChartData } from '../../services/mockApi';
import { useTheme } from '../../hooks/useTheme'; // <-- 1. Impor hook tema
import { useMemo } from 'react'; // <-- 2. Impor useMemo

export default function ProgressCard() {
  const { theme } = useTheme(); // <-- 3. Dapatkan tema

  // 4. Bungkus logika data/warna di dalam useMemo
  const chartData = useMemo(() => {
    // Tentukan warna dinamis (sesuai UI Anda)
    const colorLastWeek = theme === 'light' ? '#2D3E50' : '#FFFFFF';
    const colorThisWeek = '#1D4ED8';

    // Penjaga jika data mock belum dimuat
    if (!mockChartData || !mockChartData.line) return null;

    // 5. Kembalikan objek data yang sudah diwarnai
    return {
      labels: mockChartData.line.labels,
      datasets: [
        {
          label: 'Minggu Lalu',
          data: mockChartData.line.datasets[0].data,
          borderColor: colorLastWeek, // Terapkan warna
          borderWidth: 2,
          fill: false,
        },
        {
          label: 'Minggu Ini',
          data: mockChartData.line.datasets[1].data,
          borderColor: colorThisWeek, // Terapkan warna
          borderWidth: 2,
          fill: false,
        },
      ],
    };
    // 6. Data ini HANYA akan dibuat ulang jika 'theme' berubah
  }, [theme]);

  return (
    <div className="rounded-xl bg-white p-6 shadow-md dark:bg-dark-background-card">
      <h3 className="mb-4 text-3xl font-bold text-dark-blue dark:text-white">Progress</h3>
      <div className="w-full h-auto">
        {/* 7. Kirim data yang sudah stabil */}
        <LineChart data={chartData} />
      </div>
    </div>
  );
}