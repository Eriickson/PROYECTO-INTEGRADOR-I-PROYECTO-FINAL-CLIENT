import React from "react";

// NextJS
import { NextPage } from "next";

// My Components
import { ContactUsTemplate } from "@/templates";
import { SEO } from "@/components";

const ContactUsPage: NextPage = () => {
  return (
    <SEO title="Contactanos y habla con nosotros">
      <ContactUsTemplate />
    </SEO>
  );
};

export default ContactUsPage;
