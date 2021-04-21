import { GetServerSideProps } from "next";

// GraphQL
import { graphqlClient, GET_RECENT_POSTS_Q, IGetRecentPosts } from "@/graphql";
import { IPost } from "@/shared";

export interface HomePageProps {
  recentPosts: IPost[];
}

export const HomeSsr: GetServerSideProps = async () => {
  try {
    const { getRecentPosts } = await graphqlClient<IGetRecentPosts>({ query: GET_RECENT_POSTS_Q });

    const props: HomePageProps = {
      recentPosts: getRecentPosts.posts,
    };

    return { props };
  } catch (err) {
    throw new Error(err);
  }
};
