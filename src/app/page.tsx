import UserTokens from '@/components/pageComponents/userTokens';
import CreateToken from '@/components/pageComponents/createToken';
import DeployedTokens from '@/components/pageComponents/deployedTokens';

export default function Home() {
  return (
    <>
      <h1 className="text-center">Create Base Tokens</h1>
      <div className="grid grid-cols-1 overflow-x-hidden md:grid-cols-2 gap-4 mt-20">
        <div className="flex flex-col gap-4">
          <CreateToken />
        </div>
        <div className="flex flex-col gap-4">
          <UserTokens />
          <DeployedTokens />
        </div>
      </div>
    </>
  );
}
