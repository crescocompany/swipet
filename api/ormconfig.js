module.exports = {
   "type": "postgres",
   "host": process.env.DATABASE_HOST ?? "localhost",
   "port": process.env.DATABASE_PORT ?? 5432,
   "username": process.env.DATABASE_USER ?? "bas",
   "password": process.env.DATABASE_PASS ?? "",
   "database": process.env.DATABASE_NAME ?? "pets",
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/entity/**/*.ts"
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}