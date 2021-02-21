import * as React from "react";
import { BrowserRouter as RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import AppContext from "./assets/state";
import theme from "./assets/theme";
import Router from "./assets/routes";

const link = createHttpLink({
  uri: "https://api.producthunt.com/v2/api/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = process.env.API_TOKEN;
  console.log("🚀 ~ file: App.js ~ line 22 ~ authLink ~ token", token);

  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          posts: {
            keyArgs: ["order"],
            merge(existing = { edges: [] }, incoming) {
              return {
                ...incoming,
                edges: [...existing.edges, ...incoming.edges],
              };
            },
          },
        },
      },
    },
  }),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <RouterProvider>
        <ThemeProvider theme={theme}>
          <AppContext>
            <Router />
          </AppContext>
        </ThemeProvider>
      </RouterProvider>
    </ApolloProvider>
  );
};

export default App;
