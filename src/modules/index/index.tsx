import { useEffect, useRef, useState } from "react";
import {
  MainSlider,
  mainSliders,
  sliderThumbs,
} from "./main-slider/main-slider";
import { NftCollection } from "./nft-collection";
import { StoryTelling } from "./story-telling";
import { OnChainGame } from "./on-chain-game";
import { Header } from "../../uikit/header";
import { useRouter } from "next/router";
import { HomeSection, homeSectionArr } from "./const";
import { MoaiToken } from "./moai-token";
import { EvilClub } from "./evil-club";
import { FAQ } from "./faq";
import clsx from "clsx";
import Link from "next/link";
import { End } from "./end";
import MainSliderMobile from "../../../components/mobile/main-slider";
import useMediaQuery from "../../../components/hooks/media-query";

function getSections() {
  return [
    { content: <MainSlider /> },
    { content: <StoryTelling /> },
    { content: <NftCollection /> },
    { content: <OnChainGame /> },
    { content: <EvilClub /> },
    { content: <MoaiToken /> },
    { content: <FAQ /> },
    { content: <End /> },
  ];
}
export function Home({ query }: any) {
  const router = useRouter();
  const section =
    (router.query.section as HomeSection) || query.section || HomeSection.MAIN;
  const [activeIdx, setActive] = useState(homeSectionArr.indexOf(section));

  const screenRef = useRef<HTMLDivElement>(null);
  const transitionRef = useRef<any>();
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    setTimeout(() => {
      const activeIdx = homeSectionArr.indexOf(section);
      setActive(activeIdx);
    }, 200);
  }, [section]);

  useEffect(() => {
    if (!screenRef.current) return;
    screenRef.current.onwheel = function (e) {
      function start() {
        const nextIdx =
          e.deltaY > 0
            ? Math.min(homeSectionArr.length - 1, activeIdx + 1)
            : Math.max(0, activeIdx - 1);
        const secKey = homeSectionArr[nextIdx];
        router.push(`/?section=${secKey}`, undefined, { shallow: true });
      }

      clearTimeout(transitionRef.current);
      transitionRef.current = setTimeout(start, 400);
    };
  }, [activeIdx]);
  const sections = getSections();

  if (isMobile) {
    return <MainSliderMobile />;
  }

  return (
    <div ref={screenRef} onScroll={(e) => e.preventDefault()}>
      {sections.map((section, idx) => (
        <div
          key={idx}
          className={clsx(
            "fixed top-0 right-0 bottom-0 left-0 transition-all duration-1000",
            {
              "z-10 opacity-100": idx === activeIdx,
            }
          )}
        >
          <div className="text-[40px] fixed top-0 left-0">{activeIdx}</div>
          {section.content}
        </div>
      ))}

      <div
        className={clsx(
          "hidden fixed top-0 -mt-[56px] bottom-0 left-[8px] lg:flex flex-col items-center justify-center z-20 gap-[20px] opacity-0 transition-opacity duration-500",
          {
            "opacity-100": activeIdx !== 0,
          }
        )}
      >
        {sliderThumbs.map((slider, idx) => (
          <Link
            key={idx}
            href={`/?section=${HomeSection.MAIN}&tribe=${slider.name}`}
            className="transition-all duration-300 rounded-full"
          >
            <img
              src={slider.img}
              className={clsx(
                "rounded-full h-[48px[ w-[48px] transition-all border-[2px] border-transparent hover:border-[#E76F16] ",
                {
                  "duration-[0.5s]": idx === 0,
                  "duration-[0.6s]": idx === 1,
                  "duration-[0.7s]": idx === 2,
                  "duration-[0.8s]": idx === 3,
                  "duration-[0.9s]": idx === 4,
                  "-ml-[200px]": activeIdx === 0,
                  "-mb-[200px]": activeIdx === 0,
                  "ml-0": activeIdx !== 0,
                  "mb-0": activeIdx !== 0,
                }
              )}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
