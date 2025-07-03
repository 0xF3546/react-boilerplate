import AppRouter from './AppRouter';
import { ContextProvider } from './contexts/ContextProvider';

function App() {
  return (
    <ContextProvider>
      <AppRouter />
    </ContextProvider>
  );
}

export default App;
