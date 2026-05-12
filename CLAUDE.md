# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Start

This is a React 19 application bootstrapped with Create React App. The project uses React Testing Library for unit tests.

### Essential Commands

- **Development server**: `npm start` — runs on http://localhost:3000, hot reloads on file changes
- **Run all tests**: `npm test` — launches interactive test runner (press `w` to watch, `q` to quit)
- **Run single test file**: `npm test -- App.test.js --watchAll=false` — runs tests without watch mode
- **Build for production**: `npm run build` — creates optimized bundle in `build/` folder
- **Eject config** (one-way): `npm run eject` — exposes webpack and other CRA internals; avoid unless necessary

## Project Structure

```
src/
├── App.js              # Main app component with theme toggle feature
├── App.css             # Styles (supports CSS variables for theming)
├── App.test.js         # Unit tests for App component
├── index.js            # Entry point
├── setupTests.js       # Test configuration (imports jest-dom matchers)
├── reportWebVitals.js  # Web Vitals metric reporting
└── logo.svg
```

## Architecture Notes

### Theme Management
The app implements a theme system (light/dark) stored in localStorage. The `getInitialTheme()` function in App.js:
1. Checks localStorage for a saved preference
2. Falls back to system preference via `prefers-color-scheme` media query
3. Defaults to 'light'

Theme is applied via the `data-theme` attribute on the root div and controlled by CSS variables in index.css.

**Color Palette**: Comprehensive theme includes 30+ CSS variables covering:
- Base colors (background, text, borders, surfaces)
- Interactive elements (links, hover states, visited states)
- Status colors (success, warning, error, info)
- Shadows and depth
- Accent colors (primary, secondary)

See `src/THEME_COLORS.md` for complete color reference and usage examples.

### Testing Approach
- Uses React Testing Library (`@testing-library/react`) for unit tests
- Tests focus on user interactions and rendered output, not implementation details
- Matchers from `@testing-library/jest-dom` are pre-configured in setupTests.js
- Current test: `App.test.js` validates the "Learn React" link is rendered

## Development Notes

- **Node/npm**: Uses react-scripts 5.0.1 for build tooling; no ejection needed for typical feature work
- **Browser support**: Targets last version of Chrome, Firefox, and Safari in development; production targets >0.2% market share
- **Linting**: Uses react-app ESLint config (includes React and Jest rules); run `npm test` to see lint output
- **No custom build config**: All webpack, Babel, and ESLint configuration is managed by react-scripts
