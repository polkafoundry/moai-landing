import { Swiper as SwiperClass, Navigation, Autoplay, EffectFade } from 'swiper';
import { OpenseaIcon } from '@/uikit/icons/opensea-icon';
import { Swiper, SwiperSlide } from 'swiper/react';
import clsx from 'clsx';
import styles from './main-slider.module.scss';
import { useState } from 'react';
SwiperClass.use([Navigation]);

const data = [
  {
    backgroundImg: '/assets/bg-moai1.png',
    name: 'Aqua', founder: '750 BC', power: 'Tsunami, Ice, Healing', amount: 670,
    traits: ['Smooth', 'Gentle', 'Flow', 'Divine strength', 'Calm'],
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et auctor lectus. Curabitur consectetur metus vitae tristique rhoncus. Nunc a ex nisl. Ut tincidunt sollicitudin massa ut sagittis. Mauris rutrum nulla dui, id vestibulum erat ultrices.',
  },
  {
    backgroundImg: '/assets/bg-moai2.png',
    name: 'Aegle', founder: '750 BC', power: 'Tsunami, Ice, Healing', amount: 670,
    traits: ['Smooth', 'Gentle', 'Flow', 'Divine strength', 'Calm'],
    desc: 'Ut tincidunt sollicitudin massa ut sagittis. Mauris rutrum nulla dui, id vestibulum erat ultrices.',
  },
  {
    backgroundImg: '/assets/bg-moai1.png',
    name: 'Agni', founder: '750 BC', power: 'Tsunami, Ice, Healing', amount: 670,
    traits: ['Smooth', 'Gentle', 'Flow', 'Divine strength', 'Calm'],
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et auctor lectustincidunt sollicitudin massa ut sagittis. Mauris rutrum nulla dui, id vestibulum erat ultrices.',
  },
  {
    backgroundImg: '/assets/bg-moai2.png',
    name: 'Adina', founder: '750 BC', power: 'Tsunami, Ice, Healing', amount: 670,
    traits: ['Smooth', 'Gentle', 'Flow', 'Divine strength', 'Calm'],
    desc: 'Lorem ipsum dolor sit tristique rhoncus. Nunc a ex nisl. Ut tincidunt sollicitudin massa ut sagittis. Mauris rutrum nulla dui, id vestibulum erat ultrices.',
  },
  {
    backgroundImg: '/assets/bg-moai1.png',
    name: 'Aaren', founder: '750 BC', power: 'Tsunami, Ice, Healing', amount: 670,
    traits: ['Smooth', 'Gentle', 'Flow', 'Divine strength', 'Calm'],
    desc: 'In et auctor lectus. Curabitur consectetur metus vitae tristique rhoncus. Nunc a ex nisl. Ut tincidunt sollicitudin massa ut sagittis. Mauris rutrum nulla dui, id vestibulum erat ultrices.',
  },
]

const sliderThumbs = [
  { img: '/assets/aqua.png', name: 'Aqua' },
  { img: '/assets/aaren.png', name: 'Aegle' },
  { img: '/assets/agni.png', name: 'Agni' },
  { img: '/assets/aqua.png', name: 'Adina' },
  { img: '/assets/aaren.png', name: 'Aaren' },
]

export function MainSlider() {
  const [swiper, setSwiper] = useState<SwiperClass>(null as any);
  const [swiperIndex, setSwiperIndex] = useState(0);

  return (
    <main>
      <Swiper
        onSwiper={setSwiper}
        modules={[Autoplay, EffectFade]}
        onActiveIndexChange={swiper => setSwiperIndex(swiper.activeIndex)}
        spaceBetween={0}
        effect={"fade"}
        slidesPerView={1}
        speed={1500}
        autoplay={{
          delay: 5000,
        }}
        navigation={{
          nextEl: '.next-slider',
          prevEl: '.prev-slider',
        }}
      >
        {data.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div key={idx} style={{ backgroundImage: `url(${item.backgroundImg})`, backgroundSize: 'cover' }} className='relative h-[calc(100vh)]'>
              <div className={styles['backdrop-right']}></div>
              <div className={styles['backdrop-bottom']}></div>

              <div className='container mx-auto grid grid-cols-12 relative text-white'>
                <div className='col-span-8'></div>
                <div className='col-span-4 h-[calc(100vh-56px)] flex items-start justify-end flex-col gap-[10px] pb-[48px] lg:pb-[96px]'>
                  <h2 className='text-[48px] font-semibold'>{item.name}</h2>
                  <div className='flex flex-col gap-[10px]'>
                    <div className='flex items-center'><div className='text-white/60 text-[14px] w-[70px]'>FOUNDER</div> <span>{item.founder}</span></div>
                    <div className='flex items-center'><span className='text-white/60 text-[14px] w-[70px]'>POWER</span> <span>{item.power}</span></div>
                    <div className='flex items-center'><span className='text-white/60 text-[14px] w-[70px]'>AMOUNT</span> <span>{item.amount}</span></div>
                    <div className='flex items-center'><span className='text-white/60 text-[14px] w-[70px]'>TRAITS</span> <span>{item.traits.join(', ')}</span></div>
                    <div className='text-white/80'>{item.desc}</div>
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
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='container mx-auto grid grid-cols-12 relative text-white select-none'>
        <div className='col-span-8 relative'>
          <div className='absolute bottom-0 left-0 right-0 pb-[48px] lg:pb-[96px] flex justify-center gap-[30px] z-50'>
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
    </main>
  )
}
