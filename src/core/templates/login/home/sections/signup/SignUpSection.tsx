import React from "react";
import { SendForm } from "src/core/templates/signup/send/SendForm";

export const SignUpSection: React.FC = () => {
  return (
    <div>
      <SendForm onSubmit={async () => {}} />
    </div>
  );
};
