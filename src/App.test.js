import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  describe('Theme Toggle', () => {
    test('renders theme toggle switch', () => {
      render(<App />);
      const themeToggle = screen.getByRole('switch', { name: /toggle dark mode/i });
      expect(themeToggle).toBeInTheDocument();
    });

    test('displays initial theme label', () => {
      render(<App />);
      expect(screen.getByText('Light')).toBeInTheDocument();
    });

    test('toggles theme from light to dark', async () => {
      render(<App />);

      const themeToggle = screen.getByRole('switch', { name: /toggle dark mode/i });
      expect(themeToggle).not.toBeChecked();

      await userEvent.click(themeToggle);

      expect(themeToggle).toBeChecked();
      expect(screen.getByText('Dark')).toBeInTheDocument();
    });

    test('toggles theme from dark to light', async () => {
      render(<App />);

      const themeToggle = screen.getByRole('switch', { name: /toggle dark mode/i });

      await userEvent.click(themeToggle);
      expect(screen.getByText('Dark')).toBeInTheDocument();

      await userEvent.click(themeToggle);
      expect(screen.getByText('Light')).toBeInTheDocument();
    });

    test('applies data-theme attribute to root div', async () => {
      const { container } = render(<App />);

      const rootDiv = container.querySelector('[data-theme]');
      expect(rootDiv).toHaveAttribute('data-theme', 'light');

      const themeToggle = screen.getByRole('switch', { name: /toggle dark mode/i });
      await userEvent.click(themeToggle);

      expect(rootDiv).toHaveAttribute('data-theme', 'dark');
    });

    test('persists theme preference to localStorage', async () => {
      render(<App />);

      const themeToggle = screen.getByRole('switch', { name: /toggle dark mode/i });
      await userEvent.click(themeToggle);

      expect(localStorage.getItem('theme')).toBe('dark');

      await userEvent.click(themeToggle);
      expect(localStorage.getItem('theme')).toBe('light');
    });

    test('restores theme from localStorage on mount', () => {
      localStorage.setItem('theme', 'dark');
      render(<App />);

      const themeToggle = screen.getByRole('switch', { name: /toggle dark mode/i });
      expect(themeToggle).toBeChecked();
      expect(screen.getByText('Dark')).toBeInTheDocument();
    });

    test('has proper ARIA attributes for accessibility', () => {
      render(<App />);

      const themeToggle = screen.getByRole('switch', { name: /toggle dark mode/i });
      expect(themeToggle).toHaveAttribute('aria-label', 'Toggle dark mode');
      expect(themeToggle).toHaveAttribute('aria-checked');
    });

    test('toggle label is hidden from screen readers', () => {
      render(<App />);

      const label = screen.getByText(/^(Light|Dark)$/);
      expect(label).toHaveAttribute('aria-hidden', 'true');
    });

    test('is keyboard accessible', async () => {
      render(<App />);

      const themeToggle = screen.getByRole('switch', { name: /toggle dark mode/i });

      themeToggle.focus();
      expect(themeToggle).toHaveFocus();

      await userEvent.click(themeToggle);
      expect(themeToggle).toBeChecked();
    });
  });
});
