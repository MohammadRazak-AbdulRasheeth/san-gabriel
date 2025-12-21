import { motion } from 'framer-motion';

const ApproachSection = () => {
  const approachSteps = [
    { 
      title: "Discovery & Analysis", 
      description: "We begin by deeply understanding your business, market, competitors, and target audience to identify opportunities and challenges. This foundation ensures our strategies are grounded in reality and aligned with your goals." 
    }, 
    { 
      title: "Strategic Planning", 
      description: "Based on our analysis, we develop a customized marketing strategy with clear objectives, KPIs, and actionable roadmaps. Every recommendation is backed by data and designed to deliver measurable results." 
    }, 
    { 
      title: "Execution & Optimization", 
      description: "We implement your strategy with precision and professionalism, continuously monitoring performance and optimizing for maximum ROI. Our approach is agile, adapting to market changes and new opportunities." 
    }
  ];

  return (
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
            and advertising efforts with your business objectives, ensuring every action drives meaningful results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {approachSteps.map((step, index) => (
            <motion.div 
              key={step.title} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: index * 0.2 }} 
              viewport={{ once: true }} 
              className="bg-white rounded-xl p-8 shadow-lg border border-neutral-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-xl font-bold text-accent-600">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-4">{step.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.6 }} 
          viewport={{ once: true }} 
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-neutral-100"
        >
          <h3 className="text-2xl font-bold text-primary-900 mb-6 text-center">
            What Sets Our Approach Apart
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-primary-900 mb-3">Integrated Marketing & Advertising</h4>
              <p className="text-neutral-600 leading-relaxed">
                We don't silo marketing and advertising. Our integrated approach ensures all channels work 
                together seamlessly, amplifying your message and maximizing impact across every touchpoint.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-primary-900 mb-3">Business-Aligned Execution</h4>
              <p className="text-neutral-600 leading-relaxed">
                Every strategy we develop is directly tied to your business objectives. We measure success 
                not just by marketing metrics, but by the impact on your bottom line and business growth.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-primary-900 mb-3">Continuous Improvement</h4>
              <p className="text-neutral-600 leading-relaxed">
                We don't set and forget. Our approach includes ongoing analysis, testing, and optimization 
                to ensure your marketing investment delivers increasing returns over time.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-primary-900 mb-3">Transparent Reporting</h4>
              <p className="text-neutral-600 leading-relaxed">
                You'll always know what's working and what's not. Our clear, comprehensive reporting keeps 
                you informed and empowers data-driven decision making at every stage.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ApproachSection;
