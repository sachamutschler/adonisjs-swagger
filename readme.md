# AdonisJS Swagger

Integration of Swagger into your AdonisJS 6 projects for easily generating and displaying API documentation.

## Warning

This package is under development and is not yet ready for production use. 

## Introduction

**AdonisJS Swagger** is a package that simplifies integrating Swagger into an AdonisJS 6 application. It relies on [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express) and [swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc) to generate and serve the Swagger documentation.
This package is designed to be self-contained and easy to integrate via an AdonisJS provider.

## Features

- **API Documentation** : Automatically generates Swagger documentation from your JSDoc comments.
- **Built-in Provider** : An AdonisJS provider that automatically configures Swagger when the application starts.
- **TypeScript support** : Type definitions provided for better integration into TypeScript projects.

## Installation

Install the package via npm

```bash
npm install adonisjs-swagger
```

## Configuration

Import the provider in your adonisrc.ts file (to be verified):

```typescript
providers: [
    () => import('adonisjs-swagger/swagger-provider'),
]
```

## Contribution

Contributions are welcome! For suggestions, issues, or feature requests, please open an issue.