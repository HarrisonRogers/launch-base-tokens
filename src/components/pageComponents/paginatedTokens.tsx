import { address } from '@/lib/types/contracts';
import React from 'react';

function PaginatedTokens({ tokens }: { tokens: address[] | undefined }) {
  // Handle loading state
  if (tokens === undefined) {
    return <div className="text-center">Loading tokens...</div>;
  }

  // Handle empty state
  if (tokens.length === 0) {
    return <div className="text-center">No tokens found</div>;
  }

  return (
    <div className="grid gap-4">
      {tokens.map((token) => (
        <div key={token} className="p-4 border rounded-lg">
          {token}
        </div>
      ))}
    </div>
  );
}

export default PaginatedTokens;
