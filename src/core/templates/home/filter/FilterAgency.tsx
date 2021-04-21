import React, { useState } from "react";

// GraphQL
import { graphqlClient, SEARCH_AGENCY_Q, ISearchAgency } from "@/graphql";
import Link from "next/link";

// Redux
import { useActions } from "@/store/hooks";

// My Elements
import { IAgency, IFilterAgency } from "@/shared";

// My Components
import { Image } from "@/components";
import FormFilterAgency from "./FormFilterAgency";

const FilterAgency: React.FC = () => {
  const { setGeneralError } = useActions();
  const [agenciesFound, setAgenciesFound] = useState<IAgency[] | null>();

  async function onSearch(newFilter: IFilterAgency) {
    if (!newFilter.name) {
      setAgenciesFound(null);
      return;
    }

    try {
      const { searchAgency } = await graphqlClient<ISearchAgency>({
        query: SEARCH_AGENCY_Q,
        variables: {
          filter: newFilter,
        },
      });

      setAgenciesFound(searchAgency);
    } catch (err) {
      setGeneralError(true);
    }
  }

  return (
    <div className="relative">
      <FormFilterAgency onSearch={onSearch} />
      {agenciesFound && (
        <div className="absolute z-10 grid w-full grid-cols-12 gap-3 top-40 md:top-16">
          <div className="col-span-12 bg-white border-2 xl:col-span-6 border-pri-500">
            <div className="flex justify-between p-2">
              <strong className="text-sm leading-6">
                {agenciesFound.length === 1
                  ? `${agenciesFound.length} Agencia encontrada`
                  : `${agenciesFound.length} Agencias encontradas`}
              </strong>
              <button className="btn danger sm borderless" onClick={() => setAgenciesFound(null)}>
                Cerrar filtro
              </button>
            </div>
            <ul className="space-y-1">
              {agenciesFound?.map((agency, i) => (
                <li key={i}>
                  <Link href={`/agency/${agency.uuid}/${agency.slug}`}>
                    <a className="flex items-center px-2 py-2 space-x-3 duration-100 hover:bg-pri-500 hover:text-white">
                      <Image src={agency.logo} resolution="x50" />
                      <div>
                        <div className="flex items-center">
                          <strong>{agency.name}</strong>
                          <img
                            className="w-3.5 h-3.5 ml-1"
                            src="https://www.flaticon.com/svg/vstatic/svg/1828/1828640.svg?token=exp=1615816431~hmac=47b51c915e3d84927c19be6e2ae32cbd"
                            alt=""
                          />
                        </div>
                        <p className="text-sm">{agency.slogan}</p>
                      </div>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            {/* <li className="px-2.5 py-3 duration-100 hover:bg-pri-500 hover:text-white">
              No se han encontrado agencias
            </li> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterAgency;
