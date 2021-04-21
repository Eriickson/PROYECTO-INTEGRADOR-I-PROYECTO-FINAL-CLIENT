import React, { useEffect, useState } from "react";

// NextJS
import { useRouter } from "next/router";

// Packages
import StickyBox from "react-sticky-box";

// GraphQL
import { graphqlClient, SEARCH_POST_Q, ISearchPostsPayload } from "@/graphql";

// Redux
import { useActions } from "@/store/hooks";

// Styles and Icons
import { IconFilter } from "@tabler/icons";

// My Components
import { PanelComponent, ScreenLoader } from "@/components";
import { FilterForm, IOnSearch } from "./FilterForm";
import { LayoutModalSm } from "@/layouts";

export const Filter: React.FC = () => {
  const { setFoundVehicles, setGeneralError } = useActions();
  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { query } = useRouter();

  async function onSearch(searchPostFilter: IOnSearch) {
    setModal(false);
    setIsLoading(true);

    try {
      const { searchPosts } = await graphqlClient<ISearchPostsPayload>({
        query: SEARCH_POST_Q,
        variables: {
          searchPostFilter: searchPostFilter,
        },
      });

      setFoundVehicles(searchPosts.posts, searchPosts.brandModels, searchPosts.typesModels);
      setIsLoading(false);
    } catch (err) {
      setGeneralError(true);
    }
  }

  useEffect(() => {
    const filter = {};
    if (query.minPrice) Object.assign(filter, { minPrice: parseInt(String(query.minPrice)) });
    if (query.maxPrice) Object.assign(filter, { maxPrice: parseInt(String(query.maxPrice)) });
    if (query.minYear) Object.assign(filter, { minYear: parseInt(String(query.minYear)) });
    if (query.maxYear) Object.assign(filter, { maxYear: parseInt(String(query.maxYear)) });
    if (query.brand) Object.assign(filter, { brand: query.brand });
    if (query.model) Object.assign(filter, { model: query.model });
    if (query.typeModel) Object.assign(filter, { typeModel: query.typeModel });
    if (query.vehicleCategory) Object.assign(filter, { vehicleCategory: query.vehicleCategory });
    if (query.province) Object.assign(filter, { province: query.province });
    if (query.condition) Object.assign(filter, { condition: query.condition });
    if (query.createdAt) Object.assign(filter, { createdAt: `${query.createdAt}`.replace(/\./g, "-") });
    onSearch({ ...filter });
  }, [query]);

  return (
    <>
      <div className="hidden col-span-4 xl:col-span-3 md:block">
        <StickyBox offsetTop={20}>
          <PanelComponent title="Buscar vehículos">
            <FilterForm onSearch={onSearch} />
          </PanelComponent>
        </StickyBox>
      </div>
      <div className="fixed z-10 md:hidden bottom-14 right-4">
        <button className="cursor-pointer btn icon pri lg" onClick={() => setModal(!modal)}>
          <IconFilter />
        </button>
      </div>
      <LayoutModalSm state={modal} setState={setModal}>
        <div className="flex items-center h-full">
          <PanelComponent title="Buscar vehículos">
            <FilterForm onSearch={onSearch} />
          </PanelComponent>
        </div>
      </LayoutModalSm>
      <ScreenLoader msg="Buscando publicaciones" isLoading={isLoading} />
    </>
  );
};
