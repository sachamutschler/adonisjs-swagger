'use strict'

const { setupSwagger } = require('../index');

class SwaggerProvider {
    register () {
    }

    boot () {
        const Route = use('Route');
        // Intégration de Swagger sur la route '/docs'
        setupSwagger(Route, '/docs');
    }
}

module.exports = SwaggerProvider;