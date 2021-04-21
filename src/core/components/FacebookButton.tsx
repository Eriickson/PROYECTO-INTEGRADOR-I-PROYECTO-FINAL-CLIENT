import React from "react";

// Packages
import { signIn } from "next-auth/client";

// Redux
import { useSelector } from "@/store/hooks";

// My Elements
import { FacebookIcon } from "src/assets/icons";

interface FacebookButtonProps {
  label?: string;
}

export const FacebookButton: React.FC<FacebookButtonProps> = ({ label }) => {
  const { providers } = useSelector(({ auth }) => auth);

  return (
    <div>
      <button
        className="flex items-center w-full py-2 pl-2 duration-150 hover:opacity-75"
        style={{ backgroundColor: "#395693" }}
        onClick={() => {
          signIn(providers?.facebook.id);
        }}
      >
        <div className="mr-3 bg-white rounded-md">
          <FacebookIcon />
        </div>{" "}
        <span className="ml-6 text-sm text-white">{label || "Continua con Facebook"}</span>
      </button>
    </div>
  );
};
