import app from "./express";
import config from "../config/config";
import mongooose from "mongoose";

mongooose.Promise = global.Promise;
mongooose.connect(config.mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
mongooose.connection.on("error", () => {
  throw new Error(`unable to connect to database ${mongoUri}`);
});

app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", config.port);
});
