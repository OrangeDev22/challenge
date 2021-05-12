import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BlogList from "./Components/BlogList";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { ErrorResponse, onError } from "@apollo/client/link/error";

const errorLink = onError(({ networkError }: ErrorResponse) => {
  if (
    networkError &&
    "statusCode" in networkError &&
    networkError.statusCode === 401
  ) {
    console.error(networkError);
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://graphqlzero.almansi.me/api" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <h1>Hello world</h1>
        <BlogList />
      </ApolloProvider>
    </div>
  );
}

export default App;
