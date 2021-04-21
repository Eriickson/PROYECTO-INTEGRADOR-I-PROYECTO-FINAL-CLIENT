import React from "react";

// NextJS
import { NextPage } from "next";

// Redux
import { useActions } from "@/store/hooks";

// My Elements
export { ProfileSsr as getServerSideProps } from "@/server";
import { ProfilePageProps } from "@/server";

// My Components
import { ProfileTemplate } from "@/templates";
import { SEO } from "@/components";

// Types and Interface

const ProfilePage: NextPage<ProfilePageProps> = ({ ...props }) => {
  const { setUserProfile } = useActions();
  setUserProfile({ ...props });

  return (
    <SEO title="Erickson manuel">
      <ProfileTemplate />
    </SEO>
  );
};

export default ProfilePage;
