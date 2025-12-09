import React from 'react';
import { motion } from 'framer-motion';
import { whyChooseUsPoints } from '../data/content';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-20">
      {/* Enhanced Hero Section with Particle Effects */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-600 text-white relative overflow-hidden">
        {/* Floating Particles Background */}
        <motion.div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, Math.random() * 40 - 20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <motion.span
                className="inline-block"
                initial={{ rotateY: -90 }}
                animate={{ rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                About
              </motion.span>{' '}
              <motion.span
                className="inline-block text-accent-500"
                initial={{ rotateY: 90 }}
                animate={{ rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                San Gabriel
              </motion.span>{' '}
              <motion.span
                className="inline-block"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.9, type: "spring", stiffness: 200 }}
              >
                Consulting
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              Transforming businesses through expert consulting and innovative solutions
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story with 3D Effects */}
      <section className="py-20 bg-gradient-to-r from-white to-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
          animate={{ x: [0, 60, 0], y: [0, 60, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              whileHover={{ 
                scale: 1.02,
                rotateY: 2,
                transition: { duration: 0.3 }
              }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
              className="perspective-1000 transform-gpu"
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-primary-900 mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.span
                  className="inline-block"
                  whileHover={{ 
                    scale: 1.1,
                    color: "#f97316",
                    transition: { duration: 0.2 }
                  }}
                >
                  Our
                </motion.span>{' '}
                <motion.span
                  className="inline-block text-accent-500"
                  whileHover={{ 
                    scale: 1.1,
                    rotateZ: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  Story
                </motion.span>
              </motion.h2>
              <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                >
                  Founded with a vision to help businesses navigate the complexities of modern markets, 
                  San Gabriel Consulting has grown into a trusted partner for companies seeking transformational growth.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                >
                  Our team of seasoned professionals brings together decades of experience across marketing, 
                  strategy, technology, and branding to deliver comprehensive solutions that drive real results.
                </motion.p>
                <p>
                  We believe that every business has untapped potential. Our mission is to unlock that potential 
                  through strategic guidance, innovative solutions, and unwavering commitment to our clients' success.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-primary-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-primary-900 mb-6">Our Mission</h3>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                To empower businesses with the strategic insights, innovative solutions, and expert guidance 
                they need to achieve sustainable growth and competitive advantage in their markets.
              </p>
              
              <h3 className="text-2xl font-bold text-primary-900 mb-6">Our Vision</h3>
              <p className="text-lg text-neutral-600 leading-relaxed">
                To be the leading consulting firm that transforms how businesses operate, compete, and grow 
                in an increasingly digital and interconnected world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              We're not just another consulting firm. Here's what sets us apart from the competition.
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

                    <h3 className="text-xl font-bold text-primary-900 mb-4">
                      {point.title}
                    </h3>

                    <p className="text-neutral-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our diverse team brings together expertise across multiple disciplines to deliver comprehensive solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                area: "Marketing & Strategy",
                description: "Digital marketing experts with proven track records in growing brands and driving customer acquisition."
              },
              {
                area: "Technology & Innovation", 
                description: "Technical specialists who understand how to leverage emerging technologies for business advantage."
              },
              {
                area: "Business Operations",
                description: "Operational excellence professionals who optimize processes and drive efficiency improvements."
              }
            ].map((expertise, index) => (
              <motion.div
                key={expertise.area}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-primary-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-primary-900 mb-4">
                    {expertise.area}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {expertise.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help you achieve your business goals.
            </p>
            <Link to="/contact">
              <Button variant="primary" size="lg">
                Start Your Journey
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;