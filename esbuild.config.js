import *  as esbuild from 'esbuild';
import { PLUGINS } from './plugins/index.js';
import { execSync } from 'child_process';

const buildOption = {
    entryPoints: ['src/index.ts'],
    bundle: true,
    outfile: 'dist/index.js',
    minify: true,
    sourcemap: true,
    target: 'es2023',
    platform: 'node',
    logLevel: 'info',
    metafile: true,
    treeShaking: true,
    legalComments: 'none',
    plugins: [...PLUGINS]
};

const ctx = await esbuild.context(buildOption);

ctx.watch();
