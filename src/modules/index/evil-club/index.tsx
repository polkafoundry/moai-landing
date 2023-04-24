import { BECOME_MEMBERS_URL, DISCORD_URL } from "@/const/config";
import { FadeEffect } from "@/uikit/animation/fade-effect";
import { ExternalLink } from "@/uikit/external-link";
import { DiscordIcon } from "@/uikit/icons/discord-icon";
import clsx from "clsx";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { HomeSection } from "../const";
import { useScreenActive } from "../ctx";
import styles from "./evil-club.module.scss";

export const creators = [
  { name: 'Tongariki', avatar: '/assets/creator-1.png', title: 'Senior artist', summary: '7+ years in gaming' },
  { name: 'Akivi', avatar: '/assets/creator-2.png', title: 'Tech lead', summary: '10+ years in gaming' },
  { name: 'Nau Nau', avatar: '/assets/creator-3.png', title: 'Music & audio', summary: '5+ years in gaming' },
  { name: 'Vinapu', avatar: '/assets/creator-4.png', title: 'Blockchain lead', summary: '7+ years in gaming' },
  { name: 'Tahai', avatar: '/assets/creator-5.png', title: 'Vfx, animation', summary: '5+ years in gaming' },
  { name: 'Te Pito Kura', avatar: '/assets/creator-6.png', title: 'Marketing', summary: '5+ years in gaming' },
  { name: 'Ko Te Riku', avatar: '/assets/creator-7.png', title: 'Finance', summary: '10+ years in gaming' },
  { name: 'Hanga Tetenga', avatar: '/assets/creator-2.png', title: 'Lead art', summary: '8+ years in gaming' },
  { name: 'Akahanga', avatar: '/assets/creator-1.png', title: 'Project manager', summary: '12+ years in gaming' },
  { name: 'O\'Pepe', avatar: '/assets/creator-3.png', title: 'QA/QC leader', summary: '7+ years in gaming' },
]

export function EvilClub() {
  const show = useScreenActive(HomeSection.EVIL_CLUB);

  return (
    <div
      className="h-[100vh] backdrop flex items-center"
      style={{
        backgroundImage: `url(/assets/bg-moai.png)`,
        backgroundSize: "cover",
      }}
    >
      <div className="container relative z-10 bg-transparent">
        <div className="flex justify-between items-center mb-[60px]">
          <FadeEffect y={-50} show={show}>
            <h1 className="text-2xl lg:text-[36px] font-[500]">
              First Wicked Moai creators
            </h1>
          </FadeEffect>

          <FadeEffect x={100} show={show}>
            <div className="flex gap-4">
              <ExternalLink href={BECOME_MEMBERS_URL}>
                <button className="btn-white px-8 overflow-hidden">
                  <div className="flex items-center justify-center gap-2 hover:scale-[1.1] duration-150">
                    BECOME A MEMBER
                  </div>
                </button>
              </ExternalLink>
              <ExternalLink href={DISCORD_URL}>
                <button className="btn-cta px-8 overflow-hidden">
                  <div className="flex items-center justify-center gap-2 hover:scale-[1.1] duration-150">
                    <DiscordIcon /> JOIN CLUB
                  </div>
                </button>
              </ExternalLink>
            </div>
          </FadeEffect>
        </div>

        <div className="relative">
          <Swiper
            pagination={{
              clickable: true,
              el: "#evil-club-pagination",
              bulletClass: styles["swiper-pagination-bullet"],
              bulletActiveClass: styles["swiper-pagination-bullet-active"],
            }}
            modules={[Pagination]}
            className={styles.swiper}
            spaceBetween={12}
            slidesPerView={6}
            breakpoints={{
              768: {
                slidesPerView: 4.5,
                slidesPerGroup: 4,
              },
              1024: {
                slidesPerView: 6,
                slidesPerGroup: 6,
              },
            }}
            slidesPerGroup={6}
            grabCursor
          >
            {creators.map((creator, idx) => (
              <SwiperSlide key={idx}>
                <div key={idx} className="rounded-[16px] flex flex-col gap-2">
                  <img src={creator.avatar} className="rounded-[12px]" />
                  <div className="flex flex-col">
                    <div
                      className={clsx(styles.name, "text-[24px] font-[500]")}
                    >
                      {creator.name}
                    </div>
                    <div className="">{creator.title}</div>
                    <div className="text-[14px] text-white/50">
                      {creator.summary}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div
            id="evil-club-pagination"
            className="swiper-pagination absolute pt-4 top-[calc(100%+30px)] left-0 w-full h-6 flex items-center gap-[8px] z-50"
          ></div>
        </div>
      </div>
    </div>
  );
}
