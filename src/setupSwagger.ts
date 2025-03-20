import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'

/**
 * Setup Swagger documentation for AdonisJS API
 * @param app - Instance of the AdonisJS application
 * @param routePath - Path to access the Swagger documentation (default '/docs')
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
