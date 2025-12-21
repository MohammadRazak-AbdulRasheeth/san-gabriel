import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import InsightGrid from '../components/sections/insights/InsightGrid';
import CategoryFilter from '../components/sections/insights/CategoryFilter';
import { getInsightsByDate, insightCategories } from '../data/insights';
import useReducedMotion from '../hooks/useReducedMotion';
import SEO from '../components/SEO';
import { pageSEOConfig } from '../utils/seo';

/**
 * Insights Page
 * Thought leadership content page with category filtering
 * Requirements: 5.1 - Display grid of insight articles
 */
const Insights = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const insights = getInsightsByDate();
  const prefersReducedMotion = useReducedMotion();

  // Animation variants
  const heroVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0.01 : 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* SEO Meta Tags - Requirements: 19.1, 19.4 */}
      <SEO {...pageSEOConfig.insights} />
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-16 md:py-24"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Insights & Perspectives
          </h1>
          <p className="text-lg md:text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
            Strategic insights on marketing, advertising, and business growth from our team of 
            experienced marketing professionals. Practical guidance to help you make informed decisions.
          </p>
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <CategoryFilter
            categories={insightCategories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          {/* Insight Grid */}
          <InsightGrid
            insights={insights}
            selectedCategory={selectedCategory}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how San Gabriel Solutions can help you achieve your business goals 
            with strategic marketing and advertising solutions.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-accent-600 text-white px-8 py-4 rounded-lg 
                       font-semibold hover:bg-accent-700 transition-colors min-h-[44px]"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Insights;
