import { existsSync, rmSync } from 'node:fs';

import { DIST_ROOT } from './config.mjs';

if (existsSync(DIST_ROOT)) {
  rmSync(DIST_ROOT, { recursive: true });
}
