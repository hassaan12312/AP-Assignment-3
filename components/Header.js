// components/Header.js
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header style={{
      display: 'flex',
      justifyContent: 'flex-end',
      padding: '1rem',
      background: isDarkMode ? '#1e1e1e' : '#f2f2f2',
    }}>
      <button onClick={toggleTheme}>
        {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>
    </header>
  );
}
