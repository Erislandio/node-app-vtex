export const signup = async (ctx: Context, next: () => Promise<any>) => {
  const mockResponse = {
    valido: true,
    bloqueia_compra: false,
    conferencia_dados: false,
    envio_documentacao: false,
    data_ultima_atualizacao_cnpj: "2019-05-22T11:26:49.7920464",
    data_ultima_atualizacao_cpf_representante_legal: "2019-05-23T11:26:49.7920464",
    data_ultima_atualizacao_cpf_comprador: "2019-05-23T11:26:49.7920464"
  };
  ctx.body = mockResponse;
  ctx.status = 200;
  ctx.set("cache-control", "no-cache");
  ctx.set("content-type", "application/json");

  await next();
};
