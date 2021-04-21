import React from "react";

// Redux
import { useSelector } from "@/store/hooks";

// My Components
import ListingTemplate from "./ListingTemplate";

const Listings: React.FC = () => {
  const { post } = useSelector(({ post }) => post);

  return (
    <>
      <ListingTemplate name="Características" list={post?.features.map(feature => feature.label) || []} />
      <ListingTemplate name="Accesorios" list={post?.accessories.map(accessory => accessory.label) || []} />
      <ListingTemplate name="Incluido" list={post?.includeds.map(included => included.label) || []} />
    </>
  );
};

export default Listings;
