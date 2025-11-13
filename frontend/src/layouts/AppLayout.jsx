import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-white-smoke dark:bg-dark-background">
      <Navbar variant="private" />
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}