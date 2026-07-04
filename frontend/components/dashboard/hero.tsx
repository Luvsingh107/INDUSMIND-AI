"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [greeting, setGreeting] = useState("Welcome");

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour < 12) {
      setGreeting("Good Morning");
    } else if (hour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-3"
    >
      <h1 className="text-4xl font-bold tracking-tight">
        {greeting}, Luv 👋
      </h1>

      <p className="text-lg text-slate-500">
        Welcome back to <strong>INDUSMIND AI</strong>.
      </p>

      <p className="text-slate-500">
        Here's today's industrial intelligence overview.
      </p>
    </motion.div>
  );
}