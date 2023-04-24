import { CONTRIBUTE_FORM_URL } from "@/const/config";
import { FadeEffect } from "@/uikit/animation/fade-effect";
import { ExternalLink } from "@/uikit/external-link";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { HomeSection } from "../const";
import { useScreenActive } from "../ctx";
import styles from "./faq.module.scss";

export const faq = [
  {
    question: "1. What is Wicked Moai?",
    answer:
      'A fully on-chain game world where you can collect "Wicked Moai NFTs" and unlock the ancient powers of the Moai statues.',
  },
  {
    question: "2. Which blockchain is Wicked Moai on?",
    answer:
      "zkSync. Consider as the best chain for on-chain game as its ability to offer fast and cheap transactions, Ethereum security, EVM compatible.",
  },
  {
    question: "3. How is the on-chain game world utilized in Wicked Moai?",
    answer: (
      <>
        The Wicked Moai development team aim to build an on-chain game world
        that take advantage of the unique gameplay that blockchain offers:
        <ul>
          <li>- More transparency and security in the game's economy</li>
          <li>
            - Allow each individual player full autonomy for decentralized
            governance and decision-making
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "4. What is Wicked Moai's token?",
    answer: (
      <>
        $MOAI. Token utitilies:
        <ul>
          <li>- In-game economy</li>
          <li>- game world grands</li>
          <li>- Trading</li>
          <li>- Reward</li>
          <li>- Governance</li>
        </ul>
      </>
    ),
  },
  {
    question: "5. What types of NFTs are available in Wicked Moai?",
    answer: (
      <>
        NFTs collectible and in-game NFTs
        <ul>
          <li>
            - NFT collectibles: Sui generis Wicked Moai NFTs collection,
            initiate ownership, community membership and other benefits for
            holders.
          </li>
          <li>
            - In-game NFT: Designed separatedly for each game in Wicked Moai
            World for gaming purposes.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "6. How many NFTs available in the collection?",
    answer:
      "10430 Moai NFTs, devided into 5 different tribes with distictive backstories, representing 5 powers: Wind, Earth, Water, Fire and Light.",
  },
  {
    question:
      "7. What is the rarity system for Wicked Moai NFTs and how does it affect game world experience?",
    answer:
      "Wicked Moai NFT are a 10,430 piece collection of digital collectibles, created by the Moai artist club and features unique storytelling that reflects the complexities of human psyche. As Moai was historically imbued with the spirit of the divine, each NFT is meaningful and thought-provoking, capturing the duality of human nature. With the expiration of certain NFT collections, the rarity might increase and favor the early holders of the game.",
  },
  {
    question: "8. What is Wicked Moai Game World?",
    answer:
      "Wicked Moai game world is called The zkMoai Gaming World, named after the zkSync solution used for the project's technological layer. It is a platform that's open and community-driven. Users can create their own storylines and games for the characters, fostering creativity and imagination. The developers are encouraging artists, creators, and storytellers to join them in building an incredible community.",
  },
  {
    question: "9. How can users contribute to the development of Wicked Moai?",
    answer: (
      <>
        Join zkMoai Gaming World open for Developers to freely utilize a
        character set with an initial story and a few games, encourage potential
        builders to jump in and the rest of the story is up entirely to the
        community’s creativity and imagination. Any ideas for Wicked Moai can be
        contributed{" "}
        <ExternalLink
          className="text-[var(--m-clr-text-orange)]"
          href={CONTRIBUTE_FORM_URL}
        >
          here
        </ExternalLink>
        .
      </>
    ),
  },
];

export function FAQ() {
  const show = useScreenActive(HomeSection.FAQ);
  const elRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    if (!show) setActiveIdx(0);
  }, [show]);

  useEffect(() => {
    setTimeout(() => {
      setScroll(true);
    }, 3000);
    if (!elRef.current) return;
    elRef.current.onwheel = function (e) {
      e.stopPropagation();
    };
  }, []);

  const handleActive = (idx: number) => {
    setActiveIdx(idx);
  };

  return (
    <div
      className="h-[100vh] pt-[75px] pb-[50px] backdrop flex items-center"
      style={{
        backgroundImage: `url(/assets/bg-moai1.png)`,
        backgroundSize: "cover",
      }}
    >
      <div className="container relative z-10 bg-transparent">
        <FadeEffect show={show} y={-50}>
          <h1 className="text-[48px] font-[500] mb-[30px]">
            Frequent Asked Questions
          </h1>
        </FadeEffect>

        <div
          ref={elRef}
          className={clsx("max-h-[500px]", {
            "overflow-hidden": !scroll || !show,
            "overflow-auto": scroll && show,
          })}
        >
          <div className="pr-[40px]">
            <div className="grid grid-cols-2 gap-[20px] lg:gap-[60px]">
              <div className="w-full flex flex-col gap-[8px]">
                {faq.map((item, idx) => (
                  <FadeEffect key={idx} show={show} x={-idx * 40 + 30}>
                    <div
                      onClick={() => handleActive(idx)}
                      className={clsx(
                        "cursor-pointer relative py-[12px] px-[24px] rounded-[8px] transition-all",
                        styles["faq-item"],
                        {
                          [styles["faq-item-active"]]: activeIdx === idx,
                        }
                      )}
                    >
                      <div
                        className={clsx("font-[500] transition-all", {
                          "text-[#F98306]": activeIdx === idx,
                        })}
                      >
                        {item.question}
                      </div>
                    </div>
                  </FadeEffect>
                ))}
              </div>
              <div className="w-full relative">
                <div className="sticky top-0 bottom-0">
                  <div className="flex justify-center items-center h-[500px]">
                    <div>
                      <div className="text-highlight text-[24px] font-[500] mb-[12px]">
                        {faq[activeIdx].question}
                      </div>
                      <div className={clsx("font-[400] text-white/80", {})}>
                        {faq[activeIdx].answer}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
