import { motion } from 'framer-motion';
import { TargetIcon, ChartIcon, StarIcon, GrowthIcon } from '../../ui/Icons';

const ValuesSection = () => {
  const values = [
    { 
      id: 'strategy-first', 
      title: 'Strategy-First Approach', 
      description: 'We begin every engagement with comprehensive strategic planning, aligning marketing efforts with your business objectives. Tactics without strategy are just noise.', 
      icon: TargetIcon 
    },
    { 
      id: 'data-driven', 
      title: 'Ethical, Data-Driven Results', 
      description: 'Every recommendation we make is backed by data and analytics, ensuring measurable outcomes and informed decisions. We operate with integrity and transparency in every engagement.', 
      icon: ChartIcon 
    },
    { 
      id: 'partnership', 
      title: 'Long-Term Partnerships', 
      description: 'We invest in lasting relationships, not transactional services. Your success is our success, and we grow together through continuous collaboration and shared goals.', 
      icon: GrowthIcon 
    },
    { 
      id: 'excellence', 
      title: 'Professional Excellence', 
      description: 'We maintain the highest standards of professionalism in everything we do, from strategic planning to execution and reporting. Quality is never compromised.', 
      icon: StarIcon 
    }
  ];

  const whoWeWorkWith = [
    {
      title: 'Growing Businesses',
      description: 'Companies ready to scale their marketing efforts and need strategic guidance to maximize growth opportunities.'
    },
    {
      title: 'Established Enterprises',
      description: 'Organizations seeking to refine their marketing strategy, rebrand, or launch new initiatives with expert support.'
    },
    {
      title: 'Professional Services',
      description: 'Law firms, consulting practices, and professional service providers looking to build authority and generate qualified leads.'
    },
    {
      title: 'B2B & B2C Brands',
      description: 'Businesses across industries that value strategic thinking, measurable results, and long-term partnership over quick fixes.'
    }
  ];

  return (
    <>
      <section className="py-16 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            viewport={{ once: true }} 
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-900 mb-4">Our Core Values</h2>
            <p className="text-base md:text-xl text-neutral-600 max-w-3xl mx-auto px-2">
              These principles guide everything we do and define how we partner with our clients.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => { 
              const IconComponent = value.icon; 
              return (
                <motion.div 
                  key={value.id} 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6, delay: index * 0.1 }} 
                  viewport={{ once: true }} 
                  className="text-center group"
                >
                  <div className="bg-primary-50 rounded-xl p-6 md:p-8 hover:shadow-lg hover:border-accent-200 transition-all duration-300 h-full border border-transparent">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-accent-50 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:bg-accent-100 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-accent-500" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-primary-900 mb-3 md:mb-4">{value.title}</h3>
                    <p className="text-sm md:text-base text-neutral-600 leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ); 
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            viewport={{ once: true }} 
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Who We Work With</h2>
            <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
              We partner with businesses that value strategic thinking and are committed to achieving 
              measurable results through professional marketing and advertising.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            {whoWeWorkWith.map((client, index) => (
              <motion.div 
                key={client.title} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: index * 0.1 }} 
                viewport={{ once: true }} 
                className="bg-primary-800 rounded-xl p-6 md:p-8 border border-primary-700 hover:border-accent-500 transition-colors duration-300"
              >
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{client.title}</h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">{client.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.4 }} 
            viewport={{ once: true }} 
            className="text-center"
          >
            <div className="bg-primary-800 rounded-2xl p-6 md:p-8 lg:p-12 inline-block max-w-full">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Partners, Not Vendors</h3>
              <p className="text-sm md:text-lg text-gray-300 leading-relaxed max-w-3xl">
                We believe in building long-term partnerships, not transactional relationships. When you 
                work with San Gabriel Solutions, you gain a dedicated team that's invested in your success 
                for the long haul. We celebrate your wins, learn from challenges together, and continuously 
                evolve our strategies as your business grows.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ValuesSection;
