import { gql } from "@apollo/client";

export const GET_ALL_BLOGS = gql`
  query {
    posts {
      data {
        id
        title
        body
      }
      meta {
        totalCount
      }
    }
  }
`;
