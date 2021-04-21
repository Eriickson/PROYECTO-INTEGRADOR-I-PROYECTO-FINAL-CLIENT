import React from "react";

// NextJS
import { NextPage } from "next";

// Redux
import { useActions } from "../../../src/store/hooks";

// My Elements
export { NewPageSsr as getServerSideProps } from "@/server";
import { NewPageProps } from "@/server";

// My Components
import { NewPostTemplate } from "@/templates";
import { SEO } from "@/components";

const NewPostPage: NextPage<NewPageProps> = ({ initialState }) => {
  const { setInitialStateNewPostAction } = useActions();

  setInitialStateNewPostAction(initialState);

  return (
    <SEO title="Agregar nuevo vehículo">
      <NewPostTemplate />
    </SEO>
  );
};

export default NewPostPage;
