import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
// import { ModeToggle } from './themeToggle';
function ConnectWallet() {
  return (
    <nav className="flex justify-end p-4">
      <div className="flex items-center gap-2">
        <ConnectButton />
        {/* <ModeToggle /> */}
      </div>
    </nav>
  );
}

export default ConnectWallet;
