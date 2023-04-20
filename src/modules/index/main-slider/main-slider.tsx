import { Swiper as SwiperClass, Navigation, Autoplay, EffectFade } from 'swiper';
import { OpenseaIcon } from '@/uikit/icons/opensea-icon';
import { Swiper, SwiperSlide } from 'swiper/react';
import clsx from 'clsx';
import styles from './main-slider.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
SwiperClass.use([Navigation]);

export const mainSliders = [
  {
    backgroundImg: '/assets/bg-moai2.png',
    backgroundImgSmall: '/assets/bg-moai2-small.png',
    name: 'Aqua/Water', founder: '750 BC', power: 'Tsunami, Ice, Healing', amount: 1700,
    traits: ['Smooth', 'Gentle', 'Flow', 'Divine strength', 'Calm'],
    desc: 'The Aqua tribe believed in the power of water and inherited its ability to heal, soothe, and nourish. They used their knowledge of the sea to craft beautiful sculptures from coral, shells, and other sea-inspired materials. The Makemake god has granted them the powerful blessing of making ice and tsunami. Among the five tribes, the Aqua is the most gentle and forgiving.',
  },
  {
    backgroundImg: '/assets/bg-moai1.png',
    backgroundImgSmall: '/assets/bg-moai1-small.png',
    name: 'Aegle/Light', founder: '920 BC', power: 'Electricity, Barrier Creation, Mind-reading', amount: 1700,
    traits: ['Celestial', 'Well-being', 'Glow', 'Subtle & Strong'],
    desc: 'The Aegle was gifted with the most crucial element representing civilization and life - the light, and hence their powers were one of a kind also. The Aegle tribe can not only create thunder and barriers, but they can also read their opponents’ minds. When praying to the Moais of the Aegle, islanders must be extremely honest and transparent - as the light of the Makemake and shine through their lies and mysteries.',
  },
  {
    backgroundImg: '/assets/bg-moai3.png',
    backgroundImgSmall: '/assets/bg-moai3-small.png',
    name: 'Agni/Fire', founder: '333 BC', power: 'Energy Blast, Animal Creation & Shifting, Invulnerability', amount: 2450,
    traits: ['Smooth', 'Gentle', 'Flow', 'Divine strength', 'Calm'],
    desc: 'The Agni tribe representing Fire was a peaceful yet occasionally arrogant group of enablers who have the connection so powerful that they can create energy blasts, perform animal creation and shifting, and they possess invulnerability. The Agni is kind, and blesses all Rapa Nui islanders, but will not tolerate any disrupting and exhausting behaviors.',
  },
  {
    backgroundImg: '/assets/bg-moai1.png',
    backgroundImgSmall: '/assets/bg-moai1-small.png',
    name: 'Adina/Air', founder: '692 BC', power: 'Airbending, Flying, Super speed', amount: 2500,
    traits: ['Everywhere and nowhere', 'Invisible'],
    desc: 'The Adina was a tribe of ancient airbenders, who could make the wind their ally and bend the air to their will. With a great roar, the Makemake god showers them with super speed, flying ability, and airbending powers. As a result, the Adina can be everywhere and yet nowhere, all at once. They can detect non-permitted behaviors anytime.',
  },
  {
    backgroundImg: '/assets/bg-moai1.png',
    backgroundImgSmall: '/assets/bg-moai1-small.png',
    name: 'Aaren/Earth', founder: '872 BC', power: 'Nature Control, Earthquakes', amount: 2080,
    traits: ['Calmness', 'Subtly Powerful', 'Values Family'],
    desc: 'In the beginning, the Makemake god has created five elemental tribes: Fire, Water, Air, Earth, and Light. These five tribes were meant to work together in harmony to maintain the protection of the Rapa Nui islanders. The Makemake chose the name Aaren to represent a humble yet powerful Moai tribe - deemed the strongest of the five with the power to control nature and can create earthquakes.',
  },
]

export const sliderThumbs = [
  { img: '/assets/aqua.png', name: 'Aqua' },
  { img: '/assets/aaren.png', name: 'Aegle' },
  { img: '/assets/agni.png', name: 'Agni' },
  { img: '/assets/aqua.png', name: 'Adina' },
  { img: '/assets/aaren.png', name: 'Aaren' },
]

