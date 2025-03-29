import { useReadContract } from 'wagmi';
import TokenFactory from '@/lib/TokenFactory.json';
import { useAccount } from 'wagmi';

export const useUserTokens = () => {
  const { address } = useAccount();
  const { data: tokens } = useReadContract({
    address: process.env.NEXT_PUBLIC_TOKEN_FACTORY_ADDRESS as `0x${string}`,
    abi: TokenFactory.abi,
    functionName: 'getUserTokens',
    args: [address],
  }) as { data: `0x${string}`[] };

  return tokens;
};
