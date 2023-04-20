import { Swiper as SwiperClass, Navigation, Autoplay, Pagination, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FadeEffect } from "@/uikit/animation/fade-effect";
import { HomeSection } from "../const";
import { useScreenActive } from "../ctx";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { mainSliders } from "../main-slider/main-slider";
import styles from './story-telling.module.scss';

const faq = [
  { question: '1. What is Evil Moai?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et auctor lectus. Curabitur consectetur metus vitae tristique rhoncus. Nunc a ex nisl. Ut tincidunt sollicitudin massa ut sagittis. Mauris rutrum nulla dui, id vestibulum erat ultrices vitae. Cras eleifend magna cursus sem dapibus, vitae finibus augue convallis. Mauris nec mi maximus, placerat urna id, placerat felis. Nam massa ligula, sollicitudin et malesuada a, aliquam eu ipsum. Aenean ultricies cursus mi.' },
  { question: '2. Which blockchain is Wicked Moai on?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et auctor lectus. Curabitur consectetur metus vitae tristique rhoncus. Nunc a ex nisl. Ut tincidunt sollicitudin massa ut sagittis. Mauris rutrum nulla dui, id vestibulum erat ultrices vitae. Cras eleifend magna cursus sem dapibus, vitae finibus augue convallis. Mauris nec mi maximus, placerat urna id, placerat felis. Nam massa ligula, sollicitudin et malesuada a, aliquam eu ipsum. Aenean ultricies cursus mi.' },
  { question: '3. How is the on-chain game world utilized in Wicked Moai?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et auctor lectus. Curabitur consectetur metus vitae tristique rhoncus. Nunc a ex nisl. Ut tincidunt sollicitudin massa ut sagittis. Mauris rutrum nulla dui, id vestibulum erat ultrices vitae. Cras eleifend magna cursus sem dapibus, vitae finibus augue convallis. Mauris nec mi maximus, placerat urna id, placerat felis. Nam massa ligula, sollicitudin et malesuada a, aliquam eu ipsum. Aenean ultricies cursus mi.' },
  { question: '4. What is Wicked Moai\'s token?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et auctor lectus. Curabitur consectetur metus vitae tristique rhoncus. Nunc a ex nisl. Ut tincidunt sollicitudin massa ut sagittis. Mauris rutrum nulla dui, id vestibulum erat ultrices vitae. Cras eleifend magna cursus sem dapibus, vitae finibus augue convallis. Mauris nec mi maximus, placerat urna id, placerat felis. Nam massa ligula, sollicitudin et malesuada a, aliquam eu ipsum. Aenean ultricies cursus mi.' },
  { question: '5. What types of NFTs are available in Wicked Moai?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et auctor lectus. Curabitur consectetur metus vitae tristique rhoncus. Nunc a ex nisl. Ut tincidunt sollicitudin massa ut sagittis. Mauris rutrum nulla dui, id vestibulum erat ultrices vitae. Cras eleifend magna cursus sem dapibus, vitae finibus augue convallis. Mauris nec mi maximus, placerat urna id, placerat felis. Nam massa ligula, sollicitudin et malesuada a, aliquam eu ipsum. Aenean ultricies cursus mi.' },
  { question: '6. How many NFTs available in the collection?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et auctor lectus. Curabitur consectetur metus vitae tristique rhoncus. Nunc a ex nisl. Ut tincidunt sollicitudin massa ut sagittis. Mauris rutrum nulla dui, id vestibulum erat ultrices vitae. Cras eleifend magna cursus sem dapibus, vitae finibus augue convallis. Mauris nec mi maximus, placerat urna id, placerat felis. Nam massa ligula, sollicitudin et malesuada a, aliquam eu ipsum. Aenean ultricies cursus mi.' },
  { question: '7. What is the rarity system for Wicked Moai NFTs and how does it affect gameplay?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et auctor lectus. Curabitur consectetur metus vitae tristique rhoncus. Nunc a ex nisl. Ut tincidunt sollicitudin massa ut sagittis. Mauris rutrum nulla dui, id vestibulum erat ultrices vitae. Cras eleifend magna cursus sem dapibus, vitae finibus augue convallis. Mauris nec mi maximus, placerat urna id, placerat felis. Nam massa ligula, sollicitudin et malesuada a, aliquam eu ipsum. Aenean ultricies cursus mi.' },
  { question: '8. How can I contribute to the development of Wicked Moai, such as through suggesting new ideas or reporting bugs?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et auctor lectus. Curabitur consectetur metus vitae tristique rhoncus. Nunc a ex nisl. Ut tincidunt sollicitudin massa ut sagittis. Mauris rutrum nulla dui, id vestibulum erat ultrices vitae. Cras eleifend magna cursus sem dapibus, vitae finibus augue convallis. Mauris nec mi maximus, placerat urna id, placerat felis. Nam massa ligula, sollicitudin et malesuada a, aliquam eu ipsum. Aenean ultricies cursus mi.' },
  { question: '9. Is there a community or forum for Wicked Moai where I can connect with other players and discuss strategies?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et auctor lectus. Curabitur consectetur metus vitae tristique rhoncus. Nunc a ex nisl. Ut tincidunt sollicitudin massa ut sagittis. Mauris rutrum nulla dui, id vestibulum erat ultrices vitae. Cras eleifend magna cursus sem dapibus, vitae finibus augue convallis. Mauris nec mi maximus, placerat urna id, placerat felis. Nam massa ligula, sollicitudin et malesuada a, aliquam eu ipsum. Aenean ultricies cursus mi.' },
  { question: '10. What is the roadmap for future updates and features for Wicked Moai?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et auctor lectus. Curabitur consectetur metus vitae tristique rhoncus. Nunc a ex nisl. Ut tincidunt sollicitudin massa ut sagittis. Mauris rutrum nulla dui, id vestibulum erat ultrices vitae. Cras eleifend magna cursus sem dapibus, vitae finibus augue convallis. Mauris nec mi maximus, placerat urna id, placerat felis. Nam massa ligula, sollicitudin et malesuada a, aliquam eu ipsum. Aenean ultricies cursus mi.' },
];

