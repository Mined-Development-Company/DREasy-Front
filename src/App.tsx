import { BrowserRouter } from 'react-router-dom';
import { ExampleProvider } from './context';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <ExampleProvider>
      <BrowserRouter basename="/">
        <AppRoutes />
      </BrowserRouter>
    </ExampleProvider>
  );
}

export default App;
