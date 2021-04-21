import React from "react";

// Packages
import ReactInputMask from "react-input-mask";

const PhoneInput: React.FC = props => {
  return <ReactInputMask {...props} name="" className="w-full form-control" mask="+4\9 99 999 99" />;
};

export default PhoneInput;
