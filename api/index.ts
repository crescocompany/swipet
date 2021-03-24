'use strict';

import "dotenv/config"
import "reflect-metadata"

import express from 'express';
import { createConnection } from "typeorm";

const port = process.env.API_PORT || 3000;

(async () => {
  /**
   * Turn on the lights
   */
  const engine = express()
  engine.enable('trust proxy')

  const connection = await createConnection();

  if (process.env.NODE_ENV === 'production') {
    connection.runMigrations();
  }
  
  engine.get('/', (req, res) => res.send('Hey!'));
  engine.listen(port, () => console.log(`🚀 Server is listening on http://localhost:%s`, port));
})();