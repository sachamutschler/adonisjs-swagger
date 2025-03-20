import { ApplicationService } from '@adonisjs/core/types'
import {setupSwagger} from '../index.js'

/**
 * Extended types
 */
declare module '@adonisjs/core/types' {
    interface ContainerBindings {
        'SwaggerProvider': SwaggerProvider
    }
}

export default class SwaggerProvider {
    constructor(protected app: ApplicationService) {
    }

    register() {
        this.app.container.singleton('SwaggerProvider', () => this)
    }

    /**
     * Boot method called by AdonisJS when starting the application.
     */
    public async boot() {
        const server = this.app.container.make('Adonis/Core/Server')
        setupSwagger(server, '/docs')
    }

    async start() {
    }

    async ready() {
    }

    async shutdown() {
    }
}