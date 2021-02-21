import { gql } from "@apollo/client";

export const POST_LIST = gql`
  query Posts($order: PostsOrder!, $cursor: String) {
    posts(order: $order, after: $cursor, first: 150) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        node {
          id
          name
          tagline
          votesCount
          thumbnail {
            type
            url
          }
        }
      }
    }
  }
`;

export const POST = gql`
  query Post($id: ID!) {
    post(id: $id) {
      id
      name
      description
      votesCount
      media {
        url
      }
      thumbnail {
        url
      }
    }
  }
`;
