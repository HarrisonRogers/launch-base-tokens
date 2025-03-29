export type address = `0x${string}`;

export type TokenFactoryContract = {
  address: address;
  abi: typeof import('../TokenFactory.json')['abi'];
};

export type CreateTokenParams = {
  name: string;
  symbol: string;
  supply: number;
};

export type TokenCreatedEvent = {
  tokenAddress: address;
  name: string;
  symbol: string;
  supply: bigint;
  owner: address;
};

export type DeployedToken = {
  address: address;
};

export interface ITokenFactory {
  createToken: (params: CreateTokenParams) => Promise<void>;
  getDeployedTokens: () => Promise<DeployedToken[]>;
  getUserTokens: (address: address) => Promise<DeployedToken[]>;
}
