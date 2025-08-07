import { Variants } from 'framer-motion';

export const staggerContainer = (
  staggerChildren?: number, 
  delayChildren?: number
): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

import type { AnimationGeneratorType } from 'framer-motion';

export const fadeIn = (
  direction: 'up' | 'down' | 'left' | 'right' = 'up',
  type: AnimationGeneratorType = 'tween',
  delay: number = 0,
  duration: number = 1
): Variants => ({
  hidden: {
    x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});