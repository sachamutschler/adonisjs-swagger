/**
 * Définition minimale pour un objet possédant une méthode "use".
 * Cette interface permet de typer l'instance de l'application AdonisJS ou le routeur.
 */
export interface AppWithUse {
    use(path: string, ...handlers: any[]): any;
}

/**
 * Configure Swagger pour une application AdonisJS.
 *
 * @param app - L'instance de l'application AdonisJS ou du routeur qui expose la méthode 'use'.
 * @param routePath - La route où la documentation Swagger sera accessible (par défaut '/docs').
 */
export function setupSwagger(app: AppWithUse, routePath?: string): void;

/**
 * Provider pour intégrer Swagger dans une application AdonisJS.
 *
 * Ce provider doit être enregistré dans la configuration des providers de l'application.
 * Il expose deux méthodes essentielles :
 * - register() : pour enregistrer le service dans l'IoC container (si nécessaire).
 * - boot() : pour configurer la route et les middlewares une fois l'application démarrée.
 */
export class SwaggerProvider {
    /**
     * Enregistre le provider dans l'IoC container.
     */
    register(): void;

    /**
     * Configure Swagger en bootstrappant le provider.
     */
    boot(): void;
}