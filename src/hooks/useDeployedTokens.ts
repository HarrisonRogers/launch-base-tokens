import { useReadContract } from 'wagmi';
import { abi } from '@/web3/abi';
import { contractAddress } from '@/web3/address';

export const useDeployedTokens = () => {
  const { data: tokens, error, isLoading } = useReadContract({
    address: contractAddress,
    abi: abi,
    functionName: 'getDeployedTokens',
    query: {
      refetchInterval: 30000, // Refetch every 30 seconds for fresh data
    },
  });

  return { tokens, error, isLoading };
};
