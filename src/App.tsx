import React from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import Home from './Home';
import 'rsuite/dist/rsuite.min.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>

  );
}

export default App;
