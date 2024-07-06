import applicationStack from "./index.js";

const {
    attachCoreMiddlewares,
    attachExternalMiddlewares,
    attachRouters,
    upServer,
  } = applicationStack,
  bootstrap = async () => {
    await attachCoreMiddlewares();
    await attachExternalMiddlewares();
    await attachRouters();
    await upServer();
  };
await bootstrap();
