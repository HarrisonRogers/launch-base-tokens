export type TokenFactoryContract = {
  address: `0x${string}`;
  abi: typeof import('../TokenFactory.json')['abi'];
};

export type CreateTokenParams = {
  name: string;
  symbol: string;
  supply: number;
};

export type TokenCreatedEvent = {
  tokenAddress: `0x${string}`;
  name: string;
  symbol: string;
  supply: bigint;
  owner: `0x${string}`;
};

export type DeployedToken = {
  address: `0x${string}`;
};

export interface ITokenFactory {
  createToken: (params: CreateTokenParams) => Promise<void>;
  getDeployedTokens: () => Promise<DeployedToken[]>;
  getUserTokens: (address: `0x${string}`) => Promise<DeployedToken[]>;
}
