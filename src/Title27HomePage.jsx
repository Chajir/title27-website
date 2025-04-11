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
  const [isDarkMode, setIsDarkMode] = useState(false);

useEffect(() => {
  if (isDarkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [isDarkMode]);

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
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-900 dark:text-white transition-colors duration-300">
  
      {/* Header + Nav */}
      <header className="bg-white dark:bg-slate-900 shadow sticky top-0 z-50 transition-colors duration-300">
        <nav className="px-6 py-4" aria-label="Main navigation">
          <div className="flex justify-between items-center">
            {/* Logo + Brand */}
            <div className="flex items-center space-x-2">
              <img src="/title27-logo.png" alt="Title 27 Logo" className="h-10 w-auto" />
              <span className="text-xl font-semibold">Title 27, LLC</span>
            </div>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              aria-label="Toggle dark mode"
              className="ml-4 px-3 py-1 border border-slate-300 rounded text-sm hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {isDarkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
            <button
              className="md:hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="hover:underline focus:ring-2 focus:ring-blue-500">About</a>
              <a href="#services" className="hover:underline focus:ring-2 focus:ring-blue-500">Services</a>
              <Link to="/blog" className="hover:underline focus:ring-2 focus:ring-blue-500">Blog</Link>
              <a href="#contact" className="hover:underline focus:ring-2 focus:ring-blue-500">Contact</a>
            </div>
          </div>
  
          {/* Mobile Nav */}
          {menuOpen && (
            <div className="mt-4 md:hidden space-y-2">
              <a href="#about" className="block hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500">About</a>
              <a href="#services" className="block hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500">Services</a>
              <Link to="/blog" className="block hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500">Blog</Link>
              <a href="#contact" className="block hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500">Contact</a>
            </div>
          )}
        </nav>
      </header>
  
      {/* Main Content */}
      <main>
  
        {/* Hero Section */}
        <motion.section 
          className="relative bg-gradient-to-r from-slate-900 to-black text-white py-20 text-center dark:from-slate-800 dark:to-slate-900"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        >
          <div className="max-w-2xl mx-auto px-4">
            <motion.h1 className="text-4xl font-bold mb-4" variants={fadeIn}>
              Secure. Reliable. Professional.
            </motion.h1>
            <motion.p className="text-lg text-slate-300 mb-6" variants={fadeIn}>
            Title 27, LLC is your trusted partner for title insurance and real estate closings in Miami, Doral, Hialeah and the greater South Florida area.
            </motion.p>
            <motion.div variants={fadeIn}>
              <button
                onClick={() => setShowForm(true)}
                className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Get Started
              </button>
            </motion.div>
          </div>
        </motion.section>
  
{/* About Section */}
<motion.section 
  id="about" 
  className="py-16 px-6 bg-gray-50 text-center dark:bg-slate-800" 
  initial="hidden" 
  whileInView="visible" 
  viewport={{ once: true }} 
  variants={fadeIn}
>
  <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
  <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-300 mb-4">
    Title 27, LLC is dedicated to delivering accurate and efficient title and closing services. With a focus on customer satisfaction and a deep understanding of Florida real estate law, we make the title process seamless for buyers, sellers, agents, and lenders.
  </p>
  <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-300">
    We proudly serve Doral, Miami, Hialeah and the greater Miami-Dade area with expert title insurance and real estate closing services. Whether you're buying a home in Coral Gables, refinancing in Hialeah, or closing on commercial property in Downtown Miami, our experienced team ensures a smooth, secure process.
  </p>
</motion.section>

  
        {/* Services Section */}
        <motion.section id="services" className="py-16 px-6 bg-white dark:bg-slate-900" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {["Title Insurance", "Escrow & Closings", "Lien & Title Search"].map((title) => (
              <motion.div key={title} variants={fadeIn} className="bg-slate-100 dark:bg-slate-800 p-6 rounded-xl shadow hover:shadow-md transition text-slate-700 dark:text-slate-100">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p>
                  {title === "Title Insurance" && "Protect your investment with title insurance from a trusted title company in Miami-Dade."}
                  {title === "Escrow & Closings" && "Protect your investment with title insurance from a trusted title company in Miami-Dade."}
                  {title === "Lien & Title Search" && "Get fast, accurate lien and title searches backed by Florida real estate expertise."}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
  
        {/* Contact Section */}
        <motion.section id="contact" className="py-16 px-6 bg-slate-100 dark:bg-slate-800 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-2 font-medium">📍 Address:</p>
          <p className="mb-4">3750 NW 87th Ave # 700, Doral, FL 33178</p>
          <p className="mb-2 font-medium">✉️ Email:</p>
          <p className="mb-4">
            <a href="mailto:contact@title27llc.com" className="text-blue-600 hover:underline">contact@title27llc.com</a>
          </p>
          <div className="mt-6 max-w-2xl mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18..."
              width="100%" height="300" allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" className="rounded-lg shadow"
            />
          </div>
          <div className="mt-6">
            <button onClick={() => setShowForm(true)} className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400">
              Send a Message
            </button>
          </div>
        </motion.section>
      </main>
  
      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t text-center text-sm text-slate-500 dark:text-slate-400 py-6">
        &copy; {new Date().getFullYear()} Title 27, LLC. All rights reserved.
      </footer>
  
      {/* Contact Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50" role="dialog" aria-modal="true">
          <div className="bg-white dark:bg-slate-800 dark:text-white rounded-xl shadow-xl p-6 w-full max-w-md relative">
            <button onClick={() => setShowForm(false)} className="absolute top-3 right-4 text-lg">×</button>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <form action="https://formspree.io/f/mkgjpzdp" method="POST" className="space-y-4">
              <label htmlFor="name" className="sr-only">Name</label>
              <input id="name" name="name" type="text" placeholder="Your Name" aria-label="Your Name" required className="w-full p-2 rounded border bg-white dark:bg-gray-700 text-black dark:text-white" />
              <label htmlFor="email" className="sr-only">Email</label>
              <input id="email" name="email" type="email" placeholder="Your Email" aria-label="Your Email" required className="w-full p-2 rounded border bg-white dark:bg-gray-700 text-black dark:text-white" />
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea id="message" name="message" placeholder="Your Message" aria-label="Your Message" required className="w-full p-2 rounded border bg-white dark:bg-gray-700 text-black dark:text-white h-24"></textarea>
              <div id="g-recaptcha" className="flex justify-center" />
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}