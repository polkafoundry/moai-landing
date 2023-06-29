import { HomeSection } from "@/modules/index/const";
import {
  mainSliders,
  sliderThumbs,
} from "@/modules/index/main-slider/main-slider";
import { OpenseaIcon } from "@/uikit/icons/opensea-icon";
import { PlayGameIcon } from "@/uikit/icons/play-game-icon";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {}

const Banner = ({}: Props) => {
  const [swiperIndex, setSwiperIndex] = useState<number>(0);

  return (
    <div className="relative">
      <div
        className="absolute top-0 right-0 bottom-0 left-0 opacity-20 z-0"
        style={{
          backgroundImage: `url(${mainSliders[swiperIndex]?.backgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative z-10 pb-8 pt-[60px]">
        <div
          style={{ backgroundImage: "url(/assets/slogan-mask-mobile.png)" }}
          className={clsx(
            "pointer-events-auto mx-auto bg-no-repeat bg-contain w-full max-w-[390px] h-[88px] flex justify-center items-center",
            "text-[24px] text-center leading-[24px] font-[500] px-5"
          )}
        >
          First fully on-chain game world on zkSync Era
        </div>

        <div className="col-span-6 lg:col-span-7 flex justify-center relative">
          <div className="flex justify-center items-center">
            <Image
              className="w-full h-[55vw] mx-auto"
              width={390}
              height={55}
              src={mainSliders[swiperIndex]?.backgroundImgSmall}
              priority
              alt="backgroundSmall"
            />
          </div>
        </div>
        <div className="flex justify-center gap-[10px] z-50 items-end px-5 pointer-events-auto">
          {sliderThumbs.map((thumb, idx) => (
            <div
              key={idx}
              className={clsx(
                "flex flex-col gap-2 items-center text-[16px] leading-[19px] text-white/50 cursor-pointer"
              )}
              onClick={() => setSwiperIndex(idx)}
            >
              <Image
                src={thumb.img}
                className={clsx(
                  "w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full transition-all ease-out duration-300",
                  {
                    "border-[2px] border-orange-500": idx === swiperIndex,
                    "border-[2px] border-transparent": idx !== swiperIndex,
                  }
                )}
                width={60}
                height={60}
                priority
                alt="thumb"
              />
              <div className={clsx("transition-all ease-out duration-300")}>
                {thumb.name}
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-6 lg:col-span-5 flex items-start justify-end flex-col mt-5 gap-[4px]">
          <div onWheelCapture={(e) => e.stopPropagation()} className="px-5">
            <h2 className="text-[32px] font-semibold leading-[38px] text-center mb-[12px]">
              {mainSliders[swiperIndex]?.name}
            </h2>
            <div className="flex flex-col gap-[4px]">
              <div className="flex text-[14px]">
                <div className="text-white/60 w-[72px] min-w-[72px]">
                  FOUNDED
                </div>{" "}
                <span>{mainSliders[swiperIndex]?.founder}</span>
              </div>
              <div className="flex text-[14px]">
                <span className="text-white/60 w-[72px] min-w-[72px]">
                  POWER
                </span>{" "}
                <span>{mainSliders[swiperIndex]?.power}</span>
              </div>
              <div className="flex text-[14px]">
                <span className="text-white/60 w-[72px] min-w-[72px]">
                  AMOUNT
                </span>{" "}
                <span>{mainSliders[swiperIndex]?.amount}</span>
              </div>
              <div className="flex text-[14px]">
                <span className="text-white/60 w-[72px] min-w-[72px]">
                  TRAITS
                </span>{" "}
                <span>{mainSliders[swiperIndex]?.traits.join(", ")}</span>
              </div>
              <div className="text-white/80 text-[14px] leading-[22px]">
                {mainSliders[swiperIndex]?.desc}
              </div>
            </div>
          </div>

          <div className="w-full mt-5 px-5">
            <Link href={`/?section=${HomeSection.ONCHAIN_GAME}`}>
              <button
                className={clsx(
                  "btn-cta",
                  "w-full flex items-center gap-2 justify-center"
                )}
              >
                <PlayGameIcon className="text-white" />
                Play game
              </button>
            </Link>
            <button
              className={clsx(
                "btn-cta-second",
                "w-full mt-2 disabled:opacity-70"
              )}
              disabled
            >
              <div className="relative z-10 flex items-center gap-2 justify-center">
                <OpenseaIcon /> View collectible
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
