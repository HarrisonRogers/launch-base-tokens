'use client';

import React, { useMemo } from 'react';
import { useDeployedTokens } from '@/hooks/useDeployedTokens';
import TokenList from '../tokenList';

function DeployedTokens() {
  const tokens = useDeployedTokens();
  
  const shortenedTokens = useMemo(() => {
    if (!tokens) return [];
    return tokens.slice().reverse().slice(0, 5);
  }, [tokens]);

  return <TokenList title="Deployed Tokens" tokens={shortenedTokens} />;
}

export default DeployedTokens;
