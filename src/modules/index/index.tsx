import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import { useEffect, useLayoutEffect, useRef } from 'react';

import { MainSlider } from './main-slider/main-slider';
import { NftCollection } from './nft-collection';
import { StoryTelling } from './story-telling';
import { OnChainGame } from './on-chain-game';


if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

export function Home() {
  const circleRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let panels: any = gsap.utils.toArray("#ddddddddd .panel");
    let observer = ScrollTrigger.normalizeScroll(true) as Observer;
    let scrollTween: any;

    // on touch devices, ignore touchstart events if there's an in-progress tween so that touch-scrolling doesn't interrupt and make it wonky
    document.addEventListener("touchstart", e => {
      if (scrollTween) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    }, { capture: true, passive: false });

    function goToSection(i: number) {
      scrollTween = gsap.to(window, {
        scrollTo: { y: i * innerHeight, autoKill: false },
        // delay: 1,
        onStart: () => {
          observer.disable(); // for touch devices, as soon as we start forcing scroll it should stop any current touch-scrolling, so we just disable() and enable() the normalizeScroll observer
          observer.enable();
        },
        duration: i,
        onComplete: () => scrollTween = null,
        overwrite: true,
      });
    }

    panels.forEach((panel: any, i: number) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top bottom",
        end: "+=199%",
        onToggle: self => self.isActive && !scrollTween && goToSection(i)
      });
    });

    ScrollTrigger.create({
      start: 0,
      end: "max",
      snap: 1 / (panels.length - 1)
    })
  }, [])

  return (
    <div id='ddddddddd' onScroll={e => e.preventDefault()}>
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
    </div>
  )
}