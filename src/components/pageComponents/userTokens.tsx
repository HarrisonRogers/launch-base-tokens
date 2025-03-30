'use client';

import React from 'react';
import { useUserTokens } from '@/hooks/useUserTokens';
import TokenList from '../tokenList';

function UserTokens() {
  const tokens = useUserTokens();
  const orderedTokens = tokens ? [...tokens].reverse().slice(0, 5) : [];

  return (
    <TokenList title="Your Tokens" tokens={orderedTokens} deployed={false} />
  );
}

export default UserTokens;
