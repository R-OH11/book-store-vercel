import express, { json, urlencoded, static as expressStatic } from "express";
import limiter from "./configuration/ratelimit.config.js";
import cors from "cors";
import userRouter from "./routes/user.route.js";
import adminRouter from "./routes/admin.route.js";
import connection from "./configuration/database.config.js";
import APPCONSTANTS from "./helpers/message.helper.js";
import { createServer } from "http";
import defaultConfig from "./configuration/app.config.js";
import __dirname from "./configuration/dir.config.js";
import { join } from "path";

const app = express(),
  attachCoreMiddlewares = async () => {
    app.use(express.json({ limit: "10mb" }));
    app.use(express.urlencoded({ limit: "10mb", extended: true }));
    app.use(limiter);
    app.use(expressStatic("public"));
  },
  attachExternalMiddlewares = async () => {
    app.use(cors());
  },
  attachRouters = async () => {
    app.use(APPCONSTANTS.ROUTES.ROUTE_USER, userRouter);
    app.use(APPCONSTANTS.ROUTES.ROUTE_ADMIN, adminRouter);
  },
  upServer = async () => {
    if (connection.readyState == 1) {
      connection.db
        .listCollections()
        .map((collection) =>
          connection.db.command({ dropIndexes: collection.name, index: "*" })
        );
      await listenToServer();
    } else {
      throw new Error(APPCONSTANTS.MESSAGES.CONNECTION_STATE_CGE);
    }
  },
  listenToServer = async () => {
    const server = createServer(app);

    // Set the maximum header size limit
    server.maxHeaderSize = 10 * 1024 * 1024; // 10MB

    server.listen(parseInt(defaultConfig.serverPort));
    server.once("listening", () => {});
    server.on("error", (error) => {
      throw error;
    });
  },
  applicationStack = {
    app,
    attachCoreMiddlewares,
    attachExternalMiddlewares,
    attachRouters,
    upServer,
  };

export default applicationStack;
