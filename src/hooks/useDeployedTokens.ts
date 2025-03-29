import { useReadContract } from 'wagmi';
import TokenFactory from '@/lib/TokenFactory.json';

export const useDeployedTokens = () => {
  const { data: tokens } = useReadContract({
    address: TokenFactory.address as `0x${string}`,
    abi: TokenFactory.abi,
    functionName: 'getDeployedTokens',
  }) as { data: `0x${string}`[] };

  return tokens;
};
