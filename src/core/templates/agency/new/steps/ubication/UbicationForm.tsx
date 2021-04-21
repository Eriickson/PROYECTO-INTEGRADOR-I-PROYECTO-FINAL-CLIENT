import React, { useEffect, useState } from "react";

// Packages
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import combineQuery from "graphql-combine-query";

// GraphQL
import { GET_PROVINCES_Q, GET_MUNICIPALITIES_Q, GET_SECTORS_Q, graphqlClient } from "@/graphql";

// Redux
import { useActions, useSelector } from "@/store/hooks";

// My Components
import { IOption } from "@/models";
import { ErrorComponent, LabelInput, Select } from "@/components";

const schema = yup.object().shape({
  province: yup
    .object()
    .shape({
      label: yup.string().required("Campo requerido"),
      value: yup.string().required("Campo requerido"),
    })
    .nullable(),
  municipality: yup
    .object()
    .shape({
      label: yup.string().required("Campo requerido"),
      value: yup.string().required("Campo requerido"),
    })
    .nullable(),
  sector: yup
    .object()
    .shape({
      label: yup.string().required("Campo requerido"),
      value: yup.string().required("Campo requerido"),
    })
    .nullable(),
  reference: yup.string().required("Campo requerido"),
});

const UbicationForm: React.FC = () => {
  const { addNewAgencyData, setGeneralError } = useActions();
  const { ubication } = useSelector(store => store.agency.newAgency.data);
  const [provinces, setProvinces] = useState<IOption[]>([]);
  const [municipalities, setMunicipalities] = useState<IOption[]>([]);
  const [sectors, setSectors] = useState<IOption[]>([]);
  const methods = useForm({ resolver: yupResolver(schema) });

  async function getInitialState() {
    const { document: DOCUMENT_Q } = combineQuery("initialState")
      .add(GET_PROVINCES_Q)
      .add(GET_MUNICIPALITIES_Q)
      .add(GET_SECTORS_Q);

    try {
      const { getProvinces, getMunicipalities, getSectors } = await graphqlClient<{
        getProvinces: IOption[];
        getMunicipalities: IOption[];
        getSectors: IOption[];
      }>({
        query: DOCUMENT_Q,
        variables: {
          provinceId: ubication?.province?.value,
          municipalityId: ubication?.municipality?.value,
        },
      });

      setProvinces(getProvinces);
      setMunicipalities(getMunicipalities);
      setSectors(getSectors);
    } catch (err) {
      setGeneralError(true);
    }
  }

  useEffect(() => {
    getInitialState();
  }, []);

  return (
    <FormProvider {...methods}>
      <form
        id="form-ubication"
        onSubmit={methods.handleSubmit(data => {
          addNewAgencyData({
            ubication: data,
          });
        })}
      >
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12 md:col-span-4">
            <LabelInput label="Provincia" required />
            <Select
              name="province"
              options={provinces}
              defaultValue={ubication?.province}
              onChange={async ({ value }) => {
                const { getMunicipalities } = await graphqlClient<{ getMunicipalities: IOption[] }>({
                  query: GET_MUNICIPALITIES_Q,
                  variables: {
                    provinceId: value,
                  },
                });
                setMunicipalities(getMunicipalities);
                methods.setValue("municipality", null);
                methods.setValue("sector", null);
              }}
            />
          </div>
          <div className="col-span-12 md:col-span-4">
            <LabelInput label="Municipio" required />
            <Select
              name="municipality"
              options={municipalities}
              defaultValue={ubication?.municipality as IOption}
              onChange={async ({ value }) => {
                const { getSectors } = await graphqlClient<{ getSectors: IOption[] }>({
                  query: GET_SECTORS_Q,
                  variables: {
                    municipalityId: value,
                  },
                });
                setSectors(getSectors);

                methods.setValue("sector", null);
              }}
            />
          </div>
          <div className="col-span-12 md:col-span-4">
            <LabelInput label="Sector" required />
            <Select name="sector" options={sectors} defaultValue={ubication?.sector as IOption} />
          </div>
          <div className="col-span-12">
            <LabelInput label="Referencia" required />
            <input
              id="reference"
              name="reference"
              type="text"
              className={`w-full form-control ${methods.errors.reference && "danger"}`}
              placeholder="Referencia..."
              ref={methods.register}
              defaultValue={ubication?.reference}
            />
            <ErrorComponent error={methods.errors} name="reference" />
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default UbicationForm;
