import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const currentFilePath = fileURLToPath(import.meta.url);

export const PROJECT_ROOT = resolve(dirname(currentFilePath), '..');

export const SRC_ROOT = resolve(PROJECT_ROOT, 'src');

export const DIST_ROOT = resolve(PROJECT_ROOT, 'dist');

export const EXCLUDE_PATHS = [resolve(SRC_ROOT, 'styles-storybook')];
