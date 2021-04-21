import React from "react";

// NextJS
import { NextPage } from "next";

// Redux
import { useActions } from "@/store/hooks";

// My Elements
export { AgencyProfileSsr as getServerSideProps } from "@/server";
import { AgencyProfilePageProps } from "@/server";

// My Components
import { AgencyTemplate } from "@/templates";
import { SEO } from "@/components";

const AgencyPage: NextPage<AgencyProfilePageProps> = ({ getAgencyProfile }) => {
  const { setAgencyProfile } = useActions();

  setAgencyProfile(getAgencyProfile.agency, getAgencyProfile.posts);

  return (
    <SEO title={`${getAgencyProfile.agency.name} - ${getAgencyProfile.agency.slogan}`}>
      <AgencyTemplate />
    </SEO>
  );
};

export default AgencyPage;
