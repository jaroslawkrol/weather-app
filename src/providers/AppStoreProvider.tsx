import * as React from 'react';
import { createContext } from 'react';
import AppStore from '../store/app.store';
import { IAppStore } from '../model/store/app-store';

export const AppStoreContext = createContext<IAppStore>(AppStore);

const AppStoreProvider: React.FC = ({ children }) => (
  <AppStoreContext.Provider value={AppStore}>{children}</AppStoreContext.Provider>
);

export default AppStoreProvider;
