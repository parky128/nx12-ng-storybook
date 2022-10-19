# UI CSS KIT
This CSS only library manages global styles, component styles, and low-level utility classes.

## Structure

**1. Configuration**

Global variables `(--ald-g-*)`.

- color `(--ald-g-color-*)`
- space `(--ald-g-space-*)`
- font
	- family `(--ald-g-font-stack)`
	- size `(--ald-g-text-*)`
	- line height `(--ald-g-leading-*)`
- radius `(--ald-g-radius-*)`
- breakpoints  `(--ald-g-breakpoint-*)`
- shadows  `(--ald-g-shadow-*)`

**2. Abstract**

- Normalize - makes browsers render all elements more consistently and in line with modern standards.

- Mixins to generate font sizes and responsive breakpoints.
  - Media query `@mixin mediaquery()`
  - Font size `@mixin font-size()`
  - Utilities generator `@mixin style-class()`

**3. Utility**

A collection of classes that are generic enough to be widely used.

- layout
  - container
  - display
  - overflow
  - position
  - top, right, bottom, left location
  - z-index
- flexbox and grid
  - flexbox
  - gap
  - grid
- spacing
  - padding
  - margin
- sizing
  - width
  - height
- typography
  - font size
  - font stack 
  - font weight
  - text alignment
  - text color
  - text decoration
  - text overflow 
  - text transform
  - whitespace
  - word break
- ground
  - background 
  - foreground
- border
  - color
  - radius
  - style
  - width
- effects
  - opacity
  - shadow
- interactivity
  - cursor
  - outline
  - user-select


**4. Global**

App wide rules
- Affects default text color, font smoothing and `<h*><body><p>` elements
