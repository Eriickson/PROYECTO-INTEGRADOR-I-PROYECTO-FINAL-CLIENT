import React from "react";

// Packages
import { AnimatePresence, motion } from "framer-motion";

// Redux
import { useSelector, useActions } from "src/store/hooks";

// Styles and Icons
import { IconAlertOctagon, IconX } from "@tabler/icons";

export const TopAlertBanner: React.FC = () => {
  const { bannerAlert } = useSelector(({ ui }) => ui);
  const { setAlertBanner } = useActions();

  return (
    <AnimatePresence>
      {bannerAlert.isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "linear" }}
        >
          <div
            className={`${bannerAlert.type === "DANGER" && "bg-danger-500"} ${
              bannerAlert.type === "WARNING" && "bg-warning-500"
            } ${bannerAlert.type === "SUCCESS" && "bg-success-500"}`}
          >
            <div className="container flex items-center justify-between py-2 text-white md:py-3">
              <IconAlertOctagon className="w-5 h-5 mr-2 md:w-6 md:h-6" />
              <p className="w-full text-center tex-sm md:text-base">{bannerAlert.message}</p>
              <button onClick={() => setAlertBanner({ isActive: false, message: "", type: "SUCCESS" })}>
                <IconX className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
