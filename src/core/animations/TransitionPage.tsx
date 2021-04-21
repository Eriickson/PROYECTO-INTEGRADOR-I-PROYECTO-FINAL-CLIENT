import React from "react";
import { motion } from "framer-motion";

// NextJS
import { NextPage } from "next";

export const TransitionPage: NextPage = ({ children }) => {
  return (
    <div className="transition-page">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {children}
      </motion.div>
    </div>
  );
};
