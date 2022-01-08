import * as React from 'react';
import { Provider } from 'react-redux';

import { store } from '../../store';

const config = { store };

export const ReduxProvider: React.FC = ({ children }) => <Provider {...config}>{children}</Provider>;
