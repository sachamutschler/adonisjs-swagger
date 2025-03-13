const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Documentation API',
            version: '1.0.0',
            description: 'Documentation générée avec Swagger pour AdonisJS',
        },
    },
    /**
     * Path to the API docs
     */
    apis: ['./start/routes/**/*.js'],
}

const swaggerSpec = swaggerJSDoc(options);

/**
 * Fonction pour intégrer Swagger dans l'application AdonisJS.
 *
 * @param {object} app - L'instance de l'application AdonisJS ou le routeur.
 * @param {string} [routePath='/docs'] - La route où la documentation sera accessible.
 */
function setupSwagger(app, routePath = '/docs') {
    app.use(routePath, swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

module.exports = { setupSwagger };
