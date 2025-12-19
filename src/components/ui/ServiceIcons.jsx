import {
  HiOutlineCurrencyDollar,
  HiOutlineTemplate,
  HiOutlineTruck,
  HiOutlineOfficeBuilding,
  HiOutlineSpeakerphone,
  HiOutlineShare,
  HiOutlineCode,
  HiOutlineCalendar,
  HiOutlineDocumentText,
  HiOutlineLightningBolt,
  HiOutlineCheckCircle,
  HiOutlineStar,
  HiOutlineExclamation,
  HiOutlineGlobe,
  HiOutlineArrowRight,
  HiOutlineExternalLink,
  HiOutlineChartBar,
  HiOutlineCog,
  HiOutlineUsers,
  HiOutlineLocationMarker,
  HiOutlineEye,
  HiOutlineCash
} from 'react-icons/hi';

/**
 * Service Icons mapping
 * Maps service IDs to their corresponding professional icons
 */
export const serviceIconMap = {
  'revenue-generating-advertising': HiOutlineCurrencyDollar,
  'branding-banners-signs': HiOutlineTemplate,
  'mobile-advertising': HiOutlineTruck,
  'monetize-location': HiOutlineOfficeBuilding,
  'advertise-with-us': HiOutlineSpeakerphone,
  'social-media-digital': HiOutlineShare,
  'website-design': HiOutlineCode,
  'events-community': HiOutlineCalendar,
  'incorporation-services': HiOutlineDocumentText,
  'strategy-technology-ai': HiOutlineLightningBolt
};

/**
 * Get icon component for a service
 * @param {string} serviceId - The service ID
 * @returns {React.Component} The icon component
 */
export const getServiceIcon = (serviceId) => {
  return serviceIconMap[serviceId] || HiOutlineCog;
};

/**
 * ServiceIcon Component
 * Renders the appropriate icon for a service
 */
export const ServiceIcon = ({ serviceId, className = "w-8 h-8" }) => {
  const IconComponent = getServiceIcon(serviceId);
  return <IconComponent className={className} />;
};

/**
 * Common UI Icons
 */
export const Icons = {
  Check: HiOutlineCheckCircle,
  Star: HiOutlineStar,
  Warning: HiOutlineExclamation,
  Globe: HiOutlineGlobe,
  ArrowRight: HiOutlineArrowRight,
  ExternalLink: HiOutlineExternalLink,
  Chart: HiOutlineChartBar,
  Settings: HiOutlineCog,
  Users: HiOutlineUsers,
  Location: HiOutlineLocationMarker,
  Eye: HiOutlineEye,
  Cash: HiOutlineCash,
  Currency: HiOutlineCurrencyDollar,
  Template: HiOutlineTemplate,
  Truck: HiOutlineTruck,
  Building: HiOutlineOfficeBuilding,
  Megaphone: HiOutlineSpeakerphone,
  Share: HiOutlineShare,
  Code: HiOutlineCode,
  Calendar: HiOutlineCalendar,
  Document: HiOutlineDocumentText,
  Lightning: HiOutlineLightningBolt
};

/**
 * Flow Step Icons for ServiceHero
 */
export const flowStepIcons = {
  traffic: HiOutlineTruck,
  visibility: HiOutlineEye,
  monetization: HiOutlineCurrencyDollar
};

export default ServiceIcon;
