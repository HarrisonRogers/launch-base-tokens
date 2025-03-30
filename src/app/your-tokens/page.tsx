'use client';

import React from 'react';
import { useUserTokens } from '@/hooks/useUserTokens';
import PaginatedTokens from '@/components/pageComponents/paginatedTokens';
function ViewYourTokensPage() {
  const tokens = useUserTokens();

  return (
    <div>
      <h1 className="text-center">Your Tokens</h1>
      {tokens && <PaginatedTokens tokens={tokens} />}
    </div>
  );
}

export default ViewYourTokensPage;
