export const search = async (ctx: Context, next: () => Promise<any>) => {
  const {
    clients: { search: searchClient },
    vtex: {
      route: {
        params: { cnpj: corporateDocument }
      }
    }
  } = ctx;

  console.log(ctx);

  ctx.set("Content-type", "application/json");
  ctx.set("X-Vtex-Use-Https", "true");
  ctx.set("Cache-Control", "no-cache");

  const response = await searchClient.getCorporation(corporateDocument);

  ctx.status = 200;
  ctx.body = response;

  await next();
};
