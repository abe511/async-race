/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

svgr({
  include: '**/*.svg',
});

export default defineConfig({
  plugins: [react(), svgr(), tsconfigPaths()],
});
