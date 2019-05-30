export const cep = async (ctx: Context, next: () => Promise<any>) => {
  const {
    clients: { cep },
    vtex
  } = ctx;

  console.log(vtex);

  ctx.set("cache-control", "no-cache");
  ctx.set("content-type", "application/json");
  ctx.set("authToken");

  const response = await cep.getCep("12927012");
  ctx.status = 200;
  ctx.body = response;

  await next();
};
