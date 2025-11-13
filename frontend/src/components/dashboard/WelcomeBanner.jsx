import { useAuth } from '../../hooks/useAuth';
import { Calendar } from 'lucide-react';

export default function WelcomeBanner() {
  const { user } = useAuth();
  const now = new Date();

  const dateOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };
  const formattedDay = new Intl.DateTimeFormat('en-US', dateOptions).format(now);
  const timeOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  };
  const formattedTime = new Intl.DateTimeFormat('en-US', timeOptions).format(now).toLowerCase();
  const dynamicDate = `${formattedDay} ${formattedTime}`;

  return (
    <div className="flex items-center justify-between rounded-xl bg-primary-blue p-8 text-white shadow-md">

      <div className="flex flex-col justify-between self-stretch">
        <div className="self-start inline-flex items-center gap-2 rounded-lg bg-white px-3 py-1.5 text-sm font-semibold text-blue-800 shadow">
          <Calendar size={16} />
          <span>{dynamicDate}</span>
        </div>

        <div>
          <h2 className="text-5xl font-bold">Halo, {user?.name || 'Pengguna'}</h2>
          <p className="mt-1 text-white">Lorem ipsum is simply dummy text</p>
        </div>
      </div>

      <div className="relative h-[148px] flex items-center justify-end">
        <img
          src="/image-banner.png"
          alt="Ilustrasi Dashboard"
          className="h-[180px] md:h-[220px] lg:h-[200px] object-contain"
        />
      </div>

    </div>
  );
}