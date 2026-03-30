"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import FooterSimple from "@/components/ui/FooterSimple";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("https://formspree.io/f/mdapgkbb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Message sent successfully ✅");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Something went wrong ❌");
      }
    } catch (error) {
      setStatus("Network error ❌");
    }

    setLoading(false);
  };

  return (
    <>
      <section className="relative min-h-screen px-6 py-32 overflow-hidden">

        {/* background glow */}
        <div className="absolute w-[700px] h-[700px] bg-indigo-500 blur-[220px] opacity-20 rounded-full -top-20 left-0"/>
        <div className="absolute w-[600px] h-[600px] bg-green-400 blur-[220px] opacity-20 rounded-full bottom-0 right-0"/>

        <div className="max-w-6xl mx-auto relative z-10">

          {/* heading */}
          <motion.div
            initial={{opacity:0,y:40}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.6}}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
              Contact Me
            </h1>

            <p className="text-gray-400 mt-6 max-w-xl mx-auto">
              Have a project idea or collaboration?  
              Send me a message and let's build something amazing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{opacity:0,x:-40}}
              animate={{opacity:1,x:0}}
              transition={{duration:0.6}}
              className="space-y-6"
              autoComplete="off"
            >

              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-indigo-400 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-indigo-400 outline-none"
              />

              <textarea
                placeholder="Your Message"
                rows={6}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-indigo-400 outline-none"
              />

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 rounded-xl transition flex items-center justify-center gap-2
                  ${loading 
                    ? "bg-gray-600 cursor-not-allowed" 
                    : "bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90"
                  }`}
              >
                {loading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              {/* Status Message */}
              {status && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-center text-gray-300"
                >
                  {status}
                </motion.p>
              )}

            </motion.form>

            {/* Contact Info */}
            <motion.div
              initial={{opacity:0,x:40}}
              animate={{opacity:1,x:0}}
              transition={{duration:0.6}}
              className="space-y-10"
            >

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-300">
                  <Mail/>
                  danish.pv999@gmail.com
                </div>

                <div className="flex items-center gap-4 text-gray-300">
                  <Phone/>
                  +91 7994890280
                </div>
              </div>

              {/* socials */}
              <div className="flex gap-6">
                <a
                  href="https://github.com/dk-pv"
                  target="_blank"
                  className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-400 transition"
                >
                  <Github/>
                </a>

                <a
                  href="https://www.linkedin.com/in/danish-pv/"
                  target="_blank"
                  className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-400 transition"
                >
                  <Linkedin/>
                </a>
              </div>

            </motion.div>

          </div>

        </div>
      </section>

      <FooterSimple/>
    </>
  );
}