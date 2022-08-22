# Lendsqr API Assessment
Wallet transaction API application built with Typescript, Node.js, Express, jsonwebtoken, helmet, joi, Knex (MySQL), and Objection.js

## Installation Requirements

- [Node.js](https://yarnpkg.com/en/docs/install)
- [Yarn](https://yarnpkg.com/en/docs/install)
- [NPM](https://docs.npmjs.com/getting-started/installing-node)
- MySQL (or any prefered Knex.js supported database)

## Notes
- App is deployed in heroku at: https://lendsqr-gtp.herokuapp.com/
- All amounts are in kobo
- App's default seeded currency is Naira
- App's default transaction types are `TOP_UP` and `WITHDRAW` 
- All user sessions are tracked

## Assumptions

- A user can have multiple wallets
- A wallet can only have one currency
- Application supports multiple currencies
- Wallets must have the same currency for paired transactions
- No real money is transfered

## Getting Started

Clone the repository, install the dependencies.

```bash
$ git clone git@github.com:ong-gtp/lendsqr.git <application-name>

$ cd <application-name>

$ cp .env.example .env # Update database credentials

$ yarn migrate

$ yarn seed
```




Start the application.

```bash
$ yarn build # For production

$ yarn start # For development
```


## Migrations and Seeds

To create migration use `make:migration` and to seed use `make:seeder`:

To run app migration and seeder files:

```bash
$ yarn migrate # to migrate

$ yarn seed # to seed
```


For local development testing, app migration and seeder files:

```bash
$ yarn migrate:test # to migrate test database

$ yarn test:seed # to seed required data in test database

$ yarn test # to subsequently run test suites 
```


## REST endpoints
```bash
App endpoints can be found in api.rest file

#### Routes ⚡
| Routes           | HTTP Methods | Description                                                                                                  | Params                                   |
| :--------------- | :----------- | :----------------------------------------------------------------------------------------------------------- |
| /                | GET          | Displays application infomation                                                                              | none                                     |
| /sign-up         | POST         | Creates a new user and returns the initiated wallet                                                          | `email` `password` `name`                |
| /login           | POST         | Logs in a user and returns the jwt session token                                                             | `email` `password`                       |
| /logout          | POST         | Logs out a user                                                                                              | none                                     |
| /refresh         | POST         | Refresh a user jwt token                                                                                     | none                                     |
| /wallet/fund     | POST         | Fund the wallet of a logged in user                                                                          | `walletId`  `amount`                     |
| /wallet/transfer | POST         | Transfer money from logged in user\'s wallet to another user\'s  wallet. Wallets must have the same currency | `recipientWalletId` `walletId`  `amount` |
| /wallet/withdraw | POST         | Withdraw money from session user\'s wallet                                                                   | `walletId`  `amount`                     |
```
## Setting up REST Client on VSCode

First install a rest client (I use humao.rest-client) then create a file or add following lines in `.vscode` > `settings.json` and switch an environment `Cmd/Ctrl + Shift + P` > `REST Client: Switch Environment`. Then, you can request APIs from `api.rest` file.

```json
{
  "rest-client.environmentVariables": {
    "$shared": {
      "refreshToken": "foo",
      "accessToken": "bar",
      "email": "georgetheprogrammer@gmail.com",
      "password": "secret" 
    },
    "local": {
      "host": "localhost",
      "refreshToken": "{{$shared refreshToken}}",
      "accessToken": "{{$shared accessToken}}",
      "email": "{{$shared email}}",
      "password": "{{$shared password}}"
    }
  }
}
```

## Reference 
- https://github.com/cham11ng/typescript-api-starter
- https://knexjs.org/
- https://vincit.github.io/objection.js