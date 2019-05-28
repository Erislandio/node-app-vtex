# QUOD Integration Services

## Host

**Base URL:** `https://development--lojaquod.myvtex.com`

## Endpoints

### Search

#### Endpoint

`/quod/search`

#### Parâmetros

**cnpj** :string _(querystring)_

#### Exemplo

**[GET]** `/quod/search?cnpj=99.573.830/0001-75`

#### Retorno

```json
[
  {
    "blocked": false,
    "corporateDocument": "99.573.830/0001-75",
    "fileDocument": null,
    "validation": false,
    "isCorporate": false,
    "tradeName": null,
    "homePhone": "+5511942676399",
    "phone": null,
    "approved": null,
    "birthDate": "1995-06-02T00:00:00",
    "businessPhone": "(11) 4031-0608",
    "corporateName": null,
    "documentType": "cpf",
    "gender": "M",
    "id": "4344bcf6-7bd7-11e9-828f-0a0f56015ed8",
    "accountId": "b5de8120-49ab-4288-bc0a-1e87c91e659a"
  }
]
```
