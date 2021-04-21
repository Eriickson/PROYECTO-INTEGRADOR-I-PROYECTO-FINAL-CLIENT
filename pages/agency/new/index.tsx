import React from "react";

// NextJS
import { NextPage } from "next";

// My Elements
export { NewAgencySsr as getServerSideProps } from "@/server";
import { NewAgencyPageProps } from "@/server";

// My Components
import { NewAgencyTemplate } from "@/templates";
import { SEO } from "@/components";

const NewAgencyPage: NextPage<NewAgencyPageProps> = () => {
  return (
    <SEO title="Crea tu agencia">
      <NewAgencyTemplate />
    </SEO>
  );
};

export default NewAgencyPage;
