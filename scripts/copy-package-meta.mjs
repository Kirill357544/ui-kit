import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

import { DIST_ROOT, PROJECT_ROOT } from './config.mjs';

if (!existsSync(DIST_ROOT)) {
    mkdirSync(DIST_ROOT);
}

copyFileSync(
    resolve(PROJECT_ROOT, 'package.json'),
    resolve(DIST_ROOT, 'package.json')
);

copyFileSync(
    resolve(PROJECT_ROOT, 'README.md'),
    resolve(DIST_ROOT, 'README.md')
);
