import { useContext } from 'react';
import { IAppStore } from '../model/store/app-store';
import { AppStoreContext } from '../providers/AppStoreProvider';

const useStore = () => {
  const store: IAppStore = useContext(AppStoreContext);

  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.');
  }

  return store;
};

export default useStore;
