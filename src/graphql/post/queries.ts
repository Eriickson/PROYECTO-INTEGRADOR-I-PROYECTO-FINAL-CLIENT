// Packages
import gql from "graphql-tag";

// My Elements
import { IOption, IPost } from "@/shared";

export const GET_RECENT_POSTS_Q = gql`
  query GetRecentPosts {
    getRecentPosts {
      posts {
        id
        uuid
        cover
        brand {
          label
        }
        model {
          label
        }
        typeModel {
          label
        }
        year
        slug
        pricing {
          currency
          amount
        }
      }
    }
  }
`;

export const GET_POST_Q = gql`
  query GetPost($uuid: ID!) {
    getPost(uuid: $uuid) {
      post {
        id
        uuid
        title
        description
        cover
        tags
        slug
        visits
        createdAt
        brand {
          label
        }
        model {
          label
        }
        year
        mileage {
          unit
          value
        }
        fuel {
          label
        }
        transmission {
          label
        }
        paintColor {
          label
        }
        category {
          label
        }
        doors
        category {
          label
        }
        interiorColor {
          label
        }
        condition {
          label
        }
        features {
          label
        }
        cylinders
        passengers
        traction {
          label
        }
        version {
          label
        }
        accessories {
          label
        }
        includeds {
          label
        }
        images
        agency {
          uuid
          name
          contacts {
            numberPhones {
              label
              value
            }
            emails {
              label
              value
            }
          }
          slug
          slogan
          uuid
          createdAt
          logo
        }
      }
    }
  }
`;

export const GET_MY_POSTS = gql`
  query getMyPosts($agencyId: ID!) {
    getMyPosts(agencyId: $agencyId) {
      posts {
        id
        uuid
        brand {
          label
        }
        model {
          label
        }
        uuid
        year
        createdAt
        pricing {
          currency
          amount
        }
        visits
      }
    }
  }
`;

export const SEARCH_POST_Q = gql`
  query SearchPosts($searchPostFilter: SearchPostFilter!) {
    searchPosts(searchPostFilter: $searchPostFilter) {
      posts {
        brand {
          label
        }
        model {
          label
        }
        typeModel {
          label
        }
        condition {
          label
        }
        transmission {
          label
        }
        year
        cover
        uuid
        slug
        pricing {
          currency
          amount
        }
      }
      brandModels {
        value
        label
      }
      typesModels {
        value
        label
      }
    }
  }
`;

export interface IGetRecentPosts {
  getRecentPosts: {
    posts: IPost[];
  };
}

export interface IGetPostPayload {
  getPost: {
    post: IPost;
  };
}

export interface IGetMyPostsPayload {
  getMyPosts: {
    posts: IPost[];
  };
}

export interface ISearchPostsPayload {
  searchPosts: {
    posts: IPost[];
    brandModels: IOption[];
    typesModels: IOption[];
  };
}
