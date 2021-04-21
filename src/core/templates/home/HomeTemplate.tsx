import React from "react";

// Packages
import { useSession } from "next-auth/client";

// My Components
import { MainLayout } from "@/layouts";
import MainCover from "./MainCover";
import FeaturedPosts from "./FeaturedPosts";
import Filter from "./filter/Filter";
import RecentPosts from "./RecentPosts";
import PopularBrands from "./PopularBrands";
import CardLogin from "./CardLogin";
import Advantage from "./Advantage";
import BannerCreateAgency from "./BannerCreateAgency";
import MakePost from "./MakePost";

export const HomeTemplate: React.FC = () => {
  const [session] = useSession();

  return (
    <MainLayout>
      <div className="space-y-2">
        <MainCover />
        <Filter />
        <FeaturedPosts />
        <Advantage />
        <RecentPosts />
        <PopularBrands />
        {!session?.user && <CardLogin />}
        {session?.user && !session.user.agencyId && <BannerCreateAgency />}
        {session?.user && session.user.agencyId && <MakePost />}
      </div>
    </MainLayout>
  );
};
