import { GrowthIcon, StarIcon, RevenueIcon, BuildingIcon, ChatIcon, ToolsIcon, TargetIcon, ChartIcon, ProcessIcon, LightningIcon } from '../components/ui/Icons';

// Trust Indicators
export const trustIndicators = [
  {
    id: 'businesses-transformed',
    value: '50+',
    label: 'Businesses Transformed',
    icon: GrowthIcon,
    animationDelay: 0
  },
  {
    id: 'client-satisfaction',
    value: '100%',
    label: 'Client Satisfaction',
    icon: StarIcon,
    animationDelay: 200
  },
  {
    id: 'revenue-generated',
    value: '$2M+',
    label: 'In Revenue Generated',
    icon: RevenueIcon,
    animationDelay: 400
  },
  {
    id: 'industries-served',
    value: '10+',
    label: 'Industries Served',
    icon: BuildingIcon,
    animationDelay: 600
  }
];

// How It Works Steps
export const howItWorksSteps = [
  {
    id: 'consultation',
    stepNumber: '01',
    title: 'FREE CONSULTATION',
    description: 'We start with a comprehensive discussion about your business goals, challenges, and vision to understand exactly what you need.',
    icon: ChatIcon
  },
  {
    id: 'solution',
    stepNumber: '02',
    title: 'WE BUILD YOUR SOLUTION',
    description: 'Our expert team designs and implements tailored solutions that address your specific requirements and drive measurable results.',
    icon: ToolsIcon
  },
  {
    id: 'growth',
    stepNumber: '03',
    title: 'YOU GROW & SCALE',
    description: 'With our solutions in place, your business gains the tools and strategies needed to achieve sustainable growth and scale effectively.',
    icon: GrowthIcon
  }
];

// Why Choose Us Points
export const whyChooseUsPoints = [
  {
    id: 'proven-expertise',
    title: 'Proven Expertise',
    description: 'Years of experience across multiple industries with a track record of delivering exceptional results for our clients.',
    icon: TargetIcon
  },
  {
    id: 'end-to-end-solutions',
    title: 'End-to-End Solutions',
    description: 'From strategy to implementation, we provide comprehensive services that cover every aspect of your business needs.',
    icon: ProcessIcon
  },
  {
    id: 'results-driven',
    title: 'Results-Driven',
    description: 'We focus on measurable outcomes and ROI, ensuring every solution we implement contributes to your bottom line.',
    icon: ChartIcon
  },
  {
    id: 'fast-turnaround',
    title: 'Fast Turnaround',
    description: 'Efficient processes and dedicated teams allow us to deliver high-quality solutions within aggressive timelines.',
    icon: LightningIcon
  }
];