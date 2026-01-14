import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import './styles/global.scss';
import './styles/index.scss';
import '../public/i18n';
import App from './App.tsx';
import { store } from './store';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
