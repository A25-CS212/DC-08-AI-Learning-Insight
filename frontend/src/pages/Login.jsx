import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import Header from '../components/common/Navbar';
import { Eye, EyeOff } from 'lucide-react';
import { useLocalization } from '../hooks/useLocalization';

export default function Login() {
  const [email, setEmail] = useState('lorem@gmail.com');
  const [password, setPassword] = useState('password');
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const { t } = useLocalization();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="flex h-screen w-full flex-col bg-white-smoke dark:bg-dark-background">
      <Header variant="public" />

      {/* Login Content */}
      <main className="flex flex-1 items-center justify-center">
        <form
          onSubmit={handleSubmit}
          // className="w-full max-w-sm rounded-xl bg-white p-8 shadow-lg dark:bg-dark-background-card"
          className="w-full max-w-sm rounded-xl"
        >
          <h1 className="mb-16 text-center text-4xl font-bold text-dark-blue dark:text-white">
            {t.login.title}
          </h1>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-dark-blue dark:text-white"
            >
              {t.login.email}
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-dark-blue p-3 text-dark-blue shadow-sm focus:border-primary-blue focus:ring-primary-blue dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="mb-1 block text-sm font-medium text-dark-blue dark:text-white"
            >
              {t.login.password}
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md border border-dark-blue p-3 text-dark-blue shadow-sm focus:border-primary-blue focus:ring-primary-blue dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-dark-blue hover:text-gray-600 dark:text-white dark:hover:text-gray-300"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="mb-6 flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-primary-blue focus:ring-primary-blue"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-900 dark:text-gray-300"
            >
              {t.login.remember}
            </label>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full rounded-md bg-primary-blue p-3 text-white shadow-md hover:bg-dark-blue focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {t.login.button}
          </button>
        </form>
      </main>
    </div>
  );
}