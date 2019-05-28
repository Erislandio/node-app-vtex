export const search = async (ctx: Context, next: () => Promise<any>) => {
  // if (!code) {
  //   throw new UserInputError("Code is required");
  // }

  // const codeNumber = parseInt(code as string, 10);

  // if (isNaN(codeNumber) || codeNumber < 100 || codeNumber > 600) {
  //   throw new UserInputError("Code must be a number");
  // }

  // Se não tiver cadastro consulta o regime tributário e retorna os dados
  // const emptyUserMock = [
  //   {
  //     corporateDocument: "99.573.830/0001-75",
  //     regimeTributario: "Simples Nacional"
  //   }
  // ];

  const {
    clients: { search: searchClient },
    vtex: {
      route: {
        params: { cnpj: corporateDocument }
      }
    }
  } = ctx;

  ctx.set("Content-type", "application/json");
  ctx.set("X-Vtex-Use-Https", "true");
  ctx.set("Cache-Control", "no-cache");

  const response = await searchClient.getCorporation(corporateDocument);

  ctx.status = 200;
  ctx.body = response;

  await next();
};
