import { execSync } from 'node:child_process';
import { chdir } from 'node:process';

import { DIST_ROOT } from './config.mjs';

chdir(DIST_ROOT);

try {
    execSync('npm publish');
} catch (error) {}
