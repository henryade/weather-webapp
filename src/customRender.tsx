import React from 'react'
import { render } from '@testing-library/react'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import Home from './Home';
const queryClient = new QueryClient();

const AllTheProviders = ({ children }: { children: any }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

const customRender = (options?: any) =>
  render(<Home />, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }