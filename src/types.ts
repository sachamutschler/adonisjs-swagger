export interface SwaggerConfig {
    uiEnabled: boolean
    uiUrl: string
    specUrl: string
    options: {
        definition: {
            openapi: string
            info: {
                title: string
                version: string
                description?: string
                contact?: {
                    name?: string
                    email?: string
                    url?: string
                }
            }
            servers?: Array<{ url: string }>
            components?: unknown
        }
        apis: string[]
    }
}