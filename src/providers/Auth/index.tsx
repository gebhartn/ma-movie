import * as React from 'react';
import { Auth0Provider, Auth0ProviderOptions } from '@auth0/auth0-react';

const { SNOWPACK_PUBLIC_AUTH0_CLIENTID, SNOWPACK_PUBLIC_AUTH0_DOMAIN } = import.meta.env;

const config: Auth0ProviderOptions = {
  domain: SNOWPACK_PUBLIC_AUTH0_DOMAIN,
  clientId: SNOWPACK_PUBLIC_AUTH0_CLIENTID,
  redirectUri: window.location.origin,
  useRefreshTokens: true,
  cacheLocation: 'localstorage',
};

export const AuthProvider: React.FC = ({ children }) => <Auth0Provider {...config}>{children}</Auth0Provider>;
