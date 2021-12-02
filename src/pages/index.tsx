import { useRoutes } from 'react-router-dom';
import Home from './Home';

function App() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
  ]);

  return routes;
}

export default App;
