import { useReadContract } from 'wagmi';
import { abi } from '@/web3/abi';
import { contractAddress } from '@/web3/address';

export const useDeployedTokens = () => {
  const { data: tokens } = useReadContract({
    address: contractAddress,
    abi: abi,
    functionName: 'getDeployedTokens',
  });

  return tokens;
};
