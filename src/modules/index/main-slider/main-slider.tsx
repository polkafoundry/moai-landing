import {
  Swiper as SwiperClass,
  Navigation,
  Autoplay,
  EffectFade,
} from "swiper";
import { OpenseaIcon } from "@/uikit/icons/opensea-icon";
import { Swiper, SwiperSlide } from "swiper/react";
import clsx from "clsx";
import styles from "./main-slider.module.scss";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { HomeSection } from "../const";
import { PlayGameIcon } from "@/uikit/icons/play-game-icon";
SwiperClass.use([Navigation]);

export const mainSliders = [
  {
    backgroundImg: "/assets/bg-moai2.png",
    backgroundImgSmall: "/assets/bg-moai2-small.png",
    name: "Aqua/Water",
    founder: "750 BC",
    power: "Tsunami, Ice, Healing",
    amount: 170,
    traits: ["Smooth", "Gentle", "Flow", "Divine strength", "Calm"],
    desc: "The Aqua tribe's affinity for water gave them healing abilities and skill in crafting sea-inspired sculptures. They could summon ice and tsunamis, and were known for their gentle and forgiving nature among the five tribes.",
  },
  {
    backgroundImg: "/assets/bg-moai1.png",
    backgroundImgSmall: "/assets/bg-moai1-small.png",
    name: "Adina/Air",
    founder: "692 BC",
    power: "Airbending, Flying, Super speed",
    amount: 250,
    traits: ["Everywhere and nowhere", "Invisible"],
    desc: "The Adina tribe was ancient airbenders who received super speed, flying, and airbending powers. They can be present everywhere, detecting unauthorized behavior anytime.",
  },
  {
    backgroundImg: "/assets/bg-moai3.png",
    backgroundImgSmall: "/assets/bg-moai3-small.png",
    name: "Agni/Fire",
    founder: "333 BC",
    power: "Energy Blast, Animal Creation & Shifting, Invulnerability",
    amount: 245,
    traits: ["Controlling", "Powerful", "Arrogant"],
    desc: "The Agni tribe representing Fire was a peaceful yet occasionally arrogant group of enablers who have the connection so powerful that they can create energy blasts, perform animal creation and shifting, and they possess invulnerability. ",
  },
  {
    backgroundImg: "/assets/bg-moai4.png",
    backgroundImgSmall: "/assets/bg-moai4-small.png",
    name: "Aegle/Light",
    founder: "920 BC",
    power: "Electricity, Barrier Creation, Mind-reading",
    amount: 170,
    traits: ["Celestial", "Well-being", "Glow", "Subtle & Strong"],
    desc: "The Aegle possessed a vital component that symbolizes both civilization and life: light. They held the ability to generate thunderbolts, create barriers, and read minds. Agle is synonymous with both insight and sagacity.",
  },
  {
    backgroundImg: "/assets/bg-moai5.png",
    backgroundImgSmall: "/assets/bg-moai5-small.png",
    name: "Aaren/Earth",
    founder: "872 BC",
    power: "Nature Control, Earthquakes",
    amount: 208,
    traits: ["Calmness", "Subtly Powerful", "Values Family"],
    desc: "Aaren represent a humble yet powerful Moai tribe - deemed the strongest of the five Moai tribes with the power to control nature and can create earthquakes.",
  },
];

