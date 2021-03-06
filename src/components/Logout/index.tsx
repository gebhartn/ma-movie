import * as React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@chakra-ui/react';

export const Logout = () => {
  const { logout } = useAuth0();

  return <Button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</Button>;
};
