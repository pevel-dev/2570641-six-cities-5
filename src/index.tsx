import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/components/app/app';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { fetchOffersAction, fetchFavorites } from './store/api';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
store.dispatch(fetchOffersAction());
store.dispatch(fetchFavorites());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
