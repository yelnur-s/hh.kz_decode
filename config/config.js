const fs = require('fs');
const path = require("path")


module.exports = {
  development: {
    username: 'admin',
    password: 'root',
    database: 'admin',
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
  },
  production: {
    username: 'doadmin',
    password: 'AVNS_R5m2RT4GNnFkGK9Qs09',
    database: 'defaultdb',
    host: 'db-postgresql-sgp1-13396-do-user-14463706-0.b.db.ondigitalocean.com',
    dialect: 'postgres',
    port: 25060,
    dialectOptions: {
      ssl: {
        ca: fs.readFileSync(path.resolve("config", "ca-certificate.crt")),
      },
    }
  },
};

