import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'checkout',
  remotes: ['store'],
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
