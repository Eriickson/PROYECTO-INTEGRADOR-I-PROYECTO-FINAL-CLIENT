import React from "react";

// Redux
import { useActions } from "@/store/hooks";

// My Elements
export { AppSsr as getServerSideProps } from "@/server";
import { AppPageProps } from "@/server";

// My Components
import { AppTemplate } from "@/templates";
import { SEO } from "@/components";

const Index: React.FC<AppPageProps> = ({ myAgency, myPosts }) => {
  const { setMyAgency } = useActions();

  setMyAgency(myAgency, myPosts);

  return (
    <SEO title="App">
      <AppTemplate />
    </SEO>
  );
};

export default Index;
