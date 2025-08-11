import { QueryClientProvider } from '@tanstack/react-query';
import AppRouter from './AppRouter';
import { ContextProvider } from './contexts/ContextProvider';
import { queryClient } from './utils/queryClient';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <AppRouter />
      </ContextProvider>
    </QueryClientProvider>
  );
}

export default App;
