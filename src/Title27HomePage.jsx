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

export default function Title27HomePage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
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

      {/* Hero Section */}
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

      {/* About Section */}
      <motion.section 
        id="about"
        className="py-16 px-6 bg-gray-50 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
        <p className="max-w-2xl mx-auto text-slate-600">
          Title 27, LLC is dedicated to delivering accurate and efficient title and closing services. With a focus on customer satisfaction and a deep understanding of Florida real estate law, we make the title process seamless for buyers, sellers, agents, and lenders.
        </p>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        id="services"
        className="py-16 px-6 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["Title Insurance", "Escrow & Closings", "Lien & Title Search"].map((title, index) => (
            <motion.div 
              key={title} 
              variants={fadeIn} 
              className="bg-slate-100 p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-slate-700">
                {title === "Title Insurance" && "Protect your property rights with comprehensive title insurance coverage backed by industry expertise."}
                {title === "Escrow & Closings" && "We manage closings with professionalism and precision, ensuring all documents and funds are handled properly."}
                {title === "Lien & Title Search" && "We provide thorough and accurate lien and title searches to identify and resolve potential issues before closing."}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact"
        className="py-16 px-6 bg-slate-100 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-2">Chajir Ale Dargham, Partner</p>
        <p className="mb-2">Phone: 786-870-7248</p>
        <p className="mb-4">Email: floridatitle27@gmail.com</p>
        <button 
          onClick={() => setShowForm(true)} 
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
        >
          Send a Message
        </button>
      </motion.section>

      {/* Contact Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md relative">
            <button onClick={() => setShowForm(false)} className="absolute top-3 right-4 text-lg">×</button>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full border p-2 rounded" />
              <input type="email" placeholder="Your Email" className="w-full border p-2 rounded" />
              <textarea placeholder="Your Message" className="w-full border p-2 rounded h-24" />
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white border-t text-center text-sm text-slate-500 py-6">
        &copy; {new Date().getFullYear()} Title 27, LLC. All rights reserved.
      </footer>
    </div>
  );
}
