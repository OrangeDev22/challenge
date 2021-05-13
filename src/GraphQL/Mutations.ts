import { gql } from "@apollo/client";

export const DELETE_BLOG = gql`
  mutation ($id: ID!) {
    deletePost(id: $id)
  }
`;

export const CREATE_BLOG = gql`
  mutation ($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      body
    }
  }
`;
