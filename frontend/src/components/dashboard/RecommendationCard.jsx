import { Goal } from 'lucide-react';

export default function RecommendationCard() {
  // Nanti urus data rekomendasi
  const recommendations = [
    { text: 'Coba mulai modul berikutnya dalam 24 jam setelah menyelesaikan kuis ABC' },
    { text: 'Coba mulai modul berikutnya dalam 24 jam setelah menyelesaikan kuis ABC' },
    { text: 'Coba mulai modul berikutnya dalam 24 jam setelah menyelesaikan kuis ABC' },
  ];

  return (
    <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
      <h3 className="mb-4 text-3xl font-bold text-dark-blue dark:text-white">Rekomendasi</h3>
      <ul className="space-y-3">
        {recommendations.map((item, index) => (
          <li key={index} className="flex items-center gap-3 rounded-lg bg-blue-600 p-4 text-white shadow hover:bg-blue-700">
            <Goal className="h-6 w-6 shrink-0" />
            <span className="text-sm font-medium">{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}