declare module 'adonisjs-swagger' {
    const value: any;
    export = value;

    import { ApplicationService } from '@adonisjs/core/types'

    /**
     * Configure Swagger pour une application AdonisJS.
     * @param app - Instance de l'application AdonisJS
     * @param routePath - Chemin pour accéder à la documentation (défaut : '/docs')
     */
    export function setupSwagger(app: ApplicationService, routePath?: string): void
}