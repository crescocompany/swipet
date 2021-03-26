import { resolveSrv } from 'node:dns';
import { User } from './src/entity/User';

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

export default resolvers;