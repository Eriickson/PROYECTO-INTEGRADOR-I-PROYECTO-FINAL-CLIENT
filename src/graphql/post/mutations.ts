import gql from "graphql-tag";

export const CREATE_POST_M = gql`
  mutation CreatePost($post: PostInput!, $userId: ID!) {
    createPost(post: $post, userId: $userId)
  }
`;
