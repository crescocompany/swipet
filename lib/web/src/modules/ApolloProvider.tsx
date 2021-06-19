import { FC } from 'react';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider
} from '@apollo/client';


/** 
 * 
 */
const ApolloProvider: FC = ({ children }) => {
  const client = new ApolloClient({
    uri: process.env.REACT_APP_API_URI, credentials: 'include', cache: new InMemoryCache(),
  });

  return <Provider client={client}>{children}</Provider>;
};

export { ApolloProvider };