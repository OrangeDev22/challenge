import { gql } from "@apollo/client";
export const DELETE_BLOG = gql`
  mutation ($id: ID!) {
    deletePost(id: $id)
  }
`;
