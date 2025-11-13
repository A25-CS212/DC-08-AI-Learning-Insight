import { Globe, Moon, LogOut, Sun, User } from 'lucide-react';
import { useAuth } from './../../hooks/useAuth';
import { useTheme } from './../../hooks/useTheme';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar({ variant = 'public' }) {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const isPrivate = variant === 'private';

  return (
    <nav className={`flex items-center p-4 transition-colors duration-300
                  ${isPrivate ? 'justify-between' : 'justify-end'} 
                  bg-white-smoke dark:bg-dark-background 
                  border-b border-gray-200 dark:border-gray-700 shadow-md`}>
      {isPrivate && (
        // Nama dan avatar
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 p-3 rounded-[10px]
                   bg-gray-50 dark:bg-dark-background-card
                   hover:bg-gray-100 dark:hover:bg-gray-600
                   transition-colors duration-200
                   shadow-[4px_0px_4px_0px_#2D3E5040,0px_4px_4px_0px_#2D3E5040]"
          >

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700">
              <User size={20} className="text-gray-600 dark:text-gray-300" />
            </div>

            <span className="font-semibold text-gray-900 dark:text-white">
              {user?.name || 'Pengguna'}
            </span>
          </div>
        </div>
      )}

      <div className="flex items-center gap-2">
        <LanguageSwitcher />

        <button
          onClick={toggleTheme}
          className="p-2 rounded-full"
        >
          {theme === 'dark' ? (
            <Sun size={20} className="text-[#FFBE18]"/>
          ) : (
            <Moon size={20} className="text-primary-blue"/>
          )}
        </button>

        {isPrivate && (
          <button
            onClick={logout}
            className="p-2 rounded-full text-red-500 hover:text-red-300 dark:hover:text-red-900"
          >
            <LogOut size={20} />
          </button>
        )}
      </div>
    </nav>
  );
}