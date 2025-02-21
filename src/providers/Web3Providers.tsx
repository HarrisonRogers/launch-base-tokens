'use client';

import { http, WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RainbowKitProvider, getDefaultConfig } from '@rainbow-me/rainbowkit';
import { baseSepolia } from 'wagmi/chains';
import '@rainbow-me/rainbowkit/styles.css';

// Create the query client outside of the component
const queryClient = new QueryClient();

// Create the Wagmi config
const config = getDefaultConfig({
  appName: 'Create Base Tokens',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || '',
  chains: [baseSepolia],
  transports: {
    [baseSepolia.id]: http(),
  },
});

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider modalSize="compact">{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
