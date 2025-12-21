import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiOutlineShieldCheck, HiOutlineEye, HiOutlineLockClosed, HiOutlineUserGroup } from 'react-icons/hi';
import SEO from '../components/SEO';

/**
 * Privacy Policy Page
 * Comprehensive privacy policy for San Gabriel Solutions
 */
const PrivacyPolicy = () => {
  const lastUpdated = 'December 21, 2025';

  const sections = [
    {
      id: 'information-collection',
      icon: HiOutlineEye,
      title: 'Information We Collect',
      content: [
        {
          subtitle: 'Personal Information',
          text: 'When you contact us, subscribe to our newsletter, or use our services, we may collect personal information including your name, email address, phone number, company name, and job title.'
        },
        {
          subtitle: 'Usage Data',
          text: 'We automatically collect information about how you interact with our website, including your IP address, browser type, pages visited, time spent on pages, and referring website.'
        },
        {
          subtitle: 'Cookies and Tracking',
          text: 'We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors come from.'
        }
      ]
    },
    {
      id: 'information-use',
      icon: HiOutlineUserGroup,
      title: 'How We Use Your Information',
      content: [
        {
          subtitle: 'Service Delivery',
          text: 'To provide, maintain, and improve our marketing and advertising services, and to communicate with you about your projects and inquiries.'
        },
        {
          subtitle: 'Communication',
          text: 'To send you updates, marketing communications, and other information that may be of interest to you. You can opt out of marketing emails at any time.'
        },
        {
          subtitle: 'Analytics',
          text: 'To analyze usage patterns and trends to improve our website and services, and to develop new features and offerings.'
        }
      ]
    },
    {
      id: 'data-protection',
      icon: HiOutlineLockClosed,
      title: 'Data Protection & Security',
      content: [
        {
          subtitle: 'Security Measures',
          text: 'We implement industry-standard security measures including encryption, secure servers, and access controls to protect your personal information from unauthorized access, disclosure, or destruction.'
        },
        {
          subtitle: 'Data Retention',
          text: 'We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, or as required by law.'
        },
        {
          subtitle: 'Third-Party Services',
          text: 'We may share your information with trusted third-party service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.'
        }
      ]
    },
    {
      id: 'your-rights',
      icon: HiOutlineShieldCheck,
      title: 'Your Rights',
      content: [
        {
          subtitle: 'Access and Correction',
          text: 'You have the right to access, correct, or delete your personal information. Contact us to request a copy of your data or to make corrections.'
        },
        {
          subtitle: 'Opt-Out',
          text: 'You can opt out of receiving marketing communications at any time by clicking the unsubscribe link in our emails or contacting us directly.'
        },
        {
          subtitle: 'California Residents',
          text: 'If you are a California resident, you have additional rights under the CCPA, including the right to know what personal information we collect and the right to request deletion.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <SEO 
        title="Privacy Policy | San Gabriel Solutions"
        description="Learn how San Gabriel Solutions collects, uses, and protects your personal information."
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <HiOutlineShieldCheck className="w-16 h-16 mx-auto mb-6 text-accent-400" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-primary-200">
              Your privacy matters to us. Learn how we protect your information.
            </p>
            <p className="text-sm text-primary-300 mt-4">Last updated: {lastUpdated}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12 pb-8 border-b border-neutral-200"
          >
            <p className="text-lg text-neutral-700 leading-relaxed">
              San Gabriel Solutions ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you visit our website or use our services. Please read this policy carefully.
            </p>
          </motion.div>

          {/* Sections */}
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 2) }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <section.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-primary-900">{section.title}</h2>
              </div>
              
              <div className="space-y-6 pl-16">
                {section.content.map((item, idx) => (
                  <div key={idx}>
                    <h3 className="text-lg font-semibold text-primary-800 mb-2">{item.subtitle}</h3>
                    <p className="text-neutral-700 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 p-8 bg-primary-50 rounded-2xl"
          >
            <h2 className="text-2xl font-bold text-primary-900 mb-4">Questions About This Policy?</h2>
            <p className="text-neutral-700 mb-6">
              If you have any questions about this Privacy Policy or our data practices, please contact us.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-primary-900 text-white font-semibold rounded-lg hover:bg-primary-800 transition-colors"
              >
                Contact Us
              </Link>
              <a
                href="mailto:privacy@sangabrielsolutions.com"
                className="inline-flex items-center px-6 py-3 border-2 border-primary-900 text-primary-900 font-semibold rounded-lg hover:bg-primary-900 hover:text-white transition-colors"
              >
                privacy@sangabrielsolutions.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
