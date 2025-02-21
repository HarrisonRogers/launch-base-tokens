import UserTokens from '@/components/pageComponents/userTokens';
import CreateToken from '@/components/pageComponents/createToken';
import DeployedTokens from '@/components/pageComponents/deployedTokens';

export default function Home() {
  return (
    <>
      <h1 className="text-center text-3xl md:text-5xl">
        🔥 Create Base Tokens 🔥
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 md:mt-20">
        <div className="flex flex-col">
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
