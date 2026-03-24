import { motion } from "framer-motion"; import { useState } from "react";

export default function Portfolio() { const [menuOpen, setMenuOpen] = useState(false);

return ( <div className="bg-black text-white min-h-screen font-sans"> {/* Navbar */} <nav className="flex justify-between items-center p-5"> <h1 className="text-2xl font-bold">NotCoolGaming</h1> <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden"> ☰ </button> <ul className="hidden md:flex gap-6"> <li>Home</li> <li>Projects</li> <li>About</li> <li>Contact</li> </ul> </nav>

{/* Mobile Menu */}
  {menuOpen && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center gap-4 py-4 bg-gray-900 md:hidden"
    >
      <p>Home</p>
      <p>Projects</p>
      <p>About</p>
      <p>Contact</p>
    </motion.div>
  )}

  {/* Hero Section */}
  <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left h-[80vh] gap-10 px-6">
    <motion.img
      src="/avatar.png"
      alt="avatar"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="w-52 h-52 rounded-full border-4 border-white shadow-lg"
    />

    <div>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold"
      >
        NotCoolGaming
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-gray-400"
      >
        Minecraft Developer • Bot Developer • Hosting Developer
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        className="mt-6 px-6 py-3 bg-white text-black rounded-2xl"
      >
        View Projects
      </motion.button>
    </div>
  </section>

  {/* Skills */}
  <section className="p-10">
    <h2 className="text-3xl mb-6">My Skills</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {[
        "Minecraft Server Developer",
        "Minecraft Plugin Developer",
        "Hosting Developer",
        "Discord Server Developer",
        "Discord Bot Developer"
      ].map((skill, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          className="bg-gray-900 p-6 rounded-2xl shadow-lg"
        >
          <h3 className="text-lg font-bold">{skill}</h3>
        </motion.div>
      ))}
    </div>
  </section>

  {/* Projects Section */}
  <section className="p-10 bg-gray-900">
    <h2 className="text-3xl mb-6">Projects</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {[
        "NexusNodes Hosting",
        "Discord Bots (MineCore, FlexPrime)",
      ].map((proj, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          className="bg-black p-6 rounded-2xl shadow-lg"
        >
          <h3 className="text-xl font-bold">{proj}</h3>
          <p className="text-gray-400 mt-2">
            High-quality advanced system with full features.
          </p>
        </motion.div>
      ))}
    </div>
  </section>

  {/* About */}
  <section className="p-10">
    <h2 className="text-3xl mb-4">About Me</h2>
    <p className="text-gray-400 max-w-2xl">
      I am a professional developer specializing in Minecraft servers, custom plugins, Discord bots, and hosting solutions. I build high-performance systems with modern UI and powerful backend features.
    </p>
  </section>

  {/* Contact */}
  <section className="p-10 bg-gray-900">
    <h2 className="text-3xl mb-4">Contact</h2>
    <input placeholder="Your Email" className="p-3 w-full mb-3 bg-black rounded" />
    <textarea placeholder="Message" className="p-3 w-full mb-3 bg-black rounded" />
    <button className="px-6 py-3 bg-white text-black rounded-2xl">Send</button>
  </section>

  {/* Footer */}
  <footer className="text-center p-5 text-gray-500">
    © 2026 NotCoolGaming
  </footer>
</div>

); }
