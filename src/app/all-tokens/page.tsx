'use client';

import React from 'react';
import { useGetDeployedTokens } from '@/smart-functions/getDeployedTokens';
import PaginatedTokens from '@/components/pageComponents/paginatedTokens';

function ViewAllTokensPage() {
  const tokens = useGetDeployedTokens().sort();
  return (
    <div>
      <h1 className="text-center">All Tokens</h1>
      <PaginatedTokens tokens={tokens} />
    </div>
  );
}

export default ViewAllTokensPage;
