import { FadeEffect } from "@/uikit/animation/fade-effect";
import { HomeSection } from "../const";
import { useScreenActive } from "../ctx";
import { useState } from 'react';

export function StoryTelling() {
  const show = useScreenActive(HomeSection.STORY_TELLING);
  const [showAllText, setShowAll] = useState(false);

  return (
    <div className='backdrop'>
      <div className="h-[100vh] py-[60px] lg:py-0 overflow-auto flex items-center z-10" style={{ backgroundImage: `url(/assets/bg-moai.png)`, backgroundSize: 'cover' }}>

        <div className='h-full lg:h-auto container relative z-10 bg-transparent'>
          <FadeEffect show={show} y={-50}><h1 className='text-[48px] font-[500] mb-[25px]'>The Legend</h1></FadeEffect>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
              <div onWheelCapture={e => showAllText && e.stopPropagation()} className="lg:max-h-[450px] w-full flex flex-col gap-[8px] md-[20px] lg:pr-[40px] overflow-x-hidden overflow-y-auto">
                <FadeEffect show={show} y={50}>Some time ago, there was a prosperous and civilized culture living on the legendary island of Rapa Nui, which now belongs to Easter Island. They were guided by the Makemake - an ancient god who helped them build the statues of Moai and imbued them with the spirit of Mana, who blessed the Rapa Nui islanders with bravery, strength, prosperity, peace, and protection through its resting eyes.</FadeEffect>
                <FadeEffect show={show} y={50}>The Moais are divided into five tribes, representing the natural elements - the Aaren representing earth, the Aegle representing light, the Agni representing fire, the Aqua representing water, and the Adina representing air.</FadeEffect>

                {showAllText && (
                  <>
                    <FadeEffect show={show} y={50}>However, as life began to prosper, people began to abandon their faith. Eventually, a group of Rapa Nui islanders ended up destroying the eyes of Moai, leaving behind the blessing spirit of Mana with no homes to go to. </FadeEffect>
                    <FadeEffect show={show} y={50}>Their arrogance and hubris brought about the wrath of the Makemake. Natural disasters and diseases began to swarm upon the island, and the people of Rapa Nui slowly disappeared, until no one is seen living in this once-vibrant society.</FadeEffect>
                    <FadeEffect show={show} y={50}>To protect the spirits of Moai, the Makemake hid them away in another shape - something that modern people nowadays know as the “Wicked Moai NFT”. Legend has it that Moai will bond with the worthy holders of the NFTs and bestow gifts upon them - whether luck, creativity, or strength, and ask only for care and respect in return. </FadeEffect>
                    <FadeEffect show={show} y={50}>Until now, 1043 Wicked Moai NFTs have been found all over the world, as modern people continue to explore the ancient ruins of Rapa Nui and piece together the clues left by its vanished residents.</FadeEffect>
                    <FadeEffect show={show} y={50}>The search for Moais is becoming more and more attractive to modern society, as people believe whoever beholds the “Wicked Moai” will receive its blessing and guidance into the future, and discover a long-forgotten secret of the wrath of Makemake.</FadeEffect>
                    <FadeEffect show={show} y={50}>The search for Moais is becoming more and more attractive to modern society, as people believe whoever beholds the “Wicked Moai” will receive its blessing and guidance into the future, and discover a long-forgotten secret of the wrath of Makemake.</FadeEffect>
                    <FadeEffect show={show} y={50}>Were the Rapa Nui islanders truly disappear because of the then-reigning natural disasters and deathly diseases? </FadeEffect>
                    <FadeEffect show={show} y={50}>Or their vanishment without a trace, leaving behind only daunting and mysterious stone-faced monoliths, was the result of something else more celestial…</FadeEffect>
                    <FadeEffect show={show} y={50}>Embark on the mystical journey to unveil Rapa Nui’s ancient apocalypse and embrace the malevolent power of Wicked Moai.</FadeEffect>
                  </>
                )}
              </div>

              <div className='mt-4'>
                <button onClick={() => setShowAll(prev => !prev)} className='btn-cta px-8'>{showAllText ? 'Show less' : 'Read more'}</button>
              </div>
            </div>

            <div className="w-full relative pb-4">
              <div className="sticky top-0 bottom-0 pb-4">
                <FadeEffect show={show} x={150}>
                  <img src='/assets/story-map-mobile.png' />
                </FadeEffect>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}