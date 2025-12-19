// Mock framer-motion for Jest tests
import React from 'react';

// Filter out framer-motion specific props to prevent React warnings
const filterMotionProps = (props) => {
  const {
    initial, animate, exit, transition, variants, whileHover, whileTap, whileInView,
    whileFocus, whileDrag, drag, dragConstraints, dragElastic, dragMomentum,
    onDragStart, onDragEnd, onDrag, layout, layoutId, viewport, onAnimationStart,
    onAnimationComplete, custom, inherit, style, ...rest
  } = props;
  // Return only valid DOM props
  return { style, ...rest };
};

const createMotionComponent = (Component) => {
  return React.forwardRef(({ children, ...props }, ref) => {
    const filteredProps = filterMotionProps(props);
    return React.createElement(Component, { ref, ...filteredProps }, children);
  });
};

const motion = {
  div: createMotionComponent('div'),
  span: createMotionComponent('span'),
  p: createMotionComponent('p'),
  h1: createMotionComponent('h1'),
  h2: createMotionComponent('h2'),
  h3: createMotionComponent('h3'),
  h4: createMotionComponent('h4'),
  button: createMotionComponent('button'),
  a: createMotionComponent('a'),
  section: createMotionComponent('section'),
  ul: createMotionComponent('ul'),
  li: createMotionComponent('li'),
  nav: createMotionComponent('nav'),
  header: createMotionComponent('header'),
  footer: createMotionComponent('footer'),
  img: createMotionComponent('img'),
  form: createMotionComponent('form'),
  input: createMotionComponent('input'),
  textarea: createMotionComponent('textarea'),
  select: createMotionComponent('select'),
  label: createMotionComponent('label'),
  article: createMotionComponent('article'),
  aside: createMotionComponent('aside'),
  main: createMotionComponent('main'),
};

const AnimatePresence = ({ children }) => <>{children}</>;

// Mock useScroll hook - returns mock scroll progress values
const useScroll = () => ({
  scrollY: { get: () => 0, onChange: () => () => {} },
  scrollX: { get: () => 0, onChange: () => () => {} },
  scrollYProgress: { get: () => 0, onChange: () => () => {} },
  scrollXProgress: { get: () => 0, onChange: () => () => {} },
});

// Mock useTransform hook - returns a mock motion value
const useTransform = (value, inputRange, outputRange) => {
  // Return a mock motion value that returns the first output value
  const defaultValue = Array.isArray(outputRange) ? outputRange[0] : outputRange;
  return {
    get: () => defaultValue,
    set: () => {},
    onChange: () => () => {},
  };
};

// Mock useMotionValue hook
const useMotionValue = (initial) => ({
  get: () => initial,
  set: () => {},
  onChange: () => () => {},
});

// Mock useSpring hook
const useSpring = (value) => value;

// Mock useAnimation hook
const useAnimation = () => ({
  start: () => Promise.resolve(),
  stop: () => {},
  set: () => {},
});

// Mock useInView hook
const useInView = () => [null, true];

export { 
  motion, 
  AnimatePresence, 
  useScroll, 
  useTransform, 
  useMotionValue, 
  useSpring, 
  useAnimation,
  useInView
};
