import React from "react";

// NextJS
import { NextPage } from "next";

// Redux
import { useActions } from "@/store/hooks";

// My Elements
export { PostSsr as getServerSideProps } from "@/server";
import { PostPageProps } from "@/server";

// My Components
import { PostTemplate } from "@/templates";
import { SEO } from "@/components";

const PostPage: NextPage<PostPageProps> = ({ post }) => {
  const { setPost } = useActions();

  setPost(post);

  return (
    <SEO title={post.title}>
      <PostTemplate />
    </SEO>
  );
};

export default PostPage;
