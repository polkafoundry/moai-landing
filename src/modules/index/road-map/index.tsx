import { FadeEffect } from "@/uikit/animation/fade-effect";
import { HomeSection } from "../const";
import { useScreenActive } from "../ctx";

export function RoadMap() {
  const show = useScreenActive(HomeSection.ROADMAP);

  return (

    <div className='backdrop overflow-hidden'>
      <div className="h-[100vh] py-[60px] lg:py-0 overflow-auto flex items-center justify-center z-10" style={{ backgroundImage: `url(/assets/bg-moai.png)`, backgroundSize: 'cover' }}>
        <div className='container relative z-10'>
          <FadeEffect show={show} y={-50}><h1 className='text-[48px] font-[500] mb-[10px]'>Moai adventure</h1></FadeEffect>

          <div className='grid grid-cols-1 w-full'>
            <div className='grid grid-cols-4 w-full gap-[20px]'>
              <div></div>
              <div className='relative flex justify-end items-end'>
                <div className="absolute bottom-[-20px] left-[calc(50%-20px)]">
                  <RoadMapNo no={2} />
                </div>

                <FadeEffect show={show} x={-50}>
                  <div className='flex gap-4 flex-col-reverse mb-[40px]'>
                    <div className='rounded-[24px] border border-[#FC9303] p-[20px]'>Airdrop, KOLs Networking, Game Release, Staking & Trading Rewards, TGE</div>
                    <div className='text-highlight text-center text-[20px] font-[500]'>Community Development</div>
                  </div>
                </FadeEffect>
              </div>
              <div></div>
              <div className='relative'>
                <div className="absolute bottom-[-20px] left-[calc(50%-20px)]">
                  <RoadMapNo no={4} />
                </div>
                <FadeEffect show={show} y={-50}>
                  <div className='flex gap-4 mb-[40px] flex-col-reverse'>
                    <div className='rounded-[24px] border border-[#FC9303] p-[20px]'>SDK to enable the creation/integration of existing games that can operate entirely on-chain</div>
                    <div className='text-highlight text-center text-[20px] font-[500]'>On-chain Game World</div>
                  </div>
                </FadeEffect>
              </div>
            </div>
            <div className="h-[2px] w-full bg-gradient-to-r from-[#E71A16] to-[#FC9303]"></div>
            <div className='grid grid-cols-4 gap-[20px]'>
              <div className='relative'>
                <div className="absolute top-[-20px] left-[calc(50%-20px)]">
                  <RoadMapNo no={1} />
                </div>

                <FadeEffect show={show} y={50} className='flex flex-col gap-4 mt-[40px]'>
                  <div className='rounded-[24px] border border-[#FC9303] p-[20px]'>Community-building, Blockchain & Infrastructure Development, Game & NFT Development, TGE preparation</div>
                  <div className='text-highlight text-center text-[20px] font-[500]'>Product Development</div>
                </FadeEffect>
              </div>
              <div></div>
              <div className='relative'>
                <div className="absolute top-[-20px] left-[calc(50%-20px)]">
                  <RoadMapNo no={3} />
                </div>
                <FadeEffect show={show} y={50} className='flex flex-col gap-4 mt-[40px]'>
                  <div className='rounded-[24px] border border-[#FC9303] p-[20px]'>DAO Governance, Game World Development, NFT Collection
                    and Storytelling</div>
                  <div className='text-highlight text-center text-[20px] font-[500]'>Ecosystem Growth</div>
                </FadeEffect>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function RoadMapNo({ no }: { no: number }) {
  return (
    <div className="w-[40px] h-[40px] bg-[#FC9303] rounded-full p-1 bg-opacity-40">
      <div className="w-full h-full p-1 bg-[#fc5603] rounded-full bg-opacity-60">
        <div className="flex w-full h-full items-center justify-center text-[14px] bg-gradient-to-r from-[#E71A16] to-[#FC9303] rounded-full">{no}</div>
      </div>
    </div>
  )
}