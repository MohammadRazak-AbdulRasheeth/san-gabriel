/**
 * Differentiators data for San Gabriel Solutions
 * Key differentiators that distinguish the agency
 * Requirements: 3.1, 3.2
 */

export const differentiators = [
  {
    id: 'strategy-first',
    title: 'Strategy-First Approach',
    description: 'We begin every engagement with strategic thinking, ensuring tactics align with business goals. Marketing without strategy is just noise—we build the foundation before execution.',
    icon: 'LightBulbIcon',
    order: 1
  },
  {
    id: 'ethical-data-driven',
    title: 'Ethical, Data-Driven Results',
    description: 'Our commitment to ethical practices and data-driven decision making ensures sustainable growth. We measure what matters and optimize based on real performance, not vanity metrics.',
    icon: 'ChartBarIcon',
    order: 2
  },
  {
    id: 'long-term-partnerships',
    title: 'Long-Term Partnerships',
    description: 'We focus on building lasting relationships, not transactional services. Your success is our success, and we invest in understanding your business deeply to deliver compounding value over time.',
    icon: 'UsersIcon',
    order: 3
  },
  {
    id: 'integrated-expertise',
    title: 'Integrated Expertise',
    description: 'From brand strategy to campaign execution, our integrated approach ensures consistency across all marketing efforts. No silos, no disconnected tactics—just cohesive growth.',
    icon: 'PuzzlePieceIcon',
    order: 4
  }
];

/**
 * Get a differentiator by ID
 * @param {string} id - Differentiator ID
 * @returns {Object|undefined} Differentiator object or undefined
 */
export const getDifferentiatorById = (id) => {
  return differentiators.find(diff => diff.id === id);
};

/**
 * Get differentiators sorted by order
 * @returns {Array} Sorted array of differentiators
 */
export const getDifferentiatorsByOrder = () => {
  return [...differentiators].sort((a, b) => a.order - b.order);
};

export default differentiators;
