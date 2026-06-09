---
name: Mono-Gallery Aesthetic
colors:
  surface: '#f8f9fb'
  surface-dim: '#d9dadc'
  surface-bright: '#f8f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f6'
  surface-container: '#edeef0'
  surface-container-high: '#e7e8ea'
  surface-container-highest: '#e1e2e4'
  on-surface: '#191c1e'
  on-surface-variant: '#46464b'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f3'
  outline: '#77767c'
  outline-variant: '#c7c6cb'
  surface-tint: '#5c5e67'
  primary: '#05070e'
  on-primary: '#ffffff'
  primary-container: '#1d1f27'
  on-primary-container: '#858690'
  inverse-primary: '#c5c6d1'
  secondary: '#3354c7'
  on-secondary: '#ffffff'
  secondary-container: '#6b89fe'
  on-secondary-container: '#002074'
  tertiary: '#0a0601'
  on-tertiary: '#ffffff'
  tertiary-container: '#251e13'
  on-tertiary-container: '#908576'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e1e2ed'
  primary-fixed-dim: '#c5c6d1'
  on-primary-fixed: '#191b23'
  on-primary-fixed-variant: '#45464f'
  secondary-fixed: '#dde1ff'
  secondary-fixed-dim: '#b7c4ff'
  on-secondary-fixed: '#001453'
  on-secondary-fixed-variant: '#113aaf'
  tertiary-fixed: '#efe0cf'
  tertiary-fixed-dim: '#d2c5b3'
  on-tertiary-fixed: '#211b10'
  on-tertiary-fixed-variant: '#4e4538'
  background: '#f8f9fb'
  on-background: '#191c1e'
  surface-variant: '#e1e2e4'
  pure-white: '#FFFFFF'
  surface-alt: '#F9FAFB'
  border-subtle: '#E5E7EB'
typography:
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.03em
  headline-xl-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

The design system is centered on an editorial, high-end gallery aesthetic that prioritizes content over interface. It targets creators and professionals who require a sophisticated, "museum-grade" backdrop for their work. 

The visual language is rooted in **Minimalism** with a **Corporate Modern** edge. It leverages extreme whitespace to create a sense of luxury and breathing room. The interface remains intentionally quiet—using high-contrast typography and a strict monochrome-leaning palette—to ensure that the visual work being showcased provides the primary color and energy of the experience. The emotional response should be one of clarity, precision, and curated excellence.

## Colors

The palette is dominated by a high-contrast relationship between **Primary (Deep Black)** and **Pure White**. The primary black is used for core brand elements, heavy typography, and primary actions.

- **Secondary (Mobbin Blue):** Used strictly as a functional accent for interactive states, links, or success indicators. It should never overwhelm the monochromatic foundation.
- **Neutral / Surface:** Light grays are used to define subtle container boundaries and background shifts without breaking the minimalist flow.
- **Backgrounds:** Use pure white as the default canvas. Use the neutral light gray only for secondary sections or to differentiate "cards" from the main stage.

## Typography

This design system utilizes **Hanken Grotesk** across all roles to maintain a sharp, contemporary, and unified appearance. The type scale is built on high-contrast ratios: headlines are bold and tightly tracked to feel like editorial mastheads, while body text is given generous line height for maximum legibility.

- **Headlines:** Use tight letter spacing for large sizes to create a "locked-up" professional look.
- **Labels:** Use uppercase with increased letter spacing for small metadata or navigational tags to provide a structured, architectural feel.
- **Hierarchy:** Rely on weight and scale rather than color to distinguish hierarchy.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** approach for desktop to mirror the feel of a curated physical portfolio. Content is centered within a 1280px container to ensure visual control on wide displays.

- **Grid:** A 12-column grid is used for desktop, shifting to a 4-column grid for mobile. 
- **Rhythm:** Use an 8px base unit for all padding and margins. 
- **Whitespace:** Use "Generous Padding." Sections should be separated by large vertical gaps (80px to 120px) to allow each project or piece of content to exist in its own visual context.
- **Mobile:** Margins shrink to 20px, and grid columns stack vertically. Elements like project thumbnails should transition to a single-column or high-density two-column layout depending on the detail required.

## Elevation & Depth

This design system avoids traditional skeuomorphism and heavy drop shadows. Depth is conveyed through **Low-Contrast Outlines** and **Tonal Layers**.

- **Surfaces:** Use 1px solid borders in a subtle gray (`#E5E7EB`) to define cards or sections on a white background.
- **Layers:** Use a light neutral fill (`#F3F4F6`) for background containers to lift them visually from the primary white canvas.
- **Interactive Depth:** When a user hovers over an element, use a very subtle, diffused ambient shadow (low opacity, 5-10%) or a slight scale-up (1.02x) to indicate interactivity without breaking the flat aesthetic.

## Shapes

The shape language is **Soft (0.25rem / 4px)**. This choice provides a subtle bridge between the rigidity of a sharp-edged professional layout and the approachability of modern software.

- **Images:** All project thumbnails and media should adhere to the base roundedness.
- **Buttons:** Buttons use the same 4px radius.
- **Exceptions:** Full-width sections and main container edges remain sharp (0px) to anchor the layout to the viewport edges.

## Components

### Buttons
- **Primary:** Solid `#1D1F27` background with white text. No shadow. 4px border radius.
- **Secondary:** Transparent background with a 1px `#1D1F27` border.
- **Action:** For subtle actions, use plain text with the `#3C5CCF` color and a bottom-border hover state.

### Cards (Portfolio Items)
Cards should be borderless or have a very faint `#E5E7EB` border. The focus is the image. Titles should be placed directly below the image in `headline-md` or `body-lg` bold, followed by small `label-sm` metadata.

### Input Fields
Minimalist execution: a bottom-border only (2px solid `#E5E7EB`) that turns `#1D1F27` on focus. No heavy boxes or fills.

### Chips/Tags
Small, low-contrast pills using `#F3F4F6` background and `#1D1F27` text. Use `label-sm` typography.

### Navigation
A sticky top-bar with a blur effect (`backdrop-filter: blur(10px)`) and a subtle bottom border. Use `body-md` weight 500 for navigation links with a 32px gap between items.