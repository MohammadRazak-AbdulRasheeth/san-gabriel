import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineCheck, HiOutlineTruck, HiOutlineCash, HiOutlineShieldCheck, HiOutlineUpload, HiOutlineLocationMarker } from 'react-icons/hi';
import Button from '../components/ui/Button';
import SEO from '../components/SEO';
import useReducedMotion from '../hooks/useReducedMotion';
import { driverCompensation, verificationOptions } from '../data/pricingConfig';

/**
 * Vehicle Partner Signup Page (Updated)
 * Clear earnings ranges, verification options, activity requirements
 */
const VehiclePartner = () => {
  const prefersReducedMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    vehicleType: '',
    baseCity: '',
    typicalRoutes: '',
    availability: '',
    photos: null,
    trackingConsent: false,
    termsConsent: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your application! We will contact you within 24-48 hours.');
  };

  const faqs = [
    {
      question: 'Is tracking optional?',
      answer: 'Yes, tracking is completely optional. You can choose to verify activity through daily trip uploads instead of automated tracking.'
    },
    {
      question: 'What is tracked?',
      answer: 'Only daily kilometers traveled are tracked to verify advertising activity. We do not track turn-by-turn routes or use data for productivity monitoring.'
    },
    {
      question: 'When do I get paid?',
      answer: 'Payments are made monthly, contingent on verified vehicle activity and an active campaign during the payment period.'
    },
    {
      question: 'How does installation work?',
      answer: 'We schedule professional installation at a convenient time and location. Installation is free and typically takes 1-3 hours depending on the wrap size.'
    },
    {
      question: 'What if I want to stop?',
      answer: 'You can exit the program at any time. We\'ll schedule professional removal at no cost to you, and your vehicle will be restored to its original condition.'
    }
  ];

  return (
    <div className="pt-20">
      <SEO 
        title="Vehicle Partner Program | Earn $50-$500+/month | San Gabriel Solutions"
        description="Earn money with your vehicle. Cars earn $50-$150/month, trucks $150-$300/month, trailers $250-$500+/month. Flexible verification options."
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20 md:py-28 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: `url('/11servicesimages/3.MOBILE ADVERTISING – TRUCKING FLEETS .png')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/70 via-primary-800/70 to-primary-900/70" />
        
        {/* Animated dot pattern */}
        <div className="absolute inset-0 opacity-10">
          <motion.div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
            animate={prefersReducedMotion ? {} : {
              backgroundPosition: ['0px 0px', '40px 40px'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <HiOutlineTruck className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Earn Money With Your Vehicle
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8">
              Turn your daily driving into income. We handle installation and removal — you just drive.
            </p>
            
            <Button variant="secondary" size="lg" href="#signup-form" className="!bg-white !text-primary-700 !border-white hover:!bg-gray-100">
              Apply Now
            </Button>
          </motion.div>
        </div>
        
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Earnings Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Clear Earnings Ranges
            </h2>
            <p className="text-xl text-neutral-600">
              Earn {driverCompensation.ratePerSqFt.displayText} based on ad size and route
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {driverCompensation.earningsByVehicle.map((vehicle, index) => (
              <motion.div
                key={vehicle.type}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 text-center border border-primary-200"
              >
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiOutlineCash className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-2">{vehicle.type}</h3>
                <div className="text-3xl font-bold text-primary-600 mb-2">{vehicle.display}</div>
                <p className="text-sm text-neutral-600">Based on ad size and route coverage</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activity Verification Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Activity Verification Options
            </h2>
            <p className="text-xl text-neutral-600">
              Choose how you verify your vehicle activity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Manual Upload Option */}
            <motion.div
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                  <HiOutlineUpload className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-900">{verificationOptions.manualUpload.name}</h3>
                  <span className="text-sm text-blue-600 font-medium">Option A</span>
                </div>
              </div>
              <p className="text-neutral-600 mb-4">{verificationOptions.manualUpload.description}</p>
              <p className="text-sm text-neutral-500 mb-4">
                <strong>Frequency:</strong> {verificationOptions.manualUpload.frequency}
              </p>
              <ul className="space-y-2">
                {verificationOptions.manualUpload.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-neutral-700">
                    <HiOutlineCheck className="w-5 h-5 text-primary-500" />
                    {req}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Automated Tracking Option */}
            <motion.div
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center">
                  <HiOutlineLocationMarker className="w-7 h-7 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-900">{verificationOptions.automatedTracking.name}</h3>
                  <span className="text-sm text-primary-600 font-medium">Option B (Opt-in)</span>
                </div>
              </div>
              <p className="text-neutral-600 mb-4">{verificationOptions.automatedTracking.description}</p>
              <p className="text-sm text-neutral-500 mb-4">
                <strong>Frequency:</strong> {verificationOptions.automatedTracking.frequency}
              </p>
              <ul className="space-y-2 mb-4">
                {verificationOptions.automatedTracking.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-neutral-700">
                    <HiOutlineCheck className="w-5 h-5 text-primary-500" />
                    {req}
                  </li>
                ))}
              </ul>
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="text-sm text-blue-800">
                  <HiOutlineShieldCheck className="w-4 h-4 inline mr-1" />
                  {verificationOptions.automatedTracking.privacyNote}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Minimum Daily Movement */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-amber-50 border border-amber-200 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-amber-800 mb-4">Minimum Daily Movement Requirement</h3>
            <ul className="space-y-2 text-amber-900">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-1">•</span>
                Vehicles must meet minimum daily movement thresholds to qualify for full earnings.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-1">•</span>
                If thresholds are not met, payment may be reduced or paused for that period.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-1">•</span>
                Specific thresholds vary by market and vehicle type.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-neutral-50 rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-primary-900 mb-2">{faq.question}</h3>
                <p className="text-neutral-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="signup-form" className="py-20 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Apply to Become a Vehicle Partner
            </h2>
            <p className="text-xl text-neutral-600">
              Fill out the form below and we'll be in touch within 24-48 hours
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            {/* Contact Info */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-primary-900 mb-4">Contact Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" name="fullName" placeholder="Full Name *" required value={formData.fullName} onChange={handleChange} className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                <input type="tel" name="phone" placeholder="Phone Number *" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                <input type="email" name="email" placeholder="Email Address *" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent md:col-span-2" />
              </div>
            </div>

            {/* Vehicle Info */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-primary-900 mb-4">Vehicle Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <select name="vehicleType" required value={formData.vehicleType} onChange={handleChange} className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                  <option value="">Vehicle Type *</option>
                  <option value="car">Car/Sedan</option>
                  <option value="van">Van</option>
                  <option value="straight-truck">Straight Truck/Box Truck</option>
                  <option value="trailer">53' Trailer</option>
                  <option value="other">Other</option>
                </select>
                <input type="text" name="baseCity" placeholder="Base City *" required value={formData.baseCity} onChange={handleChange} className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                <textarea name="typicalRoutes" placeholder="Typical Routes (e.g., Toronto to Hamilton, Downtown delivery) *" required value={formData.typicalRoutes} onChange={handleChange} rows={3} className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent md:col-span-2" />
                <select name="availability" required value={formData.availability} onChange={handleChange} className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent md:col-span-2">
                  <option value="">Availability *</option>
                  <option value="full-time">Full-time (5+ days/week)</option>
                  <option value="part-time">Part-time (2-4 days/week)</option>
                  <option value="weekends">Weekends only</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>

            {/* Photos */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-primary-900 mb-4">Vehicle Photos (Optional)</h3>
              <input type="file" name="photos" multiple accept="image/*" onChange={handleChange} className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
              <p className="text-sm text-neutral-500 mt-2">Upload photos of your vehicle (front, sides, rear)</p>
            </div>

            {/* Consent */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-primary-900 mb-4">Consent</h3>
              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" name="trackingConsent" checked={formData.trackingConsent} onChange={handleChange} className="mt-1 w-5 h-5 text-primary-600 border-neutral-300 rounded focus:ring-primary-500" />
                  <span className="text-neutral-700">I understand that activity verification is required for payment (via manual upload or opt-in tracking)</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" name="termsConsent" required checked={formData.termsConsent} onChange={handleChange} className="mt-1 w-5 h-5 text-primary-600 border-neutral-300 rounded focus:ring-primary-500" />
                  <span className="text-neutral-700">I agree to the <a href="/driver-terms" className="text-primary-600 underline">Driver Terms</a> and <a href="/privacy" className="text-primary-600 underline">Privacy Policy</a> *</span>
                </label>
              </div>
            </div>

            <Button type="submit" variant="primary" size="lg" className="w-full">
              Submit Application
            </Button>

            <p className="text-sm text-neutral-500 text-center mt-4">
              We typically respond within 24-48 hours.
            </p>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default VehiclePartner;
