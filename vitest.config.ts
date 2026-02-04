import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./src/__tests__/setup.ts'],
    include: ['src/**/*.test.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      include: [
        'src/lib/**',
        'src/data/**',
        'src/app/api/**',
        'src/components/**',
      ],
      exclude: ['src/types/**', 'src/**/*.d.ts'],
    },
  },
});
