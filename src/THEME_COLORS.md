# Theme Colors Reference

This document outlines all available CSS color variables for both light and dark themes.

## Color Categories

### Base Colors
- `--color-bg` — Main background color
- `--color-text` — Primary text color
- `--color-text-secondary` — Secondary/muted text color
- `--color-border` — Border and outline color
- `--color-divider` — Divider/separator color
- `--color-surface` — Elevated surface/card background
- `--color-surface-hover` — Hovered surface background

### Header
- `--color-header-bg` — Header background color
- `--color-header-text` — Header text color

### Links & Interactive Elements
- `--color-link` — Default link color
- `--color-link-hover` — Link on hover
- `--color-link-visited` — Visited link color

### UI Components
- `--color-toggle-track` — Toggle switch track color
- `--color-toggle-knob` — Toggle switch knob/thumb color

### Status Colors
- `--color-success` — Success/positive state (e.g., form validation)
- `--color-success-light` — Success background
- `--color-warning` — Warning state (e.g., alerts)
- `--color-warning-light` — Warning background
- `--color-error` — Error/negative state (e.g., form errors)
- `--color-error-light` — Error background
- `--color-info` — Info state (e.g., tooltips, info messages)
- `--color-info-light` — Info background

### Shadows
- `--color-shadow` — Default shadow color
- `--color-shadow-hover` — Shadow on hover

### Accent Colors
- `--color-primary` — Primary brand color
- `--color-secondary` — Secondary brand color

## Light Theme Values

```
Base:
  --color-bg:              #ffffff
  --color-text:            #20232a
  --color-text-secondary:  #6c757d
  --color-border:          #dee2e6
  --color-divider:         #e9ecef
  --color-surface:         #f8f9fa
  --color-surface-hover:   #e9ecef

Links:
  --color-link:            #0070c0
  --color-link-hover:      #005399
  --color-link-visited:    #6f42c1

Status:
  --color-success:         #28a745
  --color-warning:         #ffc107
  --color-error:           #dc3545
  --color-info:            #17a2b8
```

## Dark Theme Values

```
Base:
  --color-bg:              #20232a
  --color-text:            #e8eaf0
  --color-text-secondary:  #adb5bd
  --color-border:          #495057
  --color-divider:         #343a40
  --color-surface:         #2d3139
  --color-surface-hover:   #3a4149

Links:
  --color-link:            #61dafb
  --color-link-hover:      #87eaff
  --color-link-visited:    #b084cc

Status:
  --color-success:         #51cf66
  --color-warning:         #ffd43b
  --color-error:           #ff6b6b
  --color-info:            #74c0fc
```

## Usage Examples

### Basic Text Styling
```css
.my-element {
  color: var(--color-text);
  background-color: var(--color-bg);
}
```

### Interactive Elements
```css
.my-button {
  background-color: var(--color-primary);
  color: white;
}

.my-button:hover {
  background-color: var(--color-link-hover);
}
```

### Status Messages
```css
.error-message {
  color: var(--color-error);
  background-color: var(--color-error-light);
  border: 1px solid var(--color-error);
}

.success-message {
  color: var(--color-success);
  background-color: var(--color-success-light);
  border: 1px solid var(--color-success);
}
```

### Cards and Surfaces
```css
.card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  box-shadow: 0 2px 4px var(--color-shadow);
}

.card:hover {
  background-color: var(--color-surface-hover);
  box-shadow: 0 4px 8px var(--color-shadow-hover);
}
```

## Theme Switching
Colors automatically update when the `data-theme` attribute changes on the root element. The app handles this via the theme toggle switch in the header.

## Adding Custom Colors
To add new theme colors:
1. Add the new color variable to both `[data-theme="light"]` and `[data-theme="dark"]` in `src/index.css`
2. Document it in this file
3. Use `var(--color-name)` in your CSS
