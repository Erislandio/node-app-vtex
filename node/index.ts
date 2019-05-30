import "./globals";

import { ClientsConfig, method, Service } from "@vtex/api";

import { Clients } from "./clients";
import { methodNotAllowed } from "./middlewares/methods";
import { signup } from "./middlewares/signup";
import { search } from "./middlewares/search";
import { cep } from "./middlewares/cep";

const THREE_SECONDS_MS = 3 * 1000;
const ONE_SECOND_MS = 1 * 1000;

const clients: ClientsConfig<Clients> = {
  implementation: Clients,
  options: {
    default: {
      timeout: ONE_SECOND_MS
    },
    routes: {
      timeout: THREE_SECONDS_MS
    }
  }
};

export default new Service({
  clients,
  routes: {
    signup: method({
      DEFAULT: methodNotAllowed,
      POST: signup
    }),
    search: method({
      DEFAULT: methodNotAllowed,
      GET: search
    }),
    cep: method({
      DEFAULT: methodNotAllowed,
      GET: cep
    })
  }
});
