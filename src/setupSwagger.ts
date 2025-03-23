import swaggerJsdoc from 'swagger-jsdoc'
import router from '@adonisjs/core/services/router'
import type { SwaggerConfig } from './types.js'

/**
 * Configure les routes Swagger
 */
export function setupSwagger(config: SwaggerConfig) {
    const swaggerSpec = swaggerJsdoc(config.options)

    // Spec JSON route
    try {
        router.get(config.specUrl, ({ response }) => {
            return response.header('Content-type', 'application/json').send(swaggerSpec)
        })
    } catch (error) {
        console.error(error)
    }

    // Swagger UI route
    try {
        if (config.uiEnabled) {
            router.get(config.uiUrl, ({ response }) => {
                const html = generateSwaggerHtml(config.specUrl)
                return response.header('Content-type', 'text/html').send(html)
            })
        }
    } catch (error) {
        console.error(error)
    }
}

/**
 * Génère le HTML pour Swagger UI
 */
function generateSwaggerHtml(specUrl: string) {
    return /* HTML */ `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Swagger UI</title>
        <link 
          rel="stylesheet" 
          href="https://unpkg.com/swagger-ui-dist@4.18.3/swagger-ui.css"
        >
      </head>
      <body>
        <div id="swagger-ui"></div>
        <script 
          src="https://unpkg.com/swagger-ui-dist@4.18.3/swagger-ui-bundle.js"
        ></script>
        <script>
          window.onload = () => {
            window.ui = SwaggerUIBundle({
              url: '${specUrl}',
              dom_id: '#swagger-ui',
              presets: [
                SwaggerUIBundle.presets.apis,
                SwaggerUIBundle.SwaggerUIStandalonePreset
              ],
              layout: "BaseLayout",
              deepLinking: true
            })
          }
        </script>
      </body>
    </html>
  `
}