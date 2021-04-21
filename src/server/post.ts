import { GetServerSideProps } from "next";

// GraphQL
import { graphqlClient, GET_POST_Q, IGetPostPayload } from "@/graphql";

// My Elements
import { IPost } from "@/shared";
export interface PostPageProps {
  post: IPost;
}

export const PostSsr: GetServerSideProps = async ctx => {
  try {
    const { getPost } = await graphqlClient<IGetPostPayload>({
      query: GET_POST_Q,
      variables: { uuid: ctx.query.uuid },
    });

    const props: PostPageProps = {
      post: getPost.post,
    };

    return { props };
  } catch (err) {
    return {
      props: {},
    };
  }

};
