import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Add this for routing

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
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (showForm && window.grecaptcha) {
      window.grecaptcha.ready(() => {
        window.grecaptcha.render("g-recaptcha", {
          sitekey: "6LdgBg8rAAAAAL2-SnuKKhSWzKpdCQSofaA7P2X9",
        });
      });
    }
  }, [showForm]);
  
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <nav className="bg-white shadow px-6 py-4 sticky top-0 z-50">
  <div className="flex justify-between items-center">
    
    {/* Logo + Brand Name */}
    <div className="flex items-center space-x-2">
    <img src="/title27-logo.png" alt="Title 27 Logo" className="h-10 w-auto" />
    <span className="text-xl font-semibold">Title 27, LLC</span>
    </div>

    {/* Hamburger Menu Button */}
    <button
      className="md:hidden"
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label="Toggle menu"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
        />
      </svg>
    </button>

    {/* Desktop Menu */}
    <div className="hidden md:flex space-x-6">
      <a href="#about" className="hover:underline">About</a>
      <a href="#services" className="hover:underline">Services</a>
      <Link to="/blog" className="hover:underline">Blog</Link>
      <a href="#contact" className="hover:underline">Contact</a>
    </div>
  </div>

  {/* Mobile Menu */}
  {menuOpen && (
    <div className="mt-4 md:hidden space-y-2">
      <a href="#about" className="block hover:underline">About</a>
      <a href="#services" className="block hover:underline">Services</a>
      <Link to="/blog" className="block hover:underline">Blog</Link>
      <a href="#contact" className="block hover:underline">Contact</a>
    </div>
  )}
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

  <p className="mb-2 font-medium">📍 Address:</p>
  <p className="mb-4">3750 NW 87th Ave # 700, Doral, FL 33178</p>

  <p className="mb-2 font-medium">✉️ Email:</p>
  <p className="mb-4">
    <a href="mailto:contact@title27llc.com" className="text-blue-600 hover:underline">
      contact@title27llc.com
    </a>
  </p>

  <div className="mt-6 max-w-2xl mx-auto">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.823181073615!2d-80.33536082476737!3d25.81007310726847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b9983c9efb25%3A0x35fbe0c2964d6ce7!2s3750%20NW%2087th%20Ave%20%23700%2C%20Doral%2C%20FL%2033178!5e0!3m2!1sen!2sus!4v1712594577281!5m2!1sen!2sus"
      width="100%"
      height="300"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="rounded-lg shadow"
    />
  </div>

  <div className="mt-6">
    <button 
      onClick={() => setShowForm(true)} 
      className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
    >
      Send a Message
    </button>
  </div>
</motion.section>


{/* Contact Form Modal */}
{showForm && (
  <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
    <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md relative">
      <button
        onClick={() => setShowForm(false)}
        className="absolute top-3 right-4 text-lg"
      >
        ×
      </button>
      <h3 className="text-xl font-bold mb-4">Contact Us</h3>
      <form
        action="https://formspree.io/f/mkgjpzdp"
        method="POST"
        className="space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full border p-2 rounded h-24"
          required
        ></textarea>

        {/* reCAPTCHA container */}
        <div id="g-recaptcha" className="flex justify-center" />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
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
