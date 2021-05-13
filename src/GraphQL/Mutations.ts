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

export const UPDATE_BLOG = gql`
  mutation ($id: ID!, $input: UpdatePostInput!) {
    updatePost(id: $id, input: $input) {
      id
      title
      body
    }
  }
`;
