import * as React from 'react';
import { AuthProvider } from './Auth';
import { RouterProvider } from './Router';
import { ReduxProvider } from './Redux';
import { ChakraProvider } from './Chakra';

export const Provider: React.FC = ({ children }) => (
  <ReduxProvider>
    <AuthProvider>
      <ChakraProvider>
        <RouterProvider>{children}</RouterProvider>
      </ChakraProvider>
    </AuthProvider>
  </ReduxProvider>
);
