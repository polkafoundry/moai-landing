import { useEffect, useRef, useState } from 'react';
import { MainSlider } from './main-slider/main-slider';
import { NftCollection } from './nft-collection';
import { StoryTelling } from './story-telling';
import { OnChainGame } from './on-chain-game';
import { Header } from './header';
import { useRouter } from 'next/router';
import { HomeSection, homeSectionArr } from './const';
import { MoaiToken } from './moai-token';
import { EvilClub } from './evil-club';
import { FAQ } from './faq';

function getSections() {
  return [
    { content: <MainSlider /> },
    { content: <StoryTelling /> },
    { content: <NftCollection /> },
    { content: <OnChainGame /> },
    { content: <EvilClub /> },
    { content: <MoaiToken /> },
    { content: <FAQ /> },
  ];
}
export function Home() {
  const router = useRouter();
  const [activeIdx, setActive] = useState(0);
  const screenRef = useRef<HTMLDivElement>(null);
  const section = router.query.section as HomeSection || HomeSection.MAIN;
  const transitionRef = useRef<any>();

  useEffect(() => {
    const activeIdx = homeSectionArr.indexOf(section);
    setActive(activeIdx);
  }, [section])

  useEffect(() => {
    if (!screenRef.current) return;
    screenRef.current.onwheel = function (e) {
      function start() {
        const nextIdx = e.deltaY > 0 ? Math.min(6, activeIdx + 1) : Math.max(0, activeIdx - 1);
        const secKey = homeSectionArr[nextIdx];
        router.push(`/?section=${secKey}`, undefined, { shallow: true })
      }

      clearTimeout(transitionRef.current);
      transitionRef.current = setTimeout(start, 400);
    }
  }, [activeIdx])
  const sections = getSections();

  return (
    <div ref={screenRef} onScroll={e => e.preventDefault()}>
      {/* <div className='fixed top-0 left-0 text-[50px] text-white z-50'>{activeSection}</div> */}
      <Header />
      <div className='opacity-[0.4] md:opacity-[0.7]'></div>
      <div className='transition-all duration-700'>
        {sections[activeIdx].content}
      </div>
    </div>
  )
}