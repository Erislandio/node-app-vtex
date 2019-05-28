import { JanusClient } from "@vtex/api";

export default class Search extends JanusClient {
  public getCorporation(corporateDocument: string | string[] | undefined): Promise<any> {
    return this.http.get("/api/dataentities/CL/search", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/vnd.vtex.ds.v10+json",
        "REST-Range": "resources=0-100",
        "x-vtex-api-appKey": "vtexappkey-lojaquod-WGOOHV",
        "x-vtex-api-appToken":
          "UMEIWNHUXQAVQMMMSBOVOKROYYZIWQJVQQZGNJPPZQFWLQVCGSOCKMRKUQJXOZYHGFEZNGZJMZWYFVCIDXBDBGKEZPLXZRBZRXPGLVOATEQLPSEYNAUQXUFAUAZYUBKU"
      },
      metric: "quod-search-data",
      params: {
        corporateDocument,
        _fields: "_all"
      }
    });
  }
}
