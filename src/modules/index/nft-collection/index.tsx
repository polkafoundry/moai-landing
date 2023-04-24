import { DiscordIcon } from "@/uikit/icons/discord-icon";
import { Autoplay } from "swiper";
import { EthIcon } from "@/uikit/icons/eth-icon";
import { ImageCard2 } from "@/uikit/image-card";
import clsx from "clsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './nft-collection.module.scss';
import { useRouter } from "next/router";
import { HomeSection } from "../const";
import { HeightEffect } from "@/uikit/animation/height-effect";
import { FadeEffect } from "@/uikit/animation/fade-effect";
import { useScreenActive } from "../ctx";
import { OpenseaIcon } from "@/uikit/icons/opensea-icon";

export const collection1 = [
  { name: '#1911', price: '0.019 ETH', thumb: '/assets/nft-1911.png' },
  { name: '#1912', price: '0.039 ETH', thumb: '/assets/nft-1912.png' },
  { name: '#1913', price: '0.012 ETH', thumb: '/assets/nft-1913.png' },
  { name: '#1912', price: '0.039 ETH', thumb: '/assets/nft-1912.png' },
  { name: '#1913', price: '0.012 ETH', thumb: '/assets/nft-1913.png' },
  { name: '#1911', price: '0.019 ETH', thumb: '/assets/nft-1911.png' },
  { name: '#1912', price: '0.039 ETH', thumb: '/assets/nft-1912.png' },
  { name: '#1913', price: '0.012 ETH', thumb: '/assets/nft-1913.png' },
  { name: '#1912', price: '0.039 ETH', thumb: '/assets/nft-1912.png' },
  { name: '#1913', price: '0.012 ETH', thumb: '/assets/nft-1913.png' },
];

export const collection2 = [
  { name: '#1913', price: '0.012 ETH', thumb: '/assets/nft-1913.png' },
  { name: '#1912', price: '0.039 ETH', thumb: '/assets/nft-1912.png' },
  { name: '#1913', price: '0.012 ETH', thumb: '/assets/nft-1913.png' },
  { name: '#1911', price: '0.019 ETH', thumb: '/assets/nft-1911.png' },
  { name: '#1912', price: '0.039 ETH', thumb: '/assets/nft-1912.png' },
  { name: '#1913', price: '0.012 ETH', thumb: '/assets/nft-1913.png' },
  { name: '#1912', price: '0.039 ETH', thumb: '/assets/nft-1912.png' },
  { name: '#1913', price: '0.012 ETH', thumb: '/assets/nft-1913.png' },
  { name: '#1911', price: '0.019 ETH', thumb: '/assets/nft-1911.png' },
  { name: '#1912', price: '0.039 ETH', thumb: '/assets/nft-1912.png' },
]

export function NftCollection() {
  const show = useScreenActive(HomeSection.NFT_COLLECTION);

  return (
    <div className="h-full overflow-auto overflow-x-hidden backdrop flex items-center justify-center" style={{ backgroundImage: `url(/assets/bg-moai1.png)`, backgroundSize: 'cover' }}>
      <div className='h-full lg:h-auto container grid grid-cols-2 gap-8 relative z-10'>
        <div className='col-span-2 lg:col-span-1'>
          <FadeEffect show={show} x={150}><h1 className='text-[48px] mb-[12px] font-[500]'>Wicked Moai NFTs</h1></FadeEffect>
          <FadeEffect show={show} x={-100}>
            <div className='text-white/80 mb-[40px]'>Be a part of a rich and historic collection while immersing in the game world.</div>
          </FadeEffect>
          <FadeEffect show={show} y={50}>
            <div className='flex flex-col gap-10'>
              <div className='flex flex-col md:flex-row gap-[12px] md:gap-[30px]'>
                <div className='flex justify-center'><ImageCard2 img='/assets/bg-moai1.png' /></div>
                <div className='flex flex-col gap-[10px]'>
                  <div className='text-[24px]'>NFT collectibles</div>
                  <div className='text-white/50 text-[14px]'>Special NFT collectible for special user to unlock special features</div>
                  <div><button className='btn-cta px-4 text-xs lg:text-md lg:px-4 flex gap-2 items-center justify-center'><DiscordIcon /> Join private club</button></div>
                </div>
              </div>

              <div className='flex flex-col md:flex-row gap-[12px] md:gap-[30px]'>
                <div className='flex justify-center'><ImageCard2 img='/assets/bg-moai1.png' /></div>
                <div className='flex flex-col gap-[10px]'>
                  <div className='text-[24px]'>Consumption NFT</div>
                  <div className='text-white/50 text-[14px]'>Own NFT to navigate Wicked Moai game world and enjoy exciting game play</div>
                  <div className='flex gap-4'>
                    <button className='btn-cta px-4 text-xs lg:text-md lg:px-4 flex gap-2 items-center justify-center w-full'>Play game</button>
                    <button className='btn-cta px-4 text-xs lg:text-md lg:px-4 flex gap-2 items-center justify-center w-full'><OpenseaIcon/> Buy now</button>
                  </div>
                </div>
              </div>
            </div>
          </FadeEffect>
        </div>

        <div className="col-span-2 lg:col-span-1 flex flex-col justify-center">
          <div className='backdrop-left '>
            <div className={clsx('flex flex-col gap-[12px] justify-center select-none', styles['slide-wrapper'])}>
              <div className="-translate-x-[100px]">
                <Swiper
                  // onSwiper={setSwiper}
                  // onActiveIndexChange={swiper => setSwiperIndex(swiper.activeIndex)}
                  modules={[Autoplay]}
                  // freeMode={true}
                  className="swiper-top"
                  spaceBetween={12}
                  slidesPerView={3}
                  loop
                  centeredSlides
                  speed={2000}
                  breakpoints={{
                    640: {
                      slidesPerView: 4,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                  }}
                  autoplay={{
                    reverseDirection: true,
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                >
                  {collection1.map((item, idx) => (
                    <SwiperSlide key={idx}>
                      <div key={idx} className='rounded-[16px] p-4 bg-[#292929] flex flex-col gap-2'>
                        <img src={item.thumb} className='rounded-[12px]' />
                        <div className='flex justify-between items-center'>
                          <div className="lg:text-[20px]">{item.name}</div>
                          <div className='flex items-center gap-1'><EthIcon /> {item.price}</div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div>
                <Swiper
                  spaceBetween={12}
                  slidesPerView={3}
                  modules={[Autoplay]}
                  className='swiper-bottom'
                  loop
                  speed={2000}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: 4,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                  }}
                >
                  {collection2.map((item, idx) => (
                    <SwiperSlide key={idx}>
                      <div key={idx} className='rounded-[12px] p-4 py-2 pt-4 bg-[#292929] flex flex-col gap-2'>
                        <img src={item.thumb} className='rounded-[12px]' />
                        <div className='flex justify-between items-center'>
                          <div className="text-[20px]">{item.name}</div>
                          <div className='flex items-center gap-1'><EthIcon /> {item.price}</div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
