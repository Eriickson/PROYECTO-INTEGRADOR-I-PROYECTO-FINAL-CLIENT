import React from "react";
import { FormSignin } from "./FormSignin";

// Packages
import axios from "axios";

// Redux
import { useSelector } from "@/store/hooks";

export const SignInSection: React.FC = () => {
  const { csrfToken } = useSelector(({ auth }) => auth);

  return (
    <div>
      <FormSignin
        onSubmit={async credentials => {
          try {
            const { data } = await axios.post("http://localhost:8080/api/auth/callback/credentials", {
              ...credentials,
              csrfToken,
            });
            const errorMessage = data.substring(data.lastIndexOf("start@@@") + 9, data.lastIndexOf("end@@@"));
            console.log(errorMessage);
            console.log(data);

            // Router.reload();
          } catch (err) {
            // setGeneralError(true);
          }
        }}
      />
    </div>
  );
};
