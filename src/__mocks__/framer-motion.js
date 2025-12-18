// Mock framer-motion for Jest tests
import React from 'react';

// Filter out framer-motion specific props
const filterMotionProps = (props) => {
  const {
    initial, animate, exit, transition, variants, whileHover, whileTap, whileInView,
    whileFocus, whileDrag, drag, dragConstraints, dragElastic, dragMomentum,
    onDragStart, onDragEnd, onDrag, layout, layoutId, viewport, onAnimationStart,
    onAnimationComplete, custom, inherit, ...rest
  } = props;
  return rest;
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

export { motion, AnimatePresence };
