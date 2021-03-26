'use strict';

import "dotenv/config"
import "reflect-metadata"

import fs from 'fs';
import express, { Request, Response } from 'express';

import cookieParser from 'cookie-parser';
import { createConnection } from "typeorm";
import { gql, ApolloServer } from 'apollo-server-express';

import { resolvers } from './resolvers'

const {
  PORT,
  NODE_ENV,
  FRONTEND_URI
} = process.env;

const port = PORT || 3000;
const prod = NODE_ENV === 'production' || false;

(async () => {
  try {
    /**
     * Turn on the lights
     */
    const app = express()
    app.enable('trust proxy')
    app.use(cookieParser())
 
    const connection = await createConnection();
 
    if (prod) {
      connection.runMigrations();
    }

    const server = new ApolloServer({
      context: ({ req, res }: { req: Request, res: Response }) => ({
        req, res
      }),
      introspection: !prod,
      playground: !prod,
      typeDefs: gql(fs.readFileSync(__dirname.concat('/schema.graphql'), 'utf8')),
      resolvers
    });

    server.applyMiddleware({
      app, path: '/', cors: { credentials: true, origin: !prod ? true : FRONTEND_URI }
    });
   
    app.listen(port, () => console.log(`🚀 Server is listening on http://localhost:%s`, port));
  } catch (error) { console.log(error) }
})();