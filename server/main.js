import applicationStack from "./app.js";

const { attachCoreMiddlewares, attachExternalMiddlewares, attachRouters, app } =
  applicationStack;

async function bootstrap() {
  await attachCoreMiddlewares();
  await attachExternalMiddlewares();
  await attachRouters();
}

// This function will be called by Vercel
export default async function (req, res) {
  // Only run bootstrap once
  if (!app.bootstrapped) {
    await bootstrap();
    app.bootstrapped = true;
  }

  // Handle the request
  app(req, res);
}
