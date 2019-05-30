import { JanusClient } from "@vtex/api";

export default class cep extends JanusClient {
  public getCep(cep: string | undefined): Promise<any> {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`, {
      headers: {
        "Content-type": "aplication/json",
        Accept: "application/vnd.vtex.ds.v10+json"
      }
    });
  }
}
