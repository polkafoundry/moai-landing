import { FadeEffect } from "@/uikit/animation/fade-effect";
import { Pagination, Autoplay, Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { ImageCard1, ImageCard2, ImageCard3 } from "@/uikit/image-card";
import { HomeSection } from "../const";
import { useScreenActive } from "../ctx";
import styles from './on-chain-game.module.scss';
import { useState } from "react";
import clsx from "clsx";
import { PlayGameIcon } from "@/uikit/icons/play-game-icon";
import { PlayIcon } from "@/uikit/icons/play-icon";

const games = [
  { name: 'Game 1', banner: '/assets/bg-moai1.png' },
  { name: 'Game 2', banner: '/assets/bg-moai2.png' },
  { name: 'Game 3', banner: '/assets/bg-moai3.png' },
  { name: 'Game 5', banner: '/assets/bg-moai5.png' },
  { name: 'Game 1', banner: '/assets/bg-moai1.png' },
  { name: 'Game 2', banner: '/assets/bg-moai2.png' },
  { name: 'Game 3', banner: '/assets/bg-moai3.png' },
  { name: 'Game 5', banner: '/assets/bg-moai5.png' },
  { name: 'Game 1', banner: '/assets/bg-moai1.png' },
  { name: 'Game 2', banner: '/assets/bg-moai2.png' },
  { name: 'Game 3', banner: '/assets/bg-moai3.png' },
  { name: 'Game 5', banner: '/assets/bg-moai5.png' },
]

export function OnChainGame() {
  const show = useScreenActive(HomeSection.ONCHAIN_GAME);
  const [swiper, setSwiper] = useState<SwiperClass>(null as any);
  const [swiperIndex, setSwiperIndex] = useState(0);
  const [isPlaying, setPlaying] = useState(false);
  const handlePlay = () => {
    setPlaying(true);
  }

  return (
    <div onClick={() => setPlaying(false)} className="h-[100vh] pt-[75px] pb-[50px] backdrop flex items-center justify-center" style={{ backgroundImage: `url(/assets/bg-moai1.png)`, backgroundSize: 'cover' }}>
      <div>
        <div className="container relative z-10 mb-[40px]">
          <FadeEffect y={-50} show={show}>
            <div className='flex items-baseline gap-2'>
              <h1 className='text-[48px] font-[500]'>Wicked Moai</h1>
              <div className="text-[20px] text-[#E76F16]">Join the Evil Moai game world fully on-chain.</div>
            </div>
          </FadeEffect>
        </div>

        <div className='container'>
          <div className="relative z-50">
            <Swiper
              onSwiper={setSwiper}
              onActiveIndexChange={swiper => {
                setSwiperIndex(swiper.activeIndex);
                setPlaying(false);
              }}
              pagination={{
                clickable: true,
                el: '#on-chain-game-pagination',
                bulletClass: styles['swiper-pagination-bullet'],
                bulletActiveClass: styles['swiper-pagination-bullet-active'],
              }}
              modules={[Pagination, Autoplay]}
              className={clsx(styles.swiper, '-translate-x-[100px]')}
              spaceBetween={50}
              centeredSlides
              slidesPerView='auto'
              grabCursor
            >
              {games.map((game, idx) => (
                <SwiperSlide key={idx} onClick={(e) => {
                  e.stopPropagation();
                  swiper.slideTo(idx)
                }} className={clsx({
                  'scale-[2] relative z-50': isPlaying,
                  'scale-[1] relative z-0': isPlaying && idx !== swiperIndex,
                })}>
                  <div className={clsx('flex flex-col justify-center items-center relative transition-all', {
                  })}>
                    <ImageCard1 img={game.banner} />
                    {(idx !== swiperIndex || !isPlaying) && <div className='absolute top-[10px] right-[2px] bottom-[34px] left-[2px] bg-black/50 rounded-[10px] pointer-events-none' />}

                    {!isPlaying && (
                      <div
                        onClick={handlePlay}
                        className={clsx(
                          'absolute top-0 right-0 left-0 bottom-0 text-[48px] font-[500]',
                          'flex flex-col justify-center items-center gap-8px] mb-10 z-10',
                          { 'hidden': swiperIndex !== idx }
                        )}
                      >
                        {game.name}
                        <PlayIcon width={40} height={40} />
                      </div>
                    )}

                    <div className={clsx({ 'invisible': swiperIndex === idx })}>{game.name}</div>

                    {swiperIndex === idx && !isPlaying && (
                      <div className='absolute top-[calc(100%-56px)]'>
                        <button className="btn-cta flex gap-2 items-center px-8"><PlayGameIcon className='text-white' /> Play game</button>
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div id='on-chain-game-pagination' className={clsx('swiper-pagination absolute pt-4 top-full left-0 right-0 w-full h-6 flex justify-center items-center gap-[8px]', {
            })}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
