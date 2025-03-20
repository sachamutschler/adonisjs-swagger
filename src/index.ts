import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'

/**
 * Configure Swagger pour une application AdonisJS
 * @param app - Instance de l'application AdonisJS
 * @param routePath - Chemin pour accéder à la documentation Swagger (par défaut '/docs')
 */
export function setupSwagger(app: any, routePath: string = '/docs') {
    const options = {
        definition: {
            openapi: '3.0.0',
            info: {
                title: 'API Documentation',
                version: '1.0.0',
                description: 'Swagger documentation for AdonisJS API',
            },
        },
        apis: ['./start/routes/**/*.ts'],
    }

    const swaggerSpec = swaggerJSDoc(options)

    app.use(routePath, swaggerUi.serve, swaggerUi.setup(swaggerSpec))
}

export default setupSwagger