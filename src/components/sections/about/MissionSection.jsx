import { motion } from 'framer-motion';

const MissionSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              Our Mission & Philosophy
            </h2>
            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
              <p>
                At San Gabriel Solutions, our mission is to empower growing businesses with strategic 
                marketing and advertising solutions that drive measurable results. We believe every business 
                deserves access to expert guidance that was once reserved for large enterprises.
              </p>
              <p>
                Our philosophy centers on a strategy-first approach. We don't just execute tactics—we begin 
                every engagement with comprehensive strategic thinking, ensuring all marketing and advertising 
                efforts align with your business objectives and deliver meaningful outcomes.
              </p>
              <p>
                We are committed to ethical, data-driven results and long-term partnerships over transactional 
                services. Your success is our success, and we invest in relationships that grow and evolve 
                with your business.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }} 
            viewport={{ once: true }} 
            className="bg-primary-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-primary-900 mb-4">Our Vision</h3>
            <p className="text-lg text-neutral-600 leading-relaxed mb-6">
              To be the most trusted strategic marketing partner for growing businesses across Canada 
              and North America, known for delivering exceptional results through ethical practices and 
              data-driven strategies.
            </p>
            <div className="border-t border-primary-200 pt-6">
              <h4 className="text-xl font-bold text-primary-900 mb-3">Our Commitment</h4>
              <ul className="space-y-3 text-neutral-600">
                <li className="flex items-start">
                  <span className="text-accent-500 mr-2">✓</span>
                  <span>Strategy-first approach to every engagement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-2">✓</span>
                  <span>Ethical practices and transparent communication</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-2">✓</span>
                  <span>Data-driven decisions and measurable results</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-2">✓</span>
                  <span>Long-term partnerships, not transactional services</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
