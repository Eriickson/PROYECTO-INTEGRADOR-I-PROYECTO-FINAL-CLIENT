import React from "react";

// NextJS
import { NextPage } from "next";

// My Elements
// export {  as getServerSideProps } from "@/server";
import { SEO } from "@/components";

// My Components
import { SendTemplate } from "@/templates";

const SendPage: NextPage = () => {
  return (
    <SEO title="Envíar código de registro">
      <SendTemplate />
    </SEO>
  );
};

export default SendPage;
