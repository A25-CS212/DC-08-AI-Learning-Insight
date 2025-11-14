import { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import { translationsID } from '../locales/id.js';
import { translationsEN } from '../locales/en.js';

export const useLocalization = () => {
  const { lang, toggleLang } = useContext(LanguageContext);

  const t = lang === 'ID' ? translationsID : translationsEN;

  // 't' (terjemahan), 'lang' (untuk Intl), dan 'toggleLang'
  return { t, lang, toggleLang };
};