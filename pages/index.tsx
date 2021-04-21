import React from "react";

// NextJS
import { NextPage } from "next";

// Redux
import { useActions } from "@/store/hooks";

// My Elements
export { HomeSsr as getServerSideProps } from "@/server";
import { HomePageProps } from "@/server";

// My Components
import { HomeTemplate } from "@/templates";
import { SEO } from "@/components";

const HomePage: NextPage<HomePageProps> = ({ recentPosts }) => {
  const { setRecentPost } = useActions();

  setRecentPost(recentPosts);

  return (
    <SEO title="Inicio">
      <HomeTemplate />
    </SEO>
  );
};

export default HomePage;
