import Link from 'next/link';
import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

function Navbar() {
  return (
    <div className="flex justify-between items-center m-6">
      <Link href="/" className="text-4xl font-bold hover:scale-110 transition">
        🔥
      </Link>
      <ConnectButton />
    </div>
  );
}

export default Navbar;
