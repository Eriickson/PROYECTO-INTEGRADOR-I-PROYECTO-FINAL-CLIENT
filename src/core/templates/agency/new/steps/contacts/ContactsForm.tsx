import React, { useState } from "react";

// Packages
import { useForm } from "react-hook-form";

// Redux
import { useActions, useSelector } from "@/store/hooks";

// My Components
import NewContact from "./NewContact";
import { ErrorComponent } from "@/components";
import { IOption } from "@/models";

const ContactsForm: React.FC = () => {
  const { addNewAgencyData } = useActions();
  const { contacts } = useSelector(store => store.agency.newAgency.data);
  const { errors, handleSubmit, setError, clearErrors } = useForm();
  const [newContacts, setNewContacts] = useState<{ numberPhones: IOption[]; emails: IOption[] }>({
    numberPhones: contacts?.numberPhones || [],
    emails: contacts?.emails || [],
  });

  async function onSubmit() {
    if (!newContacts.emails.length) {
      setError("emails", { message: "Se debe agregar almenos 1 correo electrónico" });
    }

    if (newContacts.numberPhones.length < 2) {
      setError("numberPhones", { message: "Se debe agregar almenos 2 números telefónicos" });
      return;
    }

    addNewAgencyData({ contacts: newContacts });
  }

  return (
    <>
      <div className="grid max-w-4xl grid-cols-12 gap-3 mx-auto">
        <div className="col-span-12 md:col-span-6">
          <NewContact
            name="numberPhones"
            legend="Números de teléfonos"
            mask="+1 (899) 999-9999"
            typeContact="numberPhone"
            defaultValues={contacts?.numberPhones}
            addNewContact={newContact => {
              const newNumberPhones = [...newContacts?.numberPhones, newContact];
              setNewContacts({
                ...newContacts,
                numberPhones: newNumberPhones,
              });
              clearErrors("numberPhones");
            }}
          />
          <ErrorComponent name="numberPhones" error={errors} />
        </div>
        <div className="col-span-12 md:col-span-6">
          <NewContact
            name="emails"
            legend="Correos electrónicos"
            mask=""
            typeContact="email"
            defaultValues={contacts?.emails}
            addNewContact={newContact => {
              const newEmails = [...newContacts?.emails, newContact];
              setNewContacts({
                ...newContacts,
                emails: newEmails,
              });
              clearErrors("emails");
            }}
          />
          <ErrorComponent name="emails" error={errors} />
        </div>
      </div>
      <form id="form-contacts" onSubmit={handleSubmit(onSubmit)}></form>
    </>
  );
};

export default ContactsForm;
