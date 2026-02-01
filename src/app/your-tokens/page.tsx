'use client';

import React from 'react';
import { useUserTokens } from '@/hooks/useUserTokens';
import PaginatedTokens from '@/components/pageComponents/paginatedTokens';

function ViewYourTokensPage() {
  const { tokens, error, isLoading } = useUserTokens();

  if (isLoading) {
    return (
      <div className="text-center mt-10">
        <span>Loading your tokens...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-10 text-red-500">
        <span>Error loading tokens: {error.message}</span>
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
