'use client';

import React from 'react';
import { useDeployedTokens } from '@/hooks/useDeployedTokens';
import TokenList from '../tokenList';
function DeployedTokens() {
  const tokens = useDeployedTokens();
  const shortenedTokens = tokens ? [...tokens].reverse().slice(0, 5) : [];

  return <TokenList title="Deployed Tokens" tokens={shortenedTokens} />;
}

export default DeployedTokens;
