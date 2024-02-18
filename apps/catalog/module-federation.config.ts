import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'catalog',
  remotes: ['recommendations','store'],
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