export const sliderThumbs = [
  { img: "/assets/aqua.png", name: "Aqua" },
  { img: "/assets/adina.png", name: "Adina" },
  { img: "/assets/agni.png", name: "Agni" },
  { img: "/assets/aegle.png", name: "Aegle" },
  { img: "/assets/aaren.png", name: "Aaren" },
];

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
        const nextIdx =
          e.deltaY > 0
            ? Math.min(4, swiperIndex + 1)
            : Math.max(0, swiperIndex - 1);
        swiper.slideTo(nextIdx);
      }, 200);
    };
  }, [elRef, swiperIndex, swiper]);

  useEffect(() => {
    if (!swiper || !(swiper as any).enabled) return;

    const idx = Math.max(
      0,
      sliderThumbs.findIndex((slider) => slider.name === tribe) || 0
    );
    swiper.slideTo(idx);
  }, [swiper, tribe]);

  return (
    <main className="relative" ref={elRef}>
      <Swiper
        onSwiper={setSwiper}
        modules={[EffectFade]}
        onActiveIndexChange={(swiper) => setSwiperIndex(swiper.activeIndex)}
        spaceBetween={0}
        effect={"fade"}
        slidesPerView={1}
        speed={1500}
      >
        {mainSliders.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div key={idx} className="relative h-[calc(100vh)] bg-black">
              <div className={styles["backdrop-right"]}></div>
              <div className={styles["backdrop-bottom"]}></div>

              <div
                style={{
                  backgroundImage: `url(${item.backgroundImg})`,
                  backgroundSize: "cover",
                }}
                className="absolute top-0 right-0 bottom-0 left-0 opacity-20"
              />

              <div className="flex h-[100vh] justify-center items-center relative z-10">
                <div className="container mx-auto grid grid-cols-12 relative text-white mt-[75px] gap-[40px] lg:gap-[40px]">
                  <div className="col-span-6 lg:col-span-7 flex justify-center relative">
                    <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center pb-[120px]">
                      <img className="w-full" src={item.backgroundImgSmall} />
                    </div>
                  </div>
                  <div className="col-span-6 lg:col-span-5  flex items-start justify-end flex-col gap-[10px]">
                    <div
                      onWheelCapture={(e) => e.stopPropagation()}
                      className="h-[300px] overflow-y-scroll pr-[30px]"
                    >
                      <h2 className="text-[48px] font-semibold leading-10 mb-[24px]">
                        {item.name}
                      </h2>
                      <div className="grid grid-cols-4 gap-[10px]">
                        <div className="text-white/60 text-[14px] w-[70px]">
                          FOUNDED
                        </div>{" "}
                        <span className="col-span-3">{item.founder}</span>
                        <span className="text-white/60 text-[14px] w-[70px]">
                          POWER
                        </span>{" "}
                        <span className="col-span-3">{item.power}</span>
                        <span className="text-white/60 text-[14px] w-[70px]">
                          AMOUNT
                        </span>{" "}
                        <span className="col-span-3">{item.amount}</span>
                        <span className="text-white/60 text-[14px] w-[70px]">
                          TRAITS
                        </span>{" "}
                        <span className="col-span-3">
                          {item.traits.join(", ")}
                        </span>
                        <div className="text-white/80 col-span-4">
                          {item.desc}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 w-full mt-[30px]">
                      <Link
                        className="w-full"
                        href={`/?section=${HomeSection.ONCHAIN_GAME}`}
                        shallow
                      >
                        <button className="btn-cta w-full text-xs lg:text-md">
                          <div className="relative z-10 flex items-center gap-2 justify-center hover:scale-[1.1] duration-150">
                            <PlayGameIcon /> Play game
                          </div>
                        </button>
                      </Link>
                      <button
                        className={clsx(
                          "btn-cta-second w-full text-xs lg:text-md",
                          "disabled:opacity-80"
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute top-0 left-0 bottom-0 right-0 flex h-[100vh] justify-center items-center z-50 pointer-events-none">
        <div className="container mx-auto grid grid-cols-12 relative text-white select-none justify-center h-[480px]">
          <div className="col-span-6 lg:col-span-7 relative flex justify-center">
            <div className="flex justify-center gap-[20px] lg:gap-[30px] z-50 items-end  pointer-events-auto">
              {sliderThumbs.map((thumb, idx) => (
                <div
                  key={idx}
                  className={clsx(
                    "flex flex-col gap-2 items-center text-[20px] text-white/50 cursor-pointer"
                  )}
                  onClick={() => swiper.slideTo(idx)}
                >
                  <img
                    src={thumb.img}
                    className={clsx(
                      "w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full transition-all ease-out duration-300",
                      {
                        "border-[2px] border-orange-500": idx === swiperIndex,
                        "border-[2px] border-transparent": idx !== swiperIndex,
                      }
                    )}
                  />
                  <div
                    className={clsx(
                      "transition-all ease-out duration-300 text-sm lg:text-md",
                      {
                        "text-white": idx === swiperIndex,
                      }
                    )}
                  >
                    {thumb.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 bottom-0 right-0 flex h-[100vh] justify-center items-center z-50 pointer-events-none">
        <div className="container mx-auto relative h-[400px] ">
          <div className="flex justify-center h-[400px] absolute left-0 right-0 -top-[70px]">
            <div
              style={{ background: "url(/assets/slogan-mask.png)" }}
              className="pointer-events-auto bg-cover bg-no-repeat w-[760px] h-[80px] flex justify-center items-center text-[32px] font-[500]"
            >
              First fully on-chain game world on zkSync Era
            </div>
            {/* <img className='w-full' src='/assets/slogan.png' /> */}
          </div>
        </div>
      </div>
    </main>
  );
}
