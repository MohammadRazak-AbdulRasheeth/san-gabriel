import { motion } from 'framer-motion';
import useReducedMotion from '../../../hooks/useReducedMotion';

/**
 * Testimonials Section (3-5 cards)
 * Placeholder structure - replace with real testimonials
 */
const TestimonialsSection = () => {
  const prefersReducedMotion = useReducedMotion();

  // Placeholder testimonials - replace with real content
  const testimonials = [
    {
      id: 1,
      quote: "San Gabriel Solutions transformed our delivery fleet into mobile billboards. The ROI has been incredible - we're getting brand exposure across the entire GTA.",
      author: "Michael R.",
      role: "Fleet Manager",
      company: "Local Delivery Co.",
      rating: 5
    },
    {
      id: 2,
      quote: "The $1/sq ft pricing made vehicle advertising accessible for our small business. Professional installation and great support throughout.",
      author: "Sarah T.",
      role: "Owner",
      company: "Boutique Retail",
      rating: 5
    },
    {
      id: 3,
      quote: "As a driver partner, the earnings are consistent and the verification process is straightforward. Great way to earn extra income.",
      author: "James K.",
      role: "Vehicle Partner",
      company: "Independent Driver",
      rating: 5
    },
    {
      id: 4,
      quote: "We branded our entire truck fleet with San Gabriel. The quality of the wraps and installation exceeded our expectations.",
      author: "David L.",
      role: "Operations Director",
      company: "Logistics Company",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Trusted by businesses and drivers across the region
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-neutral-50 rounded-2xl p-6 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-accent-200">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-neutral-700 mb-6 text-sm leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-neutral-200 pt-4">
                <p className="font-semibold text-primary-900">{testimonial.author}</p>
                <p className="text-sm text-neutral-500">{testimonial.role}</p>
                <p className="text-sm text-accent-600">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
