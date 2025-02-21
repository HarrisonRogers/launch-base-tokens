'use client';

// import { ThemeProvider } from './theme-provider';
import { Web3Provider } from './Web3Providers';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    // <ThemeProvider
    //   attribute="class"
    //   defaultTheme="system"
    //   enableSystem
    //   disableTransitionOnChange
    // >
    <Web3Provider>{children}</Web3Provider>
    // </ThemeProvider>
  );
}
