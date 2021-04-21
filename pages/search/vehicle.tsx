import React, { useEffect, useState } from "react";

// My Elements
export { SearchVehicleSsr as getServerSideProps } from "@/server";
import { SearchVehiclePageProps } from "@/server";

// My Components
import { VehicleTemplate } from "@/templates";
import { SEO } from "@/components";
import { useRouter } from "next/router";

const SearchVehicle: React.FC<SearchVehiclePageProps> = () => {
  const [titlePage, setTitlePage] = useState("");
  const { query } = useRouter();

  useEffect(() => {
    let queryString = "Buscando vehículos";

    if (query.brand) queryString = queryString.concat(` ${query.brand}`);
    if (query.model) queryString = queryString.concat(` ${query.model}`);
    if (query.minYear) queryString = queryString.concat(` del año ${query.minYear}`);
    if (query.maxYear) queryString = queryString.concat(` hasta el ${query.maxYear}`);
    setTitlePage(queryString);

    // const stringQuery =
  }, []);

  return (
    <SEO title={titlePage}>
      {/*  */}
      <VehicleTemplate />
      {/*  */}
    </SEO>
  );
};

export default SearchVehicle;
