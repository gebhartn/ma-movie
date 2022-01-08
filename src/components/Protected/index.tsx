import * as React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';

interface PropTypes {
  element: React.FC;
  onRedirect?: () => JSX.Element;
}

export const Protected: React.FC<PropTypes> = ({ element: Component, onRedirect }) => {
  const Result = withAuthenticationRequired(Component, {
    onRedirecting: onRedirect ? onRedirect : () => <div>Redirecting you to the login page...</div>,
  });

  return <Result />;
};
