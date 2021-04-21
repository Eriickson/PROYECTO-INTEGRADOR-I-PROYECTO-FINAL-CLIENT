import React from "react";

// Styles and Icons
import { IconAlertTriangle } from "@tabler/icons";
import { motion, AnimatePresence } from "framer-motion";

// Types and Interfaces
interface ErrorComponentProps {
  name: string;

  /*eslint-disable @typescript-eslint/no-explicit-any*/
  error: any;
}

export const ErrorComponent: React.FC<ErrorComponentProps> = ({ name, error }) => {
  const comodinError: any = error;
  return (
    <AnimatePresence>
      {comodinError[name] && (
        <motion.p
          initial={{ height: 0 }}
          animate={{ height: "max-content" }}
          exit={{ height: 0 }}
          transition={{ ease: "linear", duration: 0.15 }}
          className="flex items-center overflow-hidden text-sm font-medium text-right text-danger-500 animate-pulse pt-0.5 -ml-0.5 select-none"
        >
          <IconAlertTriangle className="w-5 mr-1" />
          {comodinError[name]?.message}
        </motion.p>
      )}
    </AnimatePresence>
  );
};
