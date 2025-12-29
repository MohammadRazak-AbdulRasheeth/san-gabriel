import { motion } from 'framer-motion';
import { whyChooseUsPoints } from '../data/content';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { TargetIcon, ChartIcon, StarIcon, GrowthIcon } from '../components/ui/Icons';

const About = () => {
  const values = [
    { 
      id: 'ethical', 
      title: 'Ethical Practices', 
      description: 'We operate with integrity and transparency in every engagement, ensuring honest communication and fair dealings.', 
      icon: StarIcon 
    },
    { 
      id: 'data-driven', 
      title: 'Data-Driven Results', 
      description: 'Every recommendation we make is backed by data and analytics, ensuring measurable outcomes and informed decisions.', 
      icon: ChartIcon 
    },
    { 
      id: 'strategic', 
      title: 'Strategy-First Approach', 
      description: 'We begin every engagement with comprehensive strategic planning, aligning marketing efforts with your business objectives.', 
      icon: TargetIcon 
    },
    { 
      id: 'partnership', 
      title: 'Long-Term Partnerships', 
      description: 'We invest in lasting relationships, not transactional services. Your success is our success, and we grow together.', 
      icon: GrowthIcon 
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-600 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.2 }} 
            className="text-center"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6" 
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 1, delay: 0.3 }}
            >
              About San Gabriel Solutions
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto" 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Your strategic partner in marketing and advertising excellence
            </motion.p>
          </motion.div>
        </div>
      </section>

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
                  Our philosophy centers on building genuine partnerships with our clients. We take the time 
                  to understand your unique challenges, goals, and market position before crafting tailored 
                  strategies that align with your vision.
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
              <p className="text-lg text-neutral-600 leading-relaxed">
                To be the most trusted strategic marketing partner for growing businesses across Canada 
                and North America, known for delivering exceptional results through ethical practices and 
                data-driven strategies.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            viewport={{ once: true }} 
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Our Strategy-First Approach
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We don't just execute tactics—we develop comprehensive strategies that align your marketing 
              efforts with your business objectives.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Discovery & Analysis", 
                description: "We begin by deeply understanding your business, market, competitors, and target audience to identify opportunities and challenges." 
              }, 
              { 
                title: "Strategic Planning", 
                description: "Based on our analysis, we develop a customized marketing strategy with clear objectives, KPIs, and actionable roadmaps." 
              }, 
              { 
                title: "Execution & Optimization", 
                description: "We implement your strategy with precision, continuously monitoring performance and optimizing for maximum ROI." 
              }
            ].map((step, index) => (
              <motion.div 
                key={step.title} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: index * 0.2 }} 
                viewport={{ once: true }} 
                className="bg-white rounded-xl p-8 shadow-lg border border-neutral-100"
              >
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-xl font-bold text-accent-600">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-4">{step.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            viewport={{ once: true }} 
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              These principles guide everything we do and define how we partner with our clients.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => { 
              const IconComponent = value.icon; 
              return (
                <motion.div 
                  key={value.id} 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6, delay: index * 0.1 }} 
                  viewport={{ once: true }} 
                  className="text-center group"
                >
                  <div className="bg-primary-50 rounded-xl p-8 hover:shadow-lg hover:border-accent-200 transition-all duration-300 h-full border border-transparent">
                    <div className="w-16 h-16 bg-accent-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-100 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-accent-500" />
                    </div>
                    <h3 className="text-xl font-bold text-primary-900 mb-4">{value.title}</h3>
                    <p className="text-neutral-600 leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ); 
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }} 
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Partners, Not Vendors</h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  We believe in building long-term partnerships, not transactional relationships. When you 
                  work with San Gabriel Solutions, you gain a dedicated team that's invested in your success 
                  for the long haul.
                </p>
                <p>
                  Our partnership approach means we celebrate your wins, learn from challenges together, and 
                  continuously evolve our strategies as your business grows. We're not just service providers—we're 
                  an extension of your team.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }} 
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  { metric: "95%", label: "Client Retention Rate" }, 
                  { metric: "3+ Years", label: "Average Partnership" }, 
                  { metric: "50+", label: "Long-Term Partners" }, 
                  { metric: "100%", label: "Client Satisfaction" }
                ].map((stat, index) => (
                  <motion.div 
                    key={stat.label} 
                    initial={{ opacity: 0, scale: 0.8 }} 
                    whileInView={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.5, delay: index * 0.1 }} 
                    viewport={{ once: true }} 
                    className="bg-primary-800 rounded-xl p-6 text-center"
                  >
                    <div className="text-3xl font-bold text-accent-400 mb-2">{stat.metric}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            viewport={{ once: true }} 
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Why Choose San Gabriel?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We're not just another advertising company. Here's what sets us apart from the competition.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsPoints.map((point, index) => { 
              const IconComponent = point.icon; 
              return (
                <motion.div 
                  key={point.id} 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6, delay: index * 0.1 }} 
                  viewport={{ once: true }} 
                  className="text-center group"
                >
                  <div className="bg-white rounded-xl p-8 shadow-lg border border-neutral-100 hover:shadow-xl hover:border-accent-200 transition-all duration-300 h-full">
                    <div className="w-16 h-16 bg-accent-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-100 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-accent-500" />
                    </div>
                    <h3 className="text-xl font-bold text-primary-900 mb-4">{point.title}</h3>
                    <p className="text-neutral-600 leading-relaxed">{point.description}</p>
                  </div>
                </motion.div>
              ); 
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Let's discuss how our strategy-first approach can help you achieve your business goals.
            </p>
            <Link to="/contact">
              <Button variant="primary" size="lg">Schedule a Discovery Call</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
