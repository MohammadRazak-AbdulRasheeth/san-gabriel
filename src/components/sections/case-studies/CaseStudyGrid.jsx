import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import CaseStudyCard from './CaseStudyCard';
import { caseStudies } from '../../../data/caseStudies';
import { agencyServices } from '../../../data/agencyServices';
import { industries } from '../../../data/industries';

/**
 * CaseStudyGrid Component
 * Displays case study cards in grid with filtering by industry or service
 * Requirements: 13.1
 */
const CaseStudyGrid = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');

  // Filter case studies based on selected filters
  const filteredCaseStudies = useMemo(() => {
    return caseStudies.filter((caseStudy) => {
      const matchesIndustry =
        selectedIndustry === 'all' || caseStudy.industry === selectedIndustry;
      const matchesService =
        selectedService === 'all' || caseStudy.services.includes(selectedService);
      return matchesIndustry && matchesService;
    });
  }, [selectedIndustry, selectedService]);

  // Sort to show featured case studies first
  const sortedCaseStudies = useMemo(() => {
    return [...filteredCaseStudies].sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }, [filteredCaseStudies]);

  return (
    <div className="w-full">
      {/* Filters */}
      <div className="mb-8 lg:mb-12">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          {/* Industry Filter */}
          <div className="flex-1">
            <label
              htmlFor="industry-filter"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Filter by Industry
            </label>
            <select
              id="industry-filter"
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
            >
              <option value="all">All Industries</option>
              {industries.map((industry) => (
                <option key={industry.id} value={industry.id}>
                  {industry.name}
                </option>
              ))}
            </select>
          </div>

          {/* Service Filter */}
          <div className="flex-1">
            <label
              htmlFor="service-filter"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Filter by Service
            </label>
            <select
              id="service-filter"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
            >
              <option value="all">All Services</option>
              {agencyServices.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results count */}
        <div className="mt-4">
          <p className="text-sm text-gray-600">
            Showing {sortedCaseStudies.length} of {caseStudies.length} case studies
          </p>
        </div>
      </div>

      {/* Case Studies Grid */}
      {sortedCaseStudies.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sortedCaseStudies.map((caseStudy, index) => (
            <CaseStudyCard
              key={caseStudy.id}
              caseStudy={caseStudy}
              index={index}
            />
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-gray-600 text-lg">
            No case studies match your selected filters.
          </p>
          <button
            onClick={() => {
              setSelectedIndustry('all');
              setSelectedService('all');
            }}
            className="mt-4 text-blue-600 hover:text-blue-700 font-semibold"
          >
            Clear Filters
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default CaseStudyGrid;
