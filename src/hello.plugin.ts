import * as path from 'path';
import { AdminUiExtension } from '@vendure/ui-devkit/compiler';
import { PluginCommonModule, Type, VendurePlugin } from '@vendure/core';

import { HELLO_PLUGIN_OPTIONS } from './constants';
import { PluginInitOptions } from './types';
@VendurePlugin({
    imports: [PluginCommonModule],
    providers: [{ provide: HELLO_PLUGIN_OPTIONS, useFactory: () => HelloPlugin.options }],
    configuration: config => {
        // Plugin-specific configuration
        // such as custom fields, custom permissions,
        // strategies etc. can be configured here by
        // modifying the `config` object.
        return config;
    },
    compatibility: '^3.0.0',
})
export class HelloPlugin {
    static options: PluginInitOptions;

    static init(options: PluginInitOptions): Type<HelloPlugin> {
        this.options = options;
        return HelloPlugin;
    }

    static ui: AdminUiExtension = {
        id: 'hello-ui',
        extensionPath: path.join(__dirname, 'ui'),
        routes: [{ route: 'hello', filePath: 'routes.ts' }],
        providers: ['providers.ts'],
    };
}
