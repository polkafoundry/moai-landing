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
      "Considered the best option for on-chain games thanks to its ability to offer fast and low-cost transactions, Ethereum security, and EVM compatibility, the answer is zkSync.",
  },
  {
    question: "3. How is the on-chain game world utilized in Wicked Moai?",
    answer: "The Wicked Moai development team aims to build an on-chain game world that takes advantage of the unique gameplay that blockchain has to offer - more transparency and security for in-game economy, and full autonomy or individual players that contributes to decentralized governance.",
  },
  {
    question: "4. What is Wicked Moai's token?",
    answer: "Wicked Moai's token is the $MOAI, with utilities include the in-game economy, trading purposes, community rewards, governance purposes, and token grants for game world contributors.",
  },
  {
    question: "5. What types of NFTs are available in Wicked Moai?",
    answer: "NFT collectibles and in-game NFTs, with NFT collectibles as a remarkable hand-drawn PfP collection offering community membership and various benefits for holders, while in-game NFTs act as a centerpiece of the games.",
  },
  {
    question: "6. How many NFTs are available in the collection?",
    answer:
      "There are 1,043 Wiked Moai NFTs in total,  dividing into 5 tribes with different backstories, representing Earth, Water, Fire, Air, and Light.",
  },
  {
    question:
      "7. What is the rarity system for Wicked Moai NFTs and how does it affect game world experience?",
    answer:
      "Wicked Moai NFTs are a 1,043 piece hand-drawn PfP collection of digital collectibles, created by the Moai artist club and features unique storytelling that reflects the complexities of human psyche. As Moai was historically imbued with the spirit of the divine, each NFT is meaningful and thought-provoking, capturing the duality of human nature. With the expiration of certain NFT collections, the rarity might increase and favor the early holders of the game.",
  },
  {
    question: "8. What is Wicked Moai Game World?",
    answer:
      "Wicked Moai Game World is a platform that's open and community-driven. Our character set serves as the hub of the game world and will be used in all games created on the platform. Users can create their own storylines and games for the characters, fostering creativity and imagination. The developers are encouraging artists, creators, and storytellers to join them in building an incredible community.",
  },
  {
    question: "9. How can users contribute to the development of Wicked Moai?",
    answer: (
      <>
        Join Wicked Moai game world open for Developers to freely utilize our Moai character set with an initial story and a few games, encourage potential builders to jump in and the rest of the story is up entirely to the community’s creativity and imagination. Any ideas for Wicked Moai can be contributed{" "}
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
  const [ignoreScroll, setIgnoreScroll] = useState(true);

  useEffect(() => {
    if (!show) setActiveIdx(0);
    setIgnoreScroll(true);
  }, [show]);

  useEffect(() => {
    if (!elRef.current) return;
    elRef.current.onwheel = function (e) {
      if (ignoreScroll) {
        e.preventDefault();
        return;
      };
      e.stopPropagation();
    };
  }, [ignoreScroll]);

  const handleActive = (idx: number) => {
    setActiveIdx(idx);
  };

  return (
    <div
      className="h-[100vh] pt-[75px] pb-[50px] backdrop flex items-center"
      style={{
        backgroundImage: `url(/assets/bg-moai.png)`,
        backgroundSize: "cover",
      }}
    >
      <div className="container relative z-10 bg-transparent">
        <FadeEffect show={show} y={-50}>
          <h1 className="text-[48px] font-[500] mb-[30px]">
            Frequently Asked Questions
          </h1>
        </FadeEffect>

        <div
          ref={elRef}
          onClick={() => setIgnoreScroll(false)}
          className={clsx("max-h-[calc(100vh-300px)]", {
            "overflow-auto": show,
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
                <div className="sticky top-0 right-0 left-0">
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
  );
}
