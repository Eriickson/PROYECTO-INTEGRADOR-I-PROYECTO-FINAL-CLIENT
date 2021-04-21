import { GetServerSideProps } from "next";

// Packages
import { getSession } from "next-auth/client";

// GraphQL
import combineQuery from "graphql-combine-query";
import { graphqlClient, GET_MY_AGENCY_Q, GET_MY_POSTS, IGetMyAgencyPayload, IGetMyPostsPayload } from "@/graphql";
import { IAgency, IPost } from "@/shared";

/* eslint-disable @typescript-eslint/no-empty-interface*/
export interface AppPageProps {
  myAgency: IAgency;
  myPosts: IPost[];
}

export const AppSsr: GetServerSideProps = async ctx => {
  const session = await getSession(ctx);

  if (!session || !session.user.agencyId) {
    ctx.res.writeHead(302, { Location: "/" });
    ctx.res.end();
    return { props: {} };
  }
  const { document: DOCUMENT_Q } = combineQuery("initialState").add(GET_MY_AGENCY_Q).add(GET_MY_POSTS);

  try {
    const { getMyAgency, getMyPosts } = await graphqlClient<IGetMyAgencyPayload & IGetMyPostsPayload>({
      query: DOCUMENT_Q,
      variables: {
        userId: session?.user.userId,
        agencyId: session?.user.agencyId,
      },
    });

    const props: AppPageProps = {
      myAgency: getMyAgency.myAgency,
      myPosts: getMyPosts.posts,
    };

    return { props };
  } catch (err) {
    throw new Error(err);
  }
};
