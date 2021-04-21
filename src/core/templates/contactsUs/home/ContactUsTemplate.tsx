import React, { useState } from "react";

// GraphQL
import { graphqlClient, CONTACTS_US_M, IContactsUsPayload } from "@/graphql";

// Redux
import { useActions } from "@/store/hooks";

// My Components
import { MainLayout } from "@/layouts";
import { Card, Alert, ScreenLoader } from "@/components";
import ContactForm, { IContactForm } from "./ContactForm";
import ContactDetails from "./ContactDetails";
import Router from "next/router";

export const ContactUsTemplate: React.FC = () => {
  const { setGeneralError } = useActions();
  const [msgSent, setMsgSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(values: IContactForm) {
    setIsLoading(true);
    try {
      await graphqlClient<IContactsUsPayload>({
        query: CONTACTS_US_M,
        variables: { userInfo: { ...values, theme: values.theme.label } },
      });
      setMsgSent(true);
      setIsLoading(false);
    } catch (err) {
      setGeneralError(true);
      setIsLoading(false);
    }
  }

  return (
    <MainLayout>
      <Card>
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2"></div>
        </div>
        <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
          <ContactDetails />
          <ContactForm onSubmit={onSubmit} />
        </div>
      </Card>
      <Alert
        type="SUCCESS"
        labelBtnPri="Aceptar"
        state={msgSent}
        setState={setMsgSent}
        message="Se le dará respuesta por su número de teléfono o correo electrónico."
        title="Mensaje recibido"
        name="contact-us"
        onBtnPri={() => Router.push("/")}
      />
      <ScreenLoader isLoading={isLoading} msg="Enviando mensaje" />
    </MainLayout>
  );
};
