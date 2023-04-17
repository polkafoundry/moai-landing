import { DiscordIcon } from "@/uikit/icons/discord-icon";
import { ImageCard2 } from "@/uikit/image-card";

export function NftCollection() {
  return (
    <div className="h-[100vh] pt-[75px] pb-[50px] backdrop"  style={{ backgroundImage: `url(/assets/bg-moai1.png)`, backgroundSize: 'cover' }}>
      <div className='container grid grid-cols-2 relative z-10'>
        <div>
          <h1 className='text-[48px] mb-[12px] font-[500]'>NFT Collection</h1>
          <div className='text-white/80 mb-[40px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et auctor lectus. Curabitur consectetur metus vitae tristique rhoncusc a nisl.</div>

          <div className='flex flex-col gap-10'>
            <div className='flex gap-[30px]'>
              <div><ImageCard2 /></div>
              <div className='flex flex-col gap-[10px]'>
                <div className='text-[24px]'>NFT collectibles</div>
                <div className='text-white/50 text-[14px]'>Special NFT collectible for special user to unlock special features</div>
                <div><button className='btn-cta px-8 flex gap-2 items-center'><DiscordIcon/> Join private club</button></div>
              </div>
            </div>

            <div className='flex gap-[30px]'>
              <div><ImageCard2 /></div>
              <div className='flex flex-col gap-[10px]'>
                <div className='text-[24px]'>NFT collectibles</div>
                <div className='text-white/50 text-[14px]'>Special NFT collectible for special user to unlock special features</div>
                <div><button className='btn-cta px-8 flex gap-2 items-center'><DiscordIcon/> Join private club</button></div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>

    </div>
  );
}
