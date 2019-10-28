# NgGutenberg

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.  
It is an Angular version of the [Wordpress Gutenberg Block Editor](https://wordpress.github.io/gutenberg/).  
The packages uses the latest Gutenberg version. 

## Install

Run `npm install ng-gutenberg --save` file.

Import `NgGutenbergModule` in your project (`import { NgGutenbergModule } from 'ng-gutenberg'`)

Add the following lines to your `polyfills.ts`

    (<any>window).process = {
        env: {
            NODE_ENV:'production'
        }
    };
    (<any>window).global = window

To use the default style, you can import `@import "ng-gutenberg/ng-gutenberg"` in your styles.scss

## Usage

Add the BlockEditorProviderComponent to your template with the following code:

    <block-editor-provider *ngIf="blocks" [blocks]="blocks" (blocksChange)="onBlocksChanged($event)" contentClass="gutenberg__editor"></block-editor-provider>

or

    <block-editor-provider *ngIf="blocks" [(blocks)]="blocks" contentClass="gutenberg__editor"></block-editor-provider>

In your typescript component, make sure that you added a parameter of type `IBlock[]`.

This component only accepts an array of IBlock as a parameter. If you want to use HTML you must parse that HTML first to an IBlock[]. To do that you can use `import { serialize, parse } from '@wordpress/blocks'`. Eg:

    this.blocks = parse(html);
    
    onBlocksChanged(item: IBlock[]) {
        var html = serialize(item);
    }


## Issues

Depending on your Angular build configuration this may not work on Production. To fix this you can install `@angular-builders/custom-webpack` with NPM. 

Update your `angular.json` file with the following information:

Under `build`:

    "builder": "@angular-builders/custom-webpack:browser",
    "options": {
        "customWebpackConfig": {
            "path": "./custom-webpack.config.js",
            "mergeStrategies": {
                "optimization": "replace",
                "module.optimization": "replace"
            },
            "replaceDuplicatePlugins": true
        },
        ...
    }

Under `serve`:

    "builder": "@angular-builders/custom-webpack:dev-server",
    "options": {
        "customWebpackConfig": {
            "path": "./custom-webpack.config.js",
            "mergeStrategies": {
                "optimization": "replace",
                "module.optimization": "replace"
            },
            "replaceDuplicatePlugins": true
        },
        ...
    },

Then create a `custom-webpack.config.js` file with the following content:

    const TerserPlugin = require('terser-webpack-plugin');
    module.exports = {
        optimization: {
            minimizer: [new TerserPlugin({
                parallel: true,
                cache: true,
                terserOptions: {
                    ecma: 8,
                    warnings: false,
                    parse: {},
                    compress:false,
                    mangle: true,
                    module: false,
                    output: null,
                    toplevel: false,
                    nameCache: null,
                    ie8: true,
                    keep_classnames: true,
                    keep_fnames: true,
                    safari10: true
                }
            })]
        }
    };