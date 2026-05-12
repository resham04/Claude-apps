import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function getInitialTheme() {
  const stored = localStorage.getItem('theme');
  if (stored === 'dark' || stored === 'light') return stored;
  if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
  return 'light';
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  function toggleTheme() {
    setTheme(prev => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', next);
      return next;
    });
  }

  return (
    <div className="App" data-theme={theme}>
      <header className="App-header">
        <div className="theme-toggle">
          <span className="theme-toggle__label" aria-hidden="true">
            {theme === 'dark' ? 'Dark' : 'Light'}
          </span>
          <input
            id="theme-toggle"
            className="theme-toggle__input"
            type="checkbox"
            role="switch"
            aria-label="Toggle dark mode"
            aria-checked={theme === 'dark'}
            checked={theme === 'dark'}
            onChange={toggleTheme}
          />
          <label className="theme-toggle__track" htmlFor="theme-toggle" />
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
