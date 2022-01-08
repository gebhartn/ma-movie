import * as React from 'react';

import { useAppDispatch } from '@/store';
import { useSelector } from 'react-redux';
import { selectRedirect } from '@/store/reducers/redirect.slice';

interface PropTypes {}

export const App: React.FC<PropTypes> = () => {
  const [count, setCount] = React.useState<number>(0);
  const dispatch = useAppDispatch();

  const redirectState = useSelector(selectRedirect);

  React.useEffect(() => {
    const id = setTimeout(() => setCount(count + 1), 1000);
    return () => void clearTimeout(id);
  });

  return (
    <>
      <p>counter:</p>
      <p>{count}</p>
      <p>redirect state:</p>
      <pre>{JSON.stringify(redirectState, null, 4)}</pre>
      <p>dispatch:</p>
      <pre>{JSON.stringify(dispatch.toString(), null, 4)}</pre>
    </>
  );
};
