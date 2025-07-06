'use client';

import React from 'react';
import { useDeployedTokens } from '@/hooks/useDeployedTokens';
import PaginatedTokens from '@/components/pageComponents/paginatedTokens';

function ViewAllTokensPage() {
  const { tokens, error, isLoading } = useDeployedTokens();

  if (isLoading) {
    return (
      <div className="text-center mt-10">
        <span>Loading all tokens...</span>
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
      <h1 className="text-center">All Tokens</h1>
      <PaginatedTokens tokens={tokens || []} />
    </div>
  );
}

export default ViewAllTokensPage;