export function StoryTelling() {
  const [scroll, setScroll] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  // const elRef = useRef<HTMLDivElement>(null);
  const show = useScreenActive(HomeSection.STORY_TELLING);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setScroll(true);
  //   }, 3000)
  //   if (!elRef.current) return;
  //   elRef.current.onwheel = function (e) {
  //     e.stopPropagation();
  //   }
  // }, []);
  return (
    <div className="h-[100vh] pt-[75px] pb-[50px] backdrop flex items-center" style={{ backgroundImage: `url(/assets/bg-moai1.png)`, backgroundSize: 'cover' }}>

      <div className='container relative z-10 bg-transparent'>
        <FadeEffect show={show} y={-50}><h1 className='text-[48px] font-[500] mb-[25px]'>Story telling</h1></FadeEffect>

        <div onWheelCapture={e => e.stopPropagation()} className={clsx('max-h-[500px] overflow-auto', {
        })}>
          <div className="pr-[40px]">
            <div className="grid grid-cols-2 gap-[60px]">
              <div className="w-full flex flex-col gap-[8px]">
                <FadeEffect show={show}>Some time ago, there was a prosperous and civilized culture living on the legendary island of Rapa Nui, which now belongs to Easter Island. They were guided by the Makemake - an ancient god who helped them build the statues of Moai and imbued them with the spirit of Mana, who blessed the Rapa Nui islanders with bravery, strength, prosperity, peace, and protection through its resting eyes.</FadeEffect>
                <FadeEffect show={show}>The Moais are divided into five tribes, representing the natural elements - the Aaren representing earth, the Aegle representing light, the Agni representing fire, the Aqua representing water, and the Adina representing air.</FadeEffect>
                <FadeEffect show={show}>However, as life began to prosper, people began to abandon their faith. Eventually, a group of Rapa Nui islanders ended up destroying the eyes of Moai, leaving behind the blessing spirit of Mana with no homes to go to. </FadeEffect>
                <FadeEffect show={show}>Their arrogance and hubris brought about the wrath of the Makemake. Natural disasters and diseases began to swarm upon the island, and the people of Rapa Nui slowly disappeared, until no one is seen living in this once-vibrant society.</FadeEffect>
                <FadeEffect show={show}>To protect the spirits of Moai, the Makemake hid them away in another shape - something that modern people nowadays know as the “Wicked Moai NFT”. Legend has it that Moai will bond with the worthy holders of the NFTs and bestow gifts upon them - whether luck, creativity, or strength, and ask only for care and respect in return. </FadeEffect>
                <FadeEffect show={show}>Until now, 1043 Wicked Moai NFTs have been found all over the world, as modern people continue to explore the ancient ruins of Rapa Nui and piece together the clues left by its vanished residents.</FadeEffect>
                <FadeEffect show={show}>The search for Moais is becoming more and more attractive to modern society, as people believe whoever beholds the “Wicked Moai” will receive its blessing and guidance into the future, and discover a long-forgotten secret of the wrath of Makemake.</FadeEffect>
                <FadeEffect show={show}>The search for Moais is becoming more and more attractive to modern society, as people believe whoever beholds the “Wicked Moai” will receive its blessing and guidance into the future, and discover a long-forgotten secret of the wrath of Makemake.</FadeEffect>
                <FadeEffect show={show}>Were the Rapa Nui islanders truly disappear because of the then-reigning natural disasters and deathly diseases? </FadeEffect>
                <FadeEffect show={show}>Or their vanishment without a trace, leaving behind only daunting and mysterious stone-faced monoliths, was the result of something else more celestial…</FadeEffect>
                <FadeEffect show={show}>Embark on the mystical journey to unveil Rapa Nui’s ancient apocalypse and embrace the malevolent power of Wicked Moai.</FadeEffect>
              </div>
              <div className="w-full relative">
                <div className="sticky top-0 bottom-0">
                  <div className="flex justify-center items-center h-[450px]">
                    <Swiper
                      pagination={{
                        clickable: true,
                        el: '#evil2-club-pagination',
                        bulletClass: styles['swiper-pagination-bullet'],
                        bulletActiveClass: styles['swiper-pagination-bullet-active'],
                      }}
                      loop
                      modules={[Pagination, Autoplay]}
                      spaceBetween={20}
                      effect={"fade"}
                      slidesPerView={1}
                      speed={1500}
                      grabCursor
                      autoplay={{
                        delay: 4000,
                      }}
                    >
                      {mainSliders.map((slider, idx) => (
                        <SwiperSlide key={idx} className='flex flex-col gap-[10px]'>
                          <img src={slider.backgroundImgSmall} className='w-full' />
                          <div className='flex justify-between'>
                            <div className='text-[32px] font-[500]'>{slider.name}</div>
                            <button className='btn-cta px-8'>Discover more</button>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <div id='evil2-club-pagination' className='swiper-pagination absolute top-full left-0 w-full h-4 flex items-center gap-[8px] z-50'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}