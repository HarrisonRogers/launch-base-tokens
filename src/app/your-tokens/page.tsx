'use client';

import React from 'react';
import { useUserTokens } from '@/hooks/useUserTokens';
import PaginatedTokens from '@/components/pageComponents/paginatedTokens';
import Link from 'next/link';
function ViewYourTokensPage() {
  const tokens = useUserTokens();
  if (tokens === undefined) {
    return <div>Loading...</div>;
  }
  if (tokens?.length === 0) {
    return (
      <div className="text-center">
        <span>No tokens found</span>
        <Link href="/" className="underline hover:no-underline">
          Deploy a token here
        </Link>
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-center">Your Tokens</h1>
      {tokens && <PaginatedTokens tokens={tokens} />}
    </div>
  );
}

export default ViewYourTokensPage;
