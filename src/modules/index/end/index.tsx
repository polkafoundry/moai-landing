import { DISCORD_URL, TELE_URL, TWITTER_URL } from "@/const/config";
import { FadeEffect } from "@/uikit/animation/fade-effect";
import { DiscordIcon } from "@/uikit/icons/discord-icon";
import { TelegramIcon } from "@/uikit/icons/telegram-icon";
import { TwitterIcon } from "@/uikit/icons/twitter-icon";
import Link from "next/link";
import { HomeSection } from "../const";
import { useScreenActive } from "../ctx";
export function End() {
  const show = useScreenActive(HomeSection.END);

  return (
    <div className="h-[100vh] pt-[75px] pb-[50px] backdrop flex items-center" style={{ backgroundImage: `url(/assets/bg-moai.png)`, backgroundSize: 'cover' }}>
      <div className='container relative z-10 bg-transparent'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-[80px] items-center'>
          <div className='col-span-4 text-white/80'>
            <FadeEffect show={show} x={-100}>
              <img src='/assets/ava-moai-png2.png' />
            </FadeEffect>
          </div>

          <div className='col-span-8 flex flex-col gap-[26px]'>
            <FadeEffect show={show} y={-100}>
              <div className='text-[36px] font-[500]'>The future is here, and we&lsquo;re shaping it. Be part of the conversation and stay inspired by our vision.</div>
            </FadeEffect>

            <div className='flex gap-[8px]'>
              <FadeEffect show={show} y={15}>
                <Link className='social-link' href={TELE_URL}><TelegramIcon className='text-white' /></Link>
              </FadeEffect>
              <FadeEffect show={show} y={25}>
                <Link className='social-link' href={TWITTER_URL}><TwitterIcon className='text-white' /></Link>
              </FadeEffect>
              <FadeEffect show={show} y={35}>
                <Link className='social-link' href={DISCORD_URL}><DiscordIcon className='text-white' /></Link>
              </FadeEffect>
            </div>

            <div className='flex gap-8'>
              <FadeEffect show={show} x={-15}>
                <Link className='hover:text-[var(--m-clr-text-orange)]' href={`/?section=${HomeSection.STORY_TELLING}`}>Storytelling</Link>
              </FadeEffect>

              <FadeEffect show={show} x={-35}>
                <Link className='hover:text-[var(--m-clr-text-orange)]' href={`/?section=${HomeSection.NFT_COLLECTION}`}>NFT Collection</Link>

              </FadeEffect>
              <FadeEffect show={show} x={-30}>
                <Link className='hover:text-[var(--m-clr-text-orange)]' href={`/?section=${HomeSection.ONCHAIN_GAME}`}>On-chain game</Link>

              </FadeEffect>
              <FadeEffect show={show} x={-25}>
                <Link className='hover:text-[var(--m-clr-text-orange)]' href={`/?section=${HomeSection.EVIL_CLUB}`}>Moai club</Link>
              </FadeEffect>

              <FadeEffect show={show} x={-20}>
                <Link className='hover:text-[var(--m-clr-text-orange)]' href={`/?section=${HomeSection.MOAI_TOKEN}`}>$Moai</Link>
              </FadeEffect>

              <FadeEffect show={show} x={-15}>
                <Link className='hover:text-[var(--m-clr-text-orange)]' href={`/?section=${HomeSection.FAQ}`}>FAQ</Link>
              </FadeEffect>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-[56px] right-0 z-10 pointer-events-none"><img src='/assets/ava-moai-png3.png' /></div>
    </div>
  )
}