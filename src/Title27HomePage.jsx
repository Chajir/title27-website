
import { motion } from "framer-motion";
import { useState } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3
    }
  }
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
};

export default function Title27HomePage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <nav className="bg-white shadow px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-semibold">Title 27, LLC</span>
        </div>
        <div className="space-x-4 hidden md:flex">
          <a href="#about" className="hover:underline">About</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="/blog" className="hover:underline">Blog</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </nav>

      <motion.section 
        className="relative bg-gradient-to-r from-slate-900 to-black text-white py-20 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-2xl mx-auto px-4">
          <motion.h1 className="text-4xl font-bold mb-4" variants={fadeIn}>
            Secure. Reliable. Professional.
          </motion.h1>
          <motion.p className="text-lg text-slate-300 mb-6" variants={fadeIn}>
            Title 27, LLC is your trusted partner in real estate title services across Florida.
          </motion.p>
          <motion.div variants={fadeIn}>
            <button 
              onClick={() => setShowForm(true)} 
              className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
            >
              Get Started
            </button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
