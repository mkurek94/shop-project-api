const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoConnect = require("./utils/database").mongoConnect;

const app = express();

const shopRoutes = require('./routes/shop');

app.use(shopRoutes);

mongoConnect(() => {
  app.listen(9999);
});
