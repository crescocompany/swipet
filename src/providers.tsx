import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import { FC } from "react";
import { HelmetProvider } from 'react-helmet-async';

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URI,credentials: 'include', cache: new InMemoryCache(),
});

const Providers: FC = ({ children }) => (
  <ApolloProvider client={client}>
    <HelmetProvider>
      {children}
    </HelmetProvider>
  </ApolloProvider>
);

export default Providers;