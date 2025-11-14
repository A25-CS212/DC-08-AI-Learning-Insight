import { useState, useEffect, useRef } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useLocalization } from '../../hooks/useLocalization';

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, toggleLang } = useLocalization();
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  const selectLang = (selected) => {
    if (lang !== selected) {
      toggleLang();
    }
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={wrapperRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 p-2 rounded-lg
                   transition-colors duration-200"
      >
        <Globe size={20} className="text-primary-blue" />
        <span className="font-semibold text-sm text-primary-blue">
          {lang}
        </span>
        <ChevronDown
          size={16}
          className={`text-gray-600 dark:text-gray-400 
                      transition-transform duration-200 
                      ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown */}
      <div
        className={`absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 
                    rounded-lg shadow-xl overflow-hidden z-10 
                    transition-all duration-200 ease-out
                    ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <ul className="py-1">
          <li>
            <button
              onClick={() => selectLang('ID')}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200
                         hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="font-bold">ID</span> - Indonesia
            </button>
          </li>
          <li>
            <button
              onClick={() => selectLang('EN')}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200
                         hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="font-bold">EN</span> - English
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}