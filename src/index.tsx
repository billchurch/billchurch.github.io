/* @refresh reload */
import { render } from 'solid-js/web';
import './styles/index.css';
import App from './App';
import { getStoredTheme, getSystemTheme, applyTheme } from './utils/theme';

// Apply theme before rendering to prevent flash
const storedTheme = getStoredTheme();
const initialTheme = storedTheme || getSystemTheme();
applyTheme(initialTheme);

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => <App />, root!);