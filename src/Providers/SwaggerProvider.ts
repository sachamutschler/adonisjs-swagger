import { ApplicationService } from '@adonisjs/core/types'
import { configProvider } from '@adonisjs/core'
import setupSwagger from '../index.js'

export default class SwaggerProvider {
    constructor(protected app: ApplicationService) {
    }

    register() {
    }

    /**
     * Méthode boot qui est exécutée après l'enregistrement des providers.
     * Nous utilisons `Server` pour configurer Swagger sur une route.
     */
    public async boot() {
        // Utilisez l'instance du serveur pour ajouter Swagger sur une route
        const server = this.app.container.make('Adonis/Core/Server')
        setupSwagger(server, '/docs')  // Configure Swagger sur la route `/docs`
    }

    async start() {
    }

    async ready() {
    }

    async shutdown() {
    }
}