# AdonisJS Swagger

Intégration de Swagger dans vos projets AdonisJS 6 pour générer et afficher facilement la documentation de votre API.

## Warning
Ce package est en cours de développement et n'est pas encore prêt pour une utilisation en production.

## Introduction

**AdonisJS Swagger** est un package qui facilite l'intégration de Swagger dans une application AdonisJS 6. Il s'appuie sur [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express) et [swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc) pour générer et servir la documentation Swagger.  
Ce package est conçu pour être auto-contenu et simple à intégrer via un provider AdonisJS.

## Caractéristiques

- **Documentation API** : Génération automatique de la documentation Swagger à partir de vos commentaires JSDoc.
- **Provider intégré** : Un provider AdonisJS qui configure automatiquement Swagger lors du démarrage de l'application.
- **TypeScript supporté** : Définitions de types fournies pour une meilleure intégration dans les projets TypeScript.

## Installation

Installez le package via npm :

```bash
npm install adonisjs-swagger
```

## Configuration

importer le provider dans votre fichier `adonisrc.ts` :

```typescript
providers: [
    () => import('adonisjs-swagger/src/Providers/SwaggerProvider'),
]
```

## Contribution

Les contributions sont les bienvenues ! Pour les suggestions, les problèmes ou les demandes de fonctionnalités, veuillez ouvrir une issue.