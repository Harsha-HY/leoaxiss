import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/leoaxisData';
import { Star, Quote, CheckCircle2, Building2, GraduationCap } from 'lucide-react';

const additionalVerifiedFeedback = [
  {
    name: "Dr. K. Srinivas Rao",
    role: "Dean of Academics & Placement Cell",
    location: "Hyderabad Engineering Campus",
    quote: "LeoAxis delivered an intensive 4-week AWS Skill Builder and Python Bootcamp. Over 180 of our computer science students completed real-world projects with measurable placement readiness.",
    metric: "180+ Placed Students",
    tag: "Institutional Partner",
    type: "academic"
  },
  {
    name: "Chandra Shekhar",
    role: "Managing Director, Sri Sai Logistics",
    location: "Telangana & Andhra Corridor",
    quote: "Our tracking and vehicle dispatch operations were completely manual. The custom web application LeoAxis built digitized our dispatch logs and cut driver turnaround times significantly.",
    metric: "40% Time Saved",
    tag: "Verified Client",
    type: "enterprise"
  },
  {
    name: "Pooja Varma",
    role: "Founder, Organics Online",
    location: "Bengaluru, Karnataka",
    quote: "From e-commerce catalog setup to razorpay gateway integration, LeoAxis executed smoothly. Their post-launch support and server monitoring keep our store running 24/7 without a hitch.",
    metric: "99.9% Store Uptime",
    tag: "Verified Client",
    type: "ecommerce"
  }
];

export default function LeoTestimonials() {
  const allFeedback = [...testimonials, ...additionalVerifiedFeedback];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-blue-50/15 to-white">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-100/30 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold mb-4 shadow-xs"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-[#0d44e8]" />
            <span>REAL RESULTS FROM REAL PARTNERS</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight"
          >
            What Founders, Principals & Business Owners Say
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-normal"
          >
            Real feedback from local businesses transformed into statewide digital brands, and educational institutions scaling with LeoAxis technology.
          </motion.p>
        </div>

        {/* Testimonials Grid (CleanShot X Card Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allFeedback.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-7 rounded-3xl bg-white border border-gray-200/80 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating & Metric Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200/60">
                    {item.metric}
                  </span>
                </div>

                {/* Quote Content */}
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal mb-6 relative">
                  "{item.quote}"
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0d44e8] to-blue-400 text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-xs">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-950">{item.name}</h4>
                    <p className="text-xs text-gray-500 font-medium">{item.role}</p>
                    <p className="text-[11px] text-gray-400">{item.location}</p>
                  </div>
                </div>

                <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-gray-100 text-gray-600">
                  {item.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
