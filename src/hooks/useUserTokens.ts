import { useReadContract } from 'wagmi';
import { abi } from '@/web3/abi';
import { useAccount } from 'wagmi';
import { contractAddress } from '@/web3/address';

export const useUserTokens = () => {
  const { address } = useAccount();
  
  const { data: tokens, error, isLoading } = useReadContract({
    address: contractAddress,
    abi: abi,
    functionName: 'getUserTokens',
    args: [address as `0x${string}`],
    query: {
      enabled: !!address, // Only run query when address is available
    },
  });

  return { tokens, error, isLoading };
};
