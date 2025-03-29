'use client';

import React from 'react';
import { useDeployedTokens } from '@/hooks/useDeployedTokens';
import PaginatedTokens from '@/components/pageComponents/paginatedTokens';

function ViewYourTokensPage() {
  const tokens = useDeployedTokens();
  return (
    <div>
      <h1 className="text-center">All Tokens</h1>
      <PaginatedTokens tokens={tokens} />
    </div>
  );
}

export default ViewYourTokensPage;