export function MainSlider() {
  const router = useRouter();
  const tribe = router.query.tribe as string;
  const elRef = useRef<HTMLDivElement>(null);
  const slideToRef = useRef<any>();
  const [swiper, setSwiper] = useState<SwiperClass>(null as any);
  const [swiperIndex, setSwiperIndex] = useState(0);

  useEffect(() => {
    if (!elRef.current) return;

    elRef.current.onwheel = function (e) {
      if (swiperIndex === 4 && e.deltaY > 0) {

      } else {
        e.stopPropagation();
      }

      clearTimeout(slideToRef.current);
      slideToRef.current = setTimeout(() => {
        const nextIdx = e.deltaY > 0 ? Math.min(4, swiperIndex + 1) : Math.max(0, swiperIndex - 1);
        swiper.slideTo(nextIdx);
      }, 200);
    }
  }, [elRef, swiperIndex, swiper]);

  useEffect(() => {
    if (!swiper || !(swiper as any).enabled) return;

    const idx = Math.max(0, sliderThumbs.findIndex(slider => slider.name === tribe) || 0);
    swiper.slideTo(idx);
  }, [swiper, tribe]);

  return (
    <main className='relative' ref={elRef}>
      <Swiper
        onSwiper={setSwiper}
        modules={[Autoplay, EffectFade]}
        onActiveIndexChange={swiper => setSwiperIndex(swiper.activeIndex)}
        spaceBetween={0}
        effect={"fade"}
        slidesPerView={1}
        speed={1500}
        // autoplay={{
        //   delay: 5000,
        // }}
        navigation={{
          nextEl: '.next-slider',
          prevEl: '.prev-slider',
        }}
      >
        {mainSliders.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div key={idx} className='relative h-[calc(100vh)] bg-black'>
              <div className={styles['backdrop-right']}></div>
              <div className={styles['backdrop-bottom']}></div>

              <div
                style={{ backgroundImage: `url(${item.backgroundImg})`, backgroundSize: 'cover' }}
                className='absolute top-0 right-0 bottom-0 left-0 opacity-20'
              />

              <div className='flex h-[100vh] justify-center items-center relative z-10'>
                <div className='container mx-auto grid grid-cols-12 relative text-white'>
                  <div className='col-span-8 mb-[100px] flex justify-center'>
                    <img className='mb-[60px]' src={item.backgroundImgSmall} />
                  </div>
                  <div className='col-span-4 flex items-start justify-end flex-col gap-[10px] pb-[48px] lg:pb-[96px]'>
                    <div onWheel={e => e.stopPropagation()} onWheelCapture={e => e.stopPropagation()} className='h-[300px] overflow-y-scroll pr-[30px]'>
                      <h2 className='text-[48px] font-semibold leading-10 mb-[24px]'>{item.name}</h2>
                      <div className='flex flex-col gap-[10px]'>
                        <div className='flex items-center'><div className='text-white/60 text-[14px] w-[70px]'>FOUNDER</div> <span>{item.founder}</span></div>
                        <div className='flex items-center'><span className='text-white/60 text-[14px] w-[70px]'>POWER</span> <span>{item.power}</span></div>
                        <div className='flex items-center'><span className='text-white/60 text-[14px] w-[70px]'>AMOUNT</span> <span>{item.amount}</span></div>
                        <div className='flex items-center'><span className='text-white/60 text-[14px] w-[70px]'>TRAITS</span> <span>{item.traits.join(', ')}</span></div>
                        <div className='text-white/80'>{item.desc}</div>
                      </div>
                    </div>

                    <div className='grid grid-cols-2 gap-4 w-full mt-[30px]'>
                      <button className={clsx('btn-cta', 'w-full')}>Play game</button>
                      <button className={clsx('btn-cta-second', 'w-full')}>
                        <div className='relative z-10 flex items-center gap-2 justify-center'><OpenseaIcon /> View collectible</div>

                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='absolute top-0 left-0 bottom-0 right-0 flex h-[100vh] justify-center items-end z-50 pointer-events-none'>
        <div className='container mx-auto grid grid-cols-12 relative text-white select-none h-[300px] pointer-events-auto'>
          <div className='col-span-8 relative'>
            <div className='flex justify-center gap-[30px] z-50'>
              {sliderThumbs.map((thumb, idx) => (
                <div key={idx} className={clsx('w-[80px] flex flex-col gap-2 items-center text-[20px] text-white/50 cursor-pointer')}
                  onClick={() => swiper.slideTo(idx)}
                >
                  <img src={thumb.img} className={clsx('w-[80px] h-[80px] rounded-full transition-all ease-out duration-300', {
                    'border-[2px] border-orange-500': idx === swiperIndex,
                    'border-[2px] border-transparent': idx !== swiperIndex,
                  })} />
                  <div className={clsx('transition-all ease-out duration-300', {
                    'text-white': idx === swiperIndex,
                  })}>{thumb.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      <div className='z-40 absolute left-0 right-0 bottom-[56px] overflow-hidden w-full object-fill'>
        <img className='w-full' src='/assets/slogan.png' />
      </div>
    </main>
  )
}
