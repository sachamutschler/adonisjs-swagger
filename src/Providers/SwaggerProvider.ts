import { ApplicationService } from '@adonisjs/core/types'
import {setupSwagger} from '../index.js'
import { RuntimeException } from '@poppinss/utils'
import { configProvider } from '@adonisjs/core'
import {SwaggerConfig} from "../types.js";

/**
 * Extended types
 */
declare module '@adonisjs/core/types' {
    interface ContainerBindings {
        'swagger': SwaggerProvider
    }
}

export default class SwaggerProvider {
    constructor(protected app: ApplicationService) {
    }

    register() {
        this.app.container.singleton('swagger', () => this)
    }

    async start() {
        const config = await configProvider.resolve<SwaggerConfig>(this.app, this.app.config.get('swagger'))

        if (!config) {
            throw new RuntimeException('Missing swagger config')
        }

        setupSwagger(config)
    }
}