import { Scale, TrendingUp, TrendingDown } from 'lucide-react';

const iconMap = {
  positive: (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-500">
      <TrendingUp className="h-6 w-6 text-white" />
    </div>
  ),
  neutral: (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600">
      <Scale className="h-6 w-6 text-white" />
    </div>
  ),
  negative: (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-600">
      <TrendingDown className="h-6 w-6 text-white" />
    </div>
  ),
};

export default function FeedbackCard() {
  // Nanti ganti
  const feedbacks = [
    { type: 'neutral', text: 'Ada peningkatan besar pada Consistency Score dan Completion Score. Pola belajar Anda semakin teratur dan efisien. (10 data)' },
    { type: 'positive', text: 'Ada peningkatan besar pada Consistency Score dan Completion Score. Pola belajar Anda semakin teratur dan efisien. (MENINGKAT)' },
    { type: 'negative', text: 'Ada peningkatan besar pada Consistency Score dan Completion Score. Pola belajar Anda semakin teratur dan efisien. (MENURUN)' },
  ];

  return (
    <div className="rounded-xl bg-white p-6 shadow-md dark:bg-dark-background-card">
      <h3 className="mb-4 text-3xl font-bold text-dark-blue dark:text-white">Feedback</h3>

      <ul className="space-y-4">
        {feedbacks.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-4 rounded-xl bg-gray-50 p-4 shadow-sm dark:bg-gray-800"
          >
            {iconMap[item.type]}

            <span className="text-sm text-gray-700 dark:text-gray-300">{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}