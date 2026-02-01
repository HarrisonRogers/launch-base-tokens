'use client';

import React from 'react';
import { useUserTokens } from '@/hooks/useUserTokens';
import TokenList from '../tokenList';

function UserTokens() {
  const { tokens, error, isLoading } = useUserTokens();
  
  if (isLoading) {
    return (
      <div className="p-4 text-center">
        <span>Loading your tokens...</span>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="p-4 text-center text-red-500">
        <span>Error loading tokens: {error.message}</span>
      </div>
    );
  }
  
  const orderedTokens = tokens ? [...tokens].reverse().slice(0, 5) : [];

  return (
    <TokenList title="Your Tokens" tokens={orderedTokens} deployed={false} />
  );
}

export default UserTokens;
