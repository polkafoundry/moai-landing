import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

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


if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

export function Home() {
  const router = useRouter();
  const section = router.query.section as HomeSection || HomeSection.MAIN;
  const circleRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);
  const scrollTween = useRef<any>();
  const observer = useRef<any>();

  useEffect(() => {
    goToSection(homeSectionArr.indexOf(section));
  }, [section])

  function goToSection(i: number) {
    setActiveSection(i);
    scrollTween.current = gsap.to(window, {
      scrollTo: { y: i * innerHeight, autoKill: false },
      // delay: 1,
      onStart: () => {
        observer.current.disable(); // for touch devices, as soon as we start forcing scroll it should stop any current touch-scrolling, so we just disable() and enable() the normalizeScroll observer
        observer.current.enable();
      },
      duration: 1,
      onComplete: () => scrollTween.current = null,
      overwrite: true,
    });
  }

  useLayoutEffect(() => {
    let panels: any = gsap.utils.toArray("#ddddddddd .panel");
    observer.current = ScrollTrigger.normalizeScroll(true) as Observer;

    // on touch devices, ignore touchstart events if there's an in-progress tween so that touch-scrolling doesn't interrupt and make it wonky
    document.addEventListener("touchstart", e => {
      if (scrollTween.current) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    }, { capture: true, passive: false });

    // panels.forEach((panel: any, i: number) => {
    //   ScrollTrigger.create({
    //     trigger: panel,
    //     start: "top bottom",
    //     end: "+=199%",
    //     // onToggle: self => {
    //     //   if (self.isActive && !scrollTween.current) {
    //     //     router.replace(`/?section=${homeSectionArr[i]}`, undefined, {
    //     //       shallow: true,

    //     //     })
    //     //   }
    //     // }
    //   });
    // });

    ScrollTrigger.create({
      start: 0,
      end: "max",
      snap: 1 / (panels.length - 1),
      onEnter: function (self) {
      },
      onUpdate: function (self) {
        console.log('onUpdate', self)
      }
    })
  }, [])

  return (
    <div id='ddddddddd' onScroll={e => e.preventDefault()}>
      {/* <div className='fixed top-0 left-0 text-[50px] text-white z-50'>{activeSection}</div> */}
      <Header />
      <div className='panel main-slider'>
        <MainSlider />
      </div>

      <div ref={circleRef} id="thirdCircle" className='panel story-telling'>
        <StoryTelling />
      </div>

      <div className='panel nft-collection'>
        <NftCollection />
      </div>

      <div className='panel on-chain-game'>
        <OnChainGame />
      </div>

      <div className='panel'>
        <EvilClub />
      </div>

      <div className='panel'>
        <MoaiToken />
      </div>

      <div className='panel'>
        <FAQ />
      </div>
    </div>
  )
}