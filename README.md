# Ecommerce frontend

An Angular 16 single-page application for an ecommerce store. It provides product and category pages, a shopping cart, registration, and administration screens for products, categories, and orders.

## Requirements

- Node.js and npm
- The ecommerce API, expected at `http://localhost:8080`
- For authentication-protected pages, the identity provider configured at `http://localhost:9009/realms/Realms`

The API and identity-provider URLs are configured in `src/app`.

## Setup and development

Install dependencies and start the Angular development server:

```sh
npm ci
npm start
```

Open `http://localhost:4200/`. The dev server reloads when application files change.

## Build

Run `npm run build` to build the project. The build artifacts are written to `dist/`.

## Tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).
