"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: .4 }}
      className="space-y-4"
    >
      <div>

        <p className="text-sm font-medium uppercase tracking-wide text-blue-600">
          Industrial Intelligence Platform
        </p>

        <h1 className="mt-2 text-5xl font-bold tracking-tight">

          Welcome back, Luv 👋

        </h1>

      </div>

      <p className="max-w-3xl text-lg leading-8 text-slate-500">

        Everything your plant knows.

        Connected.

        Understood.

        Actionable.

      </p>

    </motion.div>
  );
}