import * as React from 'react';

import { useAppDispatch } from '@/store';
import { useSelector } from 'react-redux';
import { selectRedirect } from '@/store/reducers/redirect.slice';
import { Login } from './Login';
import { Logout } from './Logout';
import { useAuth0 } from '@auth0/auth0-react';
import { Link, Route, Routes } from 'react-router-dom';
import { Protected } from './Protected';
import { Lookup } from './Lookup';

interface PropTypes {}

export const App: React.FC<PropTypes> = () => {
  const [count, setCount] = React.useState<number>(0);
  const dispatch = useAppDispatch();
  const { user } = useAuth0();

  const redirectState = useSelector(selectRedirect);

  React.useEffect(() => {
    const id = setTimeout(() => setCount(count + 1), 1000);
    return () => void clearTimeout(id);
  }, [count]);

  const Content = () => <h1>Private World</h1>;

  return (
    <>
      <div
        style={{
          width: '50%',
          display: 'flex',
          margin: '0 auto',
          padding: '50px 0px',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <Login />
        <Logout />
      </div>
      <Routes>
        <Route path="private" element={<Protected element={Content} />} />
      </Routes>
      <p>private route:</p>
      <Link to="/private"> click me </Link>
      <p>user:</p>
      <pre>{JSON.stringify(user, null, 4)}</pre>
      <p>counter:</p>
      <p>{count}</p>
      <p>redirect state:</p>
      <pre>{JSON.stringify(redirectState, null, 4)}</pre>
      <p>dispatch:</p>
      <pre>{JSON.stringify(dispatch.toString(), null, 4)}</pre>
      <div style={{ width: '50%', display: 'flex', margin: '0 auto', padding: '50px 0px' }}>
        <Lookup />
      </div>
    </>
  );
};
