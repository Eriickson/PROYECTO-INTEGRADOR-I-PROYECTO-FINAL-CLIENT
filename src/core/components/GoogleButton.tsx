import React from "react";

// Packages
import { signIn } from "next-auth/client";

// Redux
import { useSelector } from "@/store/hooks";

// My Elements
import { GoogleIcon } from "src/assets/icons";

interface GoogleButtonProps {
  label?: string;
}

export const GoogleButton: React.FC<GoogleButtonProps> = ({ label }) => {
  const { providers } = useSelector(({ auth }) => auth);

  return (
    <div className="shadow-md">
      <button
        className="flex items-center justify-between w-full duration-150 border-2 border-transparent rounded-sm shadow select-none hover:text-white hover:bg-pri-500 hover:border-pri-500"
        onClick={() => {
          signIn(providers?.google.id);
        }}
      >
        <div className="p-2 bg-white rounded-sm">
          <GoogleIcon />
        </div>
        <p className="py-2 text-sm font-medium">{label || "Continua con Google"}</p>
        <div className="invisible p-2 bg-white rounded-sm ">
          <GoogleIcon />
        </div>
      </button>
    </div>
  );
};
