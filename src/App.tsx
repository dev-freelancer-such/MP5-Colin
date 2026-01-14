import { App as AntdApp } from 'antd';
import './App.scss';
import './styles/index.scss';
import { FullscreenLoading } from './components/commons/Loading';
import { useSelect } from './hooks';
import RouterRoot from './routes';

function App() {
  const { isLoading } = useSelect((state) => state?.global);
  return (
    <AntdApp>
      {isLoading && <FullscreenLoading />}
      <section className="max-container">
        <RouterRoot />
      </section>
    </AntdApp>
  );
}

export default App;
