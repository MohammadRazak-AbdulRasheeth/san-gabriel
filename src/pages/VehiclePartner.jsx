import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineCheck, HiOutlineTruck, HiOutlineCash, HiOutlineShieldCheck } from 'react-icons/hi';
import Button from '../components/ui/Button';
import SEO from '../components/SEO';
import useReducedMotion from '../hooks/useReducedMotion';

/**
 * Vehicle Partner Signup Page
 * For drivers who want to earn income with vehicle advertising
 */
const VehiclePartner = () => {
  const prefersReducedMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    vehicleType: '',
    make: '',
    model: '',
    year: '',
    color: '',
    platePartial: '',
    drivingArea: '',
    kmPerDay: '',
    availableSpace: '',
    temporaryAds: false,
    removalConsent: false,
    inspectionConsent: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you shortly.');
  };

  const eligibleVehicles = [
    { type: 'Cars', description: 'Sedans, hatchbacks, coupes' },
    { type: 'Vans', description: 'Minivans, cargo vans, passenger vans' },
    { type: 'Trucks', description: 'Pickup trucks, box trucks' },
    { type: 'Delivery Vehicles', description: 'Commercial delivery vehicles' }
  ];

  const payoutModels = [
    { name: 'Flat Monthly Rate', description: 'Guaranteed fixed monthly payment' },
    { name: 'Revenue Share', description: 'Earn based on campaign performance' },
    { name: 'Hybrid', description: 'Base rate plus performance bonuses' }
  ];

  const benefits = [
    'No installation costs',
    'No removal costs',
    'Flexible commitment',
    'Professional ad materials',
    'Easy payout system',
    'Vehicle restored professionally'
  ];

  return (
    <div className="pt-20">
      <SEO 
        title="Vehicle Partner Program | San Gabriel Solutions"
        description="Earn money with your vehicle. Turn your daily commute into income with San Gabriel Solutions vehicle advertising program."
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
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
            <div className="w-20 h-20 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <HiOutlineTruck className="w-10 h-10 text-accent-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Earn Money With Your Vehicle
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8">
              Turn your daily commute into income. We handle installation and removal — you just drive.
            </p>
            
            <Button variant="primary" size="lg" href="#signup-form" className="bg-accent-500 hover:bg-accent-600">
              Apply Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
                Why Partner With Us?
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <HiOutlineCheck className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-lg text-neutral-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-primary-900 mb-6">Eligible Vehicles</h3>
              <div className="grid grid-cols-2 gap-4">
                {eligibleVehicles.map((vehicle, index) => (
                  <div key={index} className="bg-neutral-50 rounded-xl p-4">
                    <h4 className="font-semibold text-primary-900">{vehicle.type}</h4>
                    <p className="text-sm text-neutral-600">{vehicle.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Payout Models */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Flexible Payout Options
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {payoutModels.map((model, index) => (
              <motion.div
                key={model.name}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="w-14 h-14 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiOutlineCash className="w-7 h-7 text-accent-600" />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-2">{model.name}</h3>
                <p className="text-neutral-600">{model.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Removal Policy */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary-50 rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <HiOutlineShieldCheck className="w-6 h-6 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold text-primary-900">Ad Removal Policy</h2>
            </div>
            <ul className="space-y-3">
              {[
                'All ads are time-based with clear end dates',
                'Ads removed immediately after campaign end',
                'San Gabriel schedules and manages all removal',
                'Vehicles restored professionally at no cost to driver'
              ].map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <HiOutlineCheck className="w-5 h-5 text-green-600 mt-0.5" />
                  <span className="text-neutral-700">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Signup Form */}
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
              Fill out the form below and we'll be in touch
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            {/* Driver Info */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-primary-900 mb-4">Driver Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" name="fullName" placeholder="Full Name *" required value={formData.fullName} onChange={handleChange} className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                <input type="tel" name="phone" placeholder="Phone Number *" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                <input type="email" name="email" placeholder="Email Address *" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                <input type="text" name="city" placeholder="City *" required value={formData.city} onChange={handleChange} className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
              </div>
            </div>

            {/* Vehicle Info */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-primary-900 mb-4">Vehicle Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <select name="vehicleType" required value={formData.vehicleType} onChange={handleChange} className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                  <option value="">Vehicle Type *</option>
                  <option value="car">Car</option>
                  <option value="van">Van</option>
                  <option value="truck">Truck</option>
                  <option value="delivery">Delivery Vehicle</option>
                </select>
                <input type="text" name="make" placeholder="Make *" required value={formData.make} onChange={handleChange} className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                <input type="text" name="model" placeholder="Model *" required value={formData.model} onChange={handleChange} className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                <input type="number" name="year" placeholder="Year *" required value={formData.year} onChange={handleChange} className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                <input type="text" name="color" placeholder="Color *" required value={formData.color} onChange={handleChange} className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                <input type="text" name="platePartial" placeholder="License Plate (last 4) *" required value={formData.platePartial} onChange={handleChange} className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
              </div>
            </div>

            {/* Usage Info */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-primary-900 mb-4">Usage Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" name="drivingArea" placeholder="Primary Driving Area *" required value={formData.drivingArea} onChange={handleChange} className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                <input type="number" name="kmPerDay" placeholder="Average KM/Day *" required value={formData.kmPerDay} onChange={handleChange} className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                <select name="availableSpace" required value={formData.availableSpace} onChange={handleChange} className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent md:col-span-2">
                  <option value="">Available Ad Space *</option>
                  <option value="rear-window">Rear Window</option>
                  <option value="side-panels">Side Panels</option>
                  <option value="partial-wrap">Partial Wrap</option>
                  <option value="full-wrap">Full Wrap</option>
                </select>
              </div>
            </div>

            {/* Consent */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-primary-900 mb-4">Consent</h3>
              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" name="temporaryAds" required checked={formData.temporaryAds} onChange={handleChange} className="mt-1 w-5 h-5 text-primary-600 border-neutral-300 rounded focus:ring-primary-500" />
                  <span className="text-neutral-700">I agree to display temporary advertisements on my vehicle *</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" name="removalConsent" required checked={formData.removalConsent} onChange={handleChange} className="mt-1 w-5 h-5 text-primary-600 border-neutral-300 rounded focus:ring-primary-500" />
                  <span className="text-neutral-700">I understand ads will be removed after campaign end *</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" name="inspectionConsent" required checked={formData.inspectionConsent} onChange={handleChange} className="mt-1 w-5 h-5 text-primary-600 border-neutral-300 rounded focus:ring-primary-500" />
                  <span className="text-neutral-700">I agree to vehicle inspection before and after campaigns *</span>
                </label>
              </div>
            </div>

            <Button type="submit" variant="primary" size="lg" className="w-full bg-accent-500 hover:bg-accent-600">
              Submit Application
            </Button>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default VehiclePartner;
