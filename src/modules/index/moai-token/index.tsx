import { WhitePaperIcon } from "@/uikit/icons/whitepaper-icon";

export function MoaiToken() {
  return (
    <div className="h-[100vh] pt-[75px] pb-[50px] backdrop flex items-center" style={{ backgroundImage: `url(/assets/bg-moai1.png)`, backgroundSize: 'cover' }}>
      <div className='container relative z-10 bg-transparent'>
        <div className='grid grid-cols-5 gap-[40px]'>
          <div className='col-span-2 text-white/80'>
            <h1 className='text-[48px] font-[500] mb-[25px]'>MO Token Utility</h1>
            <div className='flex flex-col gap-[20px] text-white/80 mb-[28px]'>
              <div>MO (Evil Moai token) is the token of the Evil Moai ecosystem based on the blockchain. It can be used for adopting Moai, exchanging Moai, participating in games and using advanced functions in the Evil Moai on-chain game world.</div>
              <div>All players will gather in the community through MO, participate in community governance and get incentives. Players who participate in the game and contribute to the community can obtain MO incentives.</div>
              <div className="flex gap-4 mt-2">
                <button className="btn-white w-full"><WhitePaperIcon/> WHITEPAPER</button>
                <button className="btn-cta w-full">Join DAO</button>
              </div>
            </div>
          </div>

          <div className='col-span-3 flex justify-center'>
            <div className="rounded-full w-[400px] h-[400px] bg-gray-300 flex items-center justify-center">Yo</div>
          </div>
        </div>
      </div>
    </div>
  )
}