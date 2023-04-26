/* eslint-disable @next/next/no-img-element */
import { DiscordIcon } from "@/uikit/icons/discord-icon";
import { OpenseaIcon } from "@/uikit/icons/opensea-icon";
import clsx from "clsx";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../../src/modules/index/nft-collection/nft-collection.module.scss";
import { Autoplay } from "swiper";
import { collection1, collection2 } from "@/modules/index/nft-collection";
import { EthIcon } from "@/uikit/icons/eth-icon";
import Link from "next/link";
import { HomeSection } from "@/modules/index/const";
import { ExternalLink } from "@/uikit/external-link";
import { DISCORD_URL } from "@/const/config";

const NftCollection = ({ nftCollectionRef }: any) => {
  return (
    <div className="pt-[60px]" ref={nftCollectionRef}>
      <div className="text-[32px] leading-[38px] text-center font-[500]">
        Wicked Moai NFTs
      </div>
      <Image
        src="/assets/nft-collection2.png"
        className="mx-auto mt-5"
        width={270}
        height={174}
        alt="nft-collection"
      />
      <div className="mt-5 text-[24px] leading-[28px] text-center font-[500]">
        NFT collectibles
      </div>
      <p className="text-[14px] leading-[22px] mt-2 mx-auto text-center w-full px-5 max-w-[310px] opacity-80">
        Unique NFT collectibles for users to unlock exclusive features
      </p>
      <div className="mt-5 text-center">
        <ExternalLink href={DISCORD_URL}>
          <button className="btn-cta px-5 py-[12px] mx-auto flex gap-2 items-center text-[14px] leading-[15px]">
            <DiscordIcon /> Join private club
          </button>
        </ExternalLink>
      </div>
      <Image
        src="/assets/nft-collection.png"
        className="mx-auto mt-10"
        width={270}
        height={174}
        alt="nft-collection"
      />
      <div className="mt-5 text-[24px] leading-[28px] text-center font-[500]">
        Consumption NFT
      </div>
      <p className="text-[14px] leading-[22px] mt-2 mx-auto text-center w-full px-5 max-w-[310px] opacity-80">
        Own an NFT to explore the Wicked Moai game world and enjoy exciting gameplay
      </p>
      <div className="px-5 grid grid-cols-2 gap-[12px] mt-5">
        <Link href={`/?section=${HomeSection.ONCHAIN_GAME}`}>
          <button
            className={clsx(
              "btn-cta",
              "w-full text-[14px] leading-[15px] py-[12px]"
            )}
          >
            Play game
          </button>
        </Link>
        <button
          className={clsx(
            "btn-cta-second",
            "w-full text-[14px] leading-[15px] py-[12px] disabled:opacity-70"
          )}
          disabled
        >
          <div className="relative z-10 flex items-center gap-2 justify-center">
            <OpenseaIcon width={15} height={15} /> Buy Now
          </div>
        </button>
      </div>

      <div
        className={clsx(
          "relative flex flex-col w-full gap-[12px] mt-10 justify-center select-none overflow-hidden",
          styles["slide-wrapper"]
        )}
      >
        <div className="absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b from-[#0B0515] to-transparent z-10" />
        <div className="absolute bottom-0 left-0 w-full h-[100px] bg-gradient-to-t from-[#0B0515] to-transparent z-10" />
        <div className="-translate-x-[250px]">
          <Swiper
            modules={[Autoplay]}
            className="swiper-top"
            spaceBetween={12}
            slidesPerView={"auto"}
            loop
            centeredSlides
            speed={2000}
            autoplay={{
              reverseDirection: true,
              delay: 2000,
              disableOnInteraction: false,
            }}
          >
            {collection1?.map((item, idx) => (
              <SwiperSlide key={idx} style={{ width: "106px" }}>
                <div
                  key={idx}
                  className="rounded-[16px] p-2 bg-[#292929] flex flex-col gap-2"
                >
                  <img
                    src={item.thumb}
                    className="rounded-[12px]"
                    alt="thumb"
                  />
                  <div className="flex justify-between items-center">
                    <div className="text-[10px]">{item.name}</div>
                    <div className="flex items-center gap-1 text-[8px]">
                      <EthIcon width={10} height={10} /> {item.price}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div>
          <Swiper
            spaceBetween={12}
            slidesPerView={"auto"}
            modules={[Autoplay]}
            className="swiper-bottom"
            loop
            speed={2000}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
          >
            {collection2?.map((item, idx) => (
              <SwiperSlide key={idx} style={{ width: "106px" }}>
                <div
                  key={idx}
                  className="rounded-[12px] p-2 bg-[#292929] flex flex-col gap-2"
                >
                  <img
                    src={item.thumb}
                    className="rounded-[12px]"
                    alt="thumb 2"
                  />
                  <div className="flex justify-between items-center">
                    <div className="text-[10px]">{item.name}</div>
                    <div className="flex items-center gap-1 text-[8px]">
                      <EthIcon width={10} height={10} /> {item.price}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default NftCollection;
