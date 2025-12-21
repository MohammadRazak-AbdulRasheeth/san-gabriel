# Animation Guidelines

This document explains how animations are implemented in the San Gabriel Solutions website with full support for reduced motion preferences.

## Reduced Motion Support

All animations respect the user's `prefers-reduced-motion` system preference. When a user has reduced motion enabled:
- Animation durations are reduced to 0.01ms
- Transform animations are disabled
- Only opacity transitions remain for accessibility
- Scroll behavior becomes instant
- Focus indicators remain visible for keyboard navigation

## Using Animations

### 1. Scroll Reveal Animations

Use the `ScrollReveal` component for fade-in effects as elements enter the viewport:

```jsx
import ScrollReveal from '../components/ui/ScrollReveal';

<ScrollReveal direction="up" delay={0.2}>
  <div>Your content here</div>
</ScrollReveal>
```

**Props:**
- `direction`: 'up', 'down', 'left', 'right', 'scale' (default: 'up')
- `delay`: Animation delay in seconds (default: 0)
- `className`: Additional CSS classes

### 2. Staggered Animations

Use `StaggeredScrollReveal` for lists and grids:

```jsx
import { StaggeredScrollReveal } from '../components/ui/ScrollReveal';

<StaggeredScrollReveal staggerDelay={0.1}>
  {items.map(item => (
    <div key={item.id}>{item.content}</div>
  ))}
</StaggeredScrollReveal>
```

**Props:**
- `staggerDelay`: Delay between each child animation (default: 0.1s)
- `className`: Additional CSS classes

### 3. Framer Motion with Reduced Motion

When using Framer Motion directly, always use the `useReducedMotion` hook:

```jsx
import { motion } from 'framer-motion';
import useReducedMotion from '../hooks/useReducedMotion';

const MyComponent = () => {
  const prefersReducedMotion = useReducedMotion();

  const variants = {
    hidden: prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.6
      }
    }
  };

  return (
    <motion.div variants={variants} initial="hidden" animate="visible">
      Content
    </motion.div>
  );
};
```

### 4. Animation Utilities

Use the animation utility functions for consistent behavior:

```jsx
import { getFadeInVariants, getStaggerConfig } from '../utils/animations';
import useReducedMotion from '../hooks/useReducedMotion';

const MyComponent = () => {
  const prefersReducedMotion = useReducedMotion();
  const fadeInVariants = getFadeInVariants(prefersReducedMotion);
  const staggerConfig = getStaggerConfig(prefersReducedMotion, 0.1);

  // Use variants in your motion components
};
```

### 5. Smooth Scrolling

Use the smooth scroll utilities for navigation:

```jsx
import { scrollToElement, scrollToTop } from '../utils/smoothScroll';

// Scroll to an element
<button onClick={() => scrollToElement('services-section')}>
  View Services
</button>

// Scroll to top
<button onClick={scrollToTop}>
  Back to Top
</button>
```

## CSS Animation Classes

### Hover Effects
- `.hover:scale-105` - Subtle scale on hover
- `.hover:-translate-y-1` - Lift effect on hover
- `.hover:shadow-xl` - Enhanced shadow on hover

### Fade-in Animations
- `.fade-in-up` - Fade in from bottom
- `.fade-in-stagger` - Staggered fade-in for lists

### Stagger Delays
- `.stagger-delay-1` through `.stagger-delay-8` - Progressive delays

### Special Effects
- `.glass-card` - Frosted glass effect
- `.service-card-hover` - Service card hover animation
- `.portfolio-hover` - Portfolio item hover animation

## Best Practices

1. **Always use the `useReducedMotion` hook** when implementing custom animations
2. **Test with reduced motion enabled** in your browser's accessibility settings
3. **Keep animations subtle** - prefer 0.3-0.6s durations
4. **Maintain accessibility** - ensure focus indicators remain visible
5. **Use semantic HTML** - animations should enhance, not replace, semantic structure
6. **Provide alternatives** - ensure content is accessible without animations

## Testing Reduced Motion

### Chrome/Edge
1. Open DevTools (F12)
2. Press Cmd/Ctrl + Shift + P
3. Type "Emulate CSS prefers-reduced-motion"
4. Select "reduce"

### Firefox
1. Type `about:config` in address bar
2. Search for `ui.prefersReducedMotion`
3. Set to `1` (reduce motion)

### macOS System Setting
System Preferences → Accessibility → Display → Reduce motion

### Windows System Setting
Settings → Ease of Access → Display → Show animations in Windows

## Performance Considerations

- All animations use hardware-accelerated properties (transform, opacity)
- Animations are disabled when elements are off-screen
- Intersection Observer is used for scroll-triggered animations
- Reduced motion preferences are checked once and cached
