import React from "react";

// Styles and Icons
import { IconDeviceFloppy, IconDiscount2, IconMessageCircle } from "@tabler/icons";

const ContactOwner: React.FC = () => {
  return (
    <div className="flex justify-end space-x-2">
      <button className="btn pri max-w-max danger icon outline">
        <IconDeviceFloppy className="w-5 h-5" />
      </button>
      <button className="flex-1 btn pri max-w-max warning icon right">
        Proponer oferta
        <IconDiscount2 />
      </button>
      <button className="flex-1 btn pri max-w-max icon right">
        Contactar
        <IconMessageCircle />
      </button>
    </div>
  );
};

export default ContactOwner;
