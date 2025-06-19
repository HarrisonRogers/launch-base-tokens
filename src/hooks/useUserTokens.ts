import { useReadContract } from 'wagmi';
import { abi } from '@/web3/abi';
import { useAccount } from 'wagmi';
import { contractAddress } from '@/web3/address';

export const useUserTokens = () => {
  const { address } = useAccount();
  const { data: tokens } = useReadContract({
    address: contractAddress,
    abi: abi,
    functionName: 'getUserTokens',
    args: [address as `0x${string}`],
  });

  return tokens;
};
