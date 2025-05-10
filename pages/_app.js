// pages/_app.js
import { ThemeProvider, useTheme } from '../context/ThemeContext';
import Header from '../components/Header';
import '../styles/globals.css';
import { useEffect } from 'react';

function AppWrapper({ Component, pageProps }) {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark' : 'light';
  }, [isDarkMode]);

  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default function App(props) {
  return (
    <ThemeProvider>
      <AppWrapper {...props} />
    </ThemeProvider>
  );
}
