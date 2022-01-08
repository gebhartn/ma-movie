import * as React from 'react';
import { ChakraProvider as Provider } from '@chakra-ui/react';

export const ChakraProvider: React.FC = ({ children }) => <Provider>{children}</Provider>;
