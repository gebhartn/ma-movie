/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: {
      url: '/',
      static: true,
    },
    src: {
      url: '/dist',
    },
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    [
      '@snowpack/plugin-typescript',
      {
        ...(process.versions.pnp ? { tsc: 'yarn pnpify tsc' } : {}),
      },
    ],
  ],
  alias: {
    '@': './src',
  },
  env: {},
  routes: [
    {
      match: 'routes',
      src: '.*',
      dest: '/index.html',
    },
  ],
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2020',
  },
  packageOptions: {},
  devOptions: {},
  buildOptions: {
    sourcemap: true,
  },
};
