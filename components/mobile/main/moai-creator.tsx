import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../../src/modules/index/evil-club/evil-club.module.scss";
import { Pagination, Autoplay } from "swiper";
import { creators } from "@/modules/index/evil-club";
import clsx from "clsx";
import Image from "next/image";
import { ExternalLink } from "@/uikit/external-link";
import { BECOME_MEMBERS_URL, DISCORD_URL } from "@/const/config";
import { DiscordIcon } from "@/uikit/icons/discord-icon";

const MoaiCreator = ({ moaiCreatorRef }: any) => {
  return (
    <div className="pt-[60px]" ref={moaiCreatorRef}>
      <div className="text-[32px] leading-[38px] text-center font-[500] px-5">
        First Wicked Moai creators
      </div>
      <div className="overflow-hidden mt-10 pl-8 h-fit">
        <Swiper
          pagination={{
            clickable: true,
            el: "#evil-club-pagination",
            bulletClass: styles["swiper-pagination-bullet"],
            bulletActiveClass: styles["swiper-pagination-bullet-active"],
          }}
          modules={[Pagination, Autoplay]}
          className={styles.swiper}
          spaceBetween={12}
          slidesPerView={"auto"}
          grabCursor
          autoplay={{
            delay: 4000,
          }}
        >
          {creators.map((creator, idx) => (
            <SwiperSlide key={idx} style={{ width: "148px" }}>
              <div key={idx} className="rounded-[16px] flex flex-col gap-2">
                <Image
                  src={creator.avatar}
                  width={148}
                  height={148}
                  className="rounded-[12px]"
                  alt="creator avatar"
                />
                <div className="flex flex-col">
                  <div className={clsx(styles.name, "text-[20px] font-[500]")}>
                    {creator.name}
                  </div>
                  <div className="text-[14px]">{creator.title}</div>
                  {/* <div className="text-[14px] text-white/50">
                    {creator.summary}
                  </div> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          id="evil-club-pagination"
          className="swiper-pagination w-fit mx-auto pr-8 mt-8 max-w-full left-0 h-6 flex items-center gap-[8px] z-50"
        />
      </div>
      <div className="px-10 mt-8">
        <ExternalLink href={BECOME_MEMBERS_URL}>
          <button className="btn-white w-full px-8">BECOME A MEMBER</button>
        </ExternalLink>
        <ExternalLink href={DISCORD_URL}>
          <button className="btn-cta w-full flex mt-3 items-center justify-center gap-2 px-8">
            <DiscordIcon /> JOIN CLUB
          </button>
        </ExternalLink>
      </div>
    </div>
  );
};

export default MoaiCreator;
