'use client';

import { WagmiProvider, createConfig, http } from 'wagmi';
import { base } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useState } from 'react';

const queryClient = new QueryClient();

const config = createConfig({
  chains: [base],
  connectors: [
    injected(),
  ],
  transports: {
    [base.id]: http(),
  },
});

export function Web3Provider({ children }: { children: ReactNode }) {
  const [client] = useState(() => queryClient);
  
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}
