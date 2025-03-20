declare module 'adonisjs-swagger' {
    const value: any;
    export = value;

    import { ApplicationService } from '@adonisjs/core/types'

    /**
     * @param app - Instance of the AdonisJS application
     * @param routePath - Path to access the Swagger documentation (default '/docs')
     */
    export function setupSwagger(app: ApplicationService, routePath?: string): void
}