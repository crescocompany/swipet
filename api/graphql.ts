import fs from 'fs';

import { gql } from 'apollo-server-express';
import { User } from './src/entity/User';

export const types = () => gql(fs.readFileSync(__dirname.concat('/schema.graphql'), 'utf8'));

export const resolvers = {
  Query: {
    me: (_, __, { req }) => {
      if (!req.userId) {
        return null;
      }

      return User.findOne(req.userId) ;
    }
  }
}