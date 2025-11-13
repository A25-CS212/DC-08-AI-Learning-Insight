// Data ini bisa didapatkan dari hook useFetch nanti
export const mockChartData = {
  radar: {
    labels: ['Learning Speed', 'Completion Score', 'Consistency Score', 'Persistence Score', 'Activity Score'],
    datasets: [
      {
        label: 'Minggu Lalu',
        data: [65, 59, 90, 81, 56],
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: '#3B82F6',
      },
      {
        label: 'Minggu Ini',
        data: [28, 48, 40, 19, 96],
        backgroundColor: 'rgba(29, 78, 216, 0.2)',
        borderColor: '#1D4ED8',
      },
    ],
  },
  line: {
    labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'],
    datasets: [
      {
        label: 'Minggu Lalu',
        data: [4, 6, 3, 5, 2, 6, 4],
        borderColor: '#3B82F6',
      },
      {
        label: 'Minggu Ini',
        data: [5, 4, 6, 8, 5, 7, 8],
        borderColor: '#1D4ED8',
      },
    ],
  },
};