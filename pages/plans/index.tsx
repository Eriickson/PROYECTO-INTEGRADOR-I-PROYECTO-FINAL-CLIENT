import { SEO } from "@/components";
import { PlansTemplate } from "@/templates";
import React from "react";

// NextJS
import { NextPage } from "next";

// My Elements
export { PlanSsr as getServerSideProps } from "@/server";
import { PlanPageProps } from "@/server";

const PlanPage: NextPage<PlanPageProps> = ({plans}) => {
  console.log(plans);

  
  return (
    <SEO title="Planes">
      <PlansTemplate plans={plans} />
    </SEO>
  );
};

export default PlanPage;
