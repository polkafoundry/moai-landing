import { FadeEffect } from "@/uikit/animation/fade-effect";
import { WhitePaperIcon } from "@/uikit/icons/whitepaper-icon";
import dynamic from 'next/dynamic';
import { HomeSection } from "../const";
import { useScreenActive } from "../ctx";
const ChartComponent = dynamic(() => import('./chart').then(m => m.Chart), { ssr: false });


export function MoaiToken() {
  const show = useScreenActive(HomeSection.MOAI_TOKEN);

  return (
    <div className="h-[100vh] pt-[75px] pb-[50px] backdrop flex items-center" style={{ backgroundImage: `url(/assets/bg-moai1.png)`, backgroundSize: 'cover' }}>
      <div className='container relative z-10 bg-transparent'>
        <div className='grid grid-cols-1 lg:grid-cols-8 gap-[80px]'>
          <div className='col-span-3 text-white/80'>
            <FadeEffect show={show} y={-50}>
              <h1 className='text-[48px] font-[500] mb-[25px]'>MO Token Utility</h1>
            </FadeEffect>

            <div className='flex flex-col gap-[20px] text-white/80 mb-[28px]'>
              <FadeEffect show={show} x={-100}>
                <div>MO (Evil Moai token) is the token of the Evil Moai ecosystem based on the blockchain. It can be used for adopting Moai, exchanging Moai, participating in games and using advanced functions in the Evil Moai on-chain game world.</div>
                <div>All players will gather in the community through MO, participate in community governance and get incentives. Players who participate in the game and contribute to the community can obtain MO incentives.</div>
              </FadeEffect>
              <FadeEffect show={show} x={-200}>
                <div className="flex gap-4 mt-2">
                  <button className="btn-white w-full"><WhitePaperIcon /> WHITEPAPER</button>
                  <button className="btn-cta w-full">Join DAO</button>
                </div>
              </FadeEffect>
            </div>
          </div>

          <div className='col-span-5 flex justify-center'>
            {show && <ChartComponent />}
          </div>
        </div>
      </div>
    </div>
  )
}