import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getServicesByOrder } from '../../data/services';
import Button from '../ui/Button';
import {
  HiOutlineCurrencyDollar,
  HiOutlineColorSwatch,
  HiOutlineTruck,
  HiOutlineOfficeBuilding,
  HiOutlineSpeakerphone,
  HiOutlineDeviceMobile,
  HiOutlineCode,
  HiOutlineCalendar,
  HiOutlineDocumentText,
  HiOutlineLightningBolt,
} from 'react-icons/hi';

// Service icons mapping - using premium Heroicons
const serviceIconComponents = {
  'revenue-generating-advertising': HiOutlineCurrencyDollar,
  'branding-banners-signs': HiOutlineColorSwatch,
  'mobile-advertising': HiOutlineTruck,
  'monetize-location': HiOutlineOfficeBuilding,
  'advertise-with-us': HiOutlineSpeakerphone,
  'social-media-digital': HiOutlineDeviceMobile,
  'website-design': HiOutlineCode,
  'events-community': HiOutlineCalendar,
  'incorporation-services': HiOutlineDocumentText,
  'strategy-technology-ai': HiOutlineLightningBolt,
};

const ServicesOverview = () => {
  // Get first 4 services for homepage overview
  const services = getServicesByOrder().slice(0, 4);

  return (
    <section
      id="services-overview"
      className="py-20 bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-2">
            Our Services
          </h2>
          {/* Decorative Wavy Line */}
          <div className="flex justify-center mb-4">
            <svg
              width="100"
              height="10"
              viewBox="0 0 100 10"
              fill="none"
              className="text-primary-900"
            >
              <path
                d="M2 5C2 5 7 2 12 5C17 8 22 5 22 5C22 5 27 2 32 5C37 8 42 5 42 5C42 5 47 2 52 5C57 8 62 5 62 5C62 5 67 2 72 5C77 8 82 5 82 5C82 5 87 2 92 5C97 8 98 5 98 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Turn traffic into revenue with our comprehensive advertising and
            business solutions
          </p>
        </motion.div>

        {/* Service categories grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const IconComponent =
              serviceIconComponents[service.id] || HiOutlineCurrencyDollar;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-xl p-8 shadow-lg border border-neutral-100 h-full flex flex-col hover:shadow-xl hover:border-accent-300 transition-all duration-300">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-accent-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-100 transition-colors">
                    <IconComponent className="w-8 h-8 text-accent-500" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-primary-900 mb-4 text-center group-hover:text-accent-600 transition-colors">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-600 leading-relaxed text-center mb-6 flex-grow line-clamp-3">
                    {service.tagline}
                  </p>

                  {/* CTA Button */}
                  <div className="text-center mt-auto">
                    <Link to={`/services#service-${service.id}`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="group-hover:bg-primary-900 group-hover:text-white group-hover:border-primary-900 transition-all"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Services CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/services">
            <Button variant="primary" size="lg">
              View All Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
