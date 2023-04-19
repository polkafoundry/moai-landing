import { DiscordIcon } from '@/uikit/icons/discord-icon';
import clsx from 'clsx';
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './evil-club.module.scss';

const creators = [
  { name: 'Tongariki', avatar: '/assets/creator-1.png', title: 'Senior artist', summary: '7+ years in gaming' },
  { name: 'Giki', avatar: '/assets/creator-2.png', title: 'Senior artist', summary: '7+ years in gaming' },
  { name: 'Tongariki', avatar: '/assets/creator-3.png', title: 'Senior artist', summary: '7+ years in gaming' },
  { name: 'Giki', avatar: '/assets/creator-4.png', title: 'Senior artist', summary: '7+ years in gaming' },
  { name: 'Tongariki', avatar: '/assets/creator-5.png', title: 'Senior artist', summary: '7+ years in gaming' },
  { name: 'Tongariki', avatar: '/assets/creator-7.png', title: 'Senior artist', summary: '7+ years in gaming' },
  { name: 'Giki', avatar: '/assets/creator-2.png', title: 'Senior artist', summary: '7+ years in gaming' },
  { name: 'Tongariki', avatar: '/assets/creator-1.png', title: 'Senior artist', summary: '7+ years in gaming' },
  { name: 'Giki', avatar: '/assets/creator-2.png', title: 'Senior artist', summary: '7+ years in gaming' },
]

export function EvilClub() {
  return (
    <div className="h-[100vh] pt-[75px] pb-[50px] backdrop flex items-center" style={{ backgroundImage: `url(/assets/bg-moai1.png)`, backgroundSize: 'cover' }}>
      <div className='container relative z-10 bg-transparent'>
        <div className='flex justify-between items-center mb-[60px]'>
          <h1 className='text-[48px] font-[500]'>First Evil Moai creators</h1>
          <div className='flex gap-4'>
            <button className='btn-white px-8'>BECOME A MEMBER</button>
            <button className='btn-cta flex items-center justify-center gap-2 px-8'><DiscordIcon /> JOIN CLUB</button>
          </div>
        </div>

        <div className='relative'>
          <Swiper
            pagination={{
              clickable: true,
              el: '#evil-club-pagination',
              bulletClass: styles['swiper-pagination-bullet'],
              bulletActiveClass: styles['swiper-pagination-bullet-active'],
            }}
            modules={[Pagination, Autoplay]}
            className={styles.swiper}
            spaceBetween={12}
            slidesPerView={6}
            autoplay={{
              delay: 4000,
            }}
          >
            {creators.map((creator, idx) => (
              <SwiperSlide key={idx}>
                <div key={idx} className='rounded-[16px] flex flex-col gap-2'>
                  <img src={creator.avatar} className='rounded-[12px]' />
                  <div className='flex flex-col'>
                    <div className={clsx(styles.name, 'text-[24px] font-[500]')}>{creator.name}</div>
                    <div className=''>{creator.title}</div>
                    <div className='text-[14px] text-white/50'>{creator.summary}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>


          <div id='evil-club-pagination' className='swiper-pagination absolute pt-4 top-[calc(100%+30px)] left-0 w-full h-6 flex items-center gap-[8px] z-50'></div>
        </div>
      </div>
    </div>
  )
}