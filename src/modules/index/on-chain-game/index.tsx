import { ImageCard1, ImageCard3 } from "@/uikit/image-card";

export function OnChainGame() {
  return (
    <div className="h-[100vh] pt-[75px] pb-[50px] backdrop flex items-center justify-center"  style={{ backgroundImage: `url(/assets/bg-moai1.png)`, backgroundSize: 'cover' }}>
      <div>
        <div className="container relative z-10 mb-[30px]">
          <div className='flex items-baseline gap-2'>
            <h1 className='text-[48px] font-[500]'>On-Chain Game</h1>
            <div className="text-[20px] text-[#E76F16]">Join the Evil Moai game world fully on-chain.</div>
          </div>
        </div>

        <div className='container flex relative z-10 gap-[120px]'>
          <div>

            <div className='grid grid-cols-2 gap-x-[30px] gap-y-[40px]'>
              <div className='flex flex-col items-center'>
                <ImageCard1 />
                <div className='text-[20px] font-[500]'>Moai in wonderland</div>
              </div>
              <div className='flex flex-col items-center'>
                <ImageCard1 />
                <div className='text-[20px] font-[500]'>Moai in wonderland</div>
              </div>
              <div className='flex flex-col items-center'>
                <ImageCard1 />
                <div className='text-[20px] font-[500]'>Moai in wonderland</div>
              </div>
              <div className='flex flex-col items-center'>
                <ImageCard1 />
                <div className='text-[20px] font-[500]'>Moai in wonderland</div>
              </div>
              {/* <div className='flex flex-col'>
              <ImageCard1 />
              <div className='text-[20px] font-[500]'>Moai in wonderland</div>
            </div>
            <div className='flex flex-col'>
              <ImageCard1 />
              <div className='text-[20px] font-[500]'>Moai in wonderland</div>
            </div>
            <div className='flex flex-col'>
              <ImageCard1 />
              <div className='text-[20px] font-[500]'>Moai in wonderland</div>
            </div> */}
            </div>
          </div>

          <div className='flex-1 flex justify-center'>
            <div>
              <ImageCard3 imgClass="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
