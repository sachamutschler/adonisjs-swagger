import { stubsRoot } from './stubs/main.js'
import type Configure from '@adonisjs/core/commands/configure'

export async function configure(command: Configure) {
    const codemods = await command.createCodemods()

    await codemods.makeUsingStub(stubsRoot, 'config/swagger.stub', {
        destination: 'config/swagger.ts',
    })
}