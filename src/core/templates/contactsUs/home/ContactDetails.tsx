import { IconMail, IconPhone } from "@tabler/icons";
import React from "react";

// Styles and Icons

const ContactDetails: React.FC = () => {
  return (
    <div className="px-4 py-16 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Contáctanos</h2>
        <p className="mt-3 text-lg leading-6 text-gray-500">
          Comunícate con nosotros cuando gustes, te atenderemos lo más pronto posible.
        </p>
        <dl className="mt-8 text-base text-gray-500">
          {/* <div>
            <dt className="sr-only">Postal address</dt>
            <dd>
              <p>742 Evergreen Terrace</p>
              <p>Springfield, OR 12345</p>
            </dd>
          </div> */}
          <div className="mt-6">
            <dt className="sr-only">Phone number</dt>
            <dd className="flex">
              <IconPhone />
              <span className="ml-3">+1 (555) 123-4567</span>
            </dd>
          </div>
          <div className="mt-3">
            <dt className="sr-only">Email</dt>
            <dd className="flex">
              <IconMail />
              <span className="ml-3">support@example.com</span>
            </dd>
          </div>
        </dl>
        {/* <p className="mt-6 text-base text-gray-500">
          Looking for careers?
          <a href="#" className="font-medium text-gray-700 underline">
            View all job openings
          </a>
          .
        </p> */}
      </div>
    </div>
  );
};

export default ContactDetails;
