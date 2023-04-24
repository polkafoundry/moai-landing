import { Footer } from "@/uikit/footer";
import AskedQuestion from "./main/asked-question";
import Banner from "./main/banner";
import MoaiAdventure from "./main/moai-adventure";
import MoaiCreator from "./main/moai-creator";
import MoaiToken from "./main/moai-token";
import NftCollection from "./main/nft-collection";
import StoryTelling from "./main/story-telling";
import WickedMoai from "./main/wicked-moai";
import Image from "next/image";
import Link from "next/link";
import { MailIcon } from "@/uikit/icons/mail-icon";
import { TwitterIcon } from "@/uikit/icons/twitter-icon";
import { DiscordIcon } from "@/uikit/icons/discord-icon";
import HeaderMobile from "./main/header";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { HomeSection } from "@/modules/index/const";
import FooterMobile from "./main/footer";

interface Props {}

const MainSliderMobile = ({}: Props) => {
  const storyRef = useRef<any>();
  const nftCollectionRef = useRef<any>();
  const wickedMoaiRef = useRef<any>();
  const moaiCreatorRef = useRef<any>();
  const moaiTokenRef = useRef<any>();
  const moaiAdventureRef = useRef<any>();
  const askQuestionRef = useRef<any>();
  const router = useRouter();

  useEffect(() => {
    const section = router?.query?.section;
    if (section) {
      switch (section) {
        case HomeSection.STORY_TELLING:
          storyRef?.current?.scrollIntoView &&
            storyRef?.current?.scrollIntoView();
          break;
        case HomeSection.NFT_COLLECTION:
          nftCollectionRef?.current?.scrollIntoView &&
            nftCollectionRef?.current?.scrollIntoView();
          break;
        case HomeSection.ONCHAIN_GAME:
          wickedMoaiRef?.current?.scrollIntoView &&
            wickedMoaiRef?.current?.scrollIntoView();
          break;
        case HomeSection.EVIL_CLUB:
          moaiCreatorRef?.current?.scrollIntoView &&
            moaiCreatorRef?.current?.scrollIntoView();
          break;
        case HomeSection.MOAI_TOKEN:
          moaiTokenRef?.current?.scrollIntoView &&
            moaiTokenRef?.current?.scrollIntoView();
          break;
        case HomeSection.ROADMAP:
          moaiAdventureRef?.current?.scrollIntoView &&
            moaiAdventureRef?.current?.scrollIntoView();
          break;
        case HomeSection.FAQ:
          askQuestionRef?.current?.scrollIntoView &&
            askQuestionRef?.current?.scrollIntoView();
          break;
      }
    }
  }, [
    router,
    storyRef,
    nftCollectionRef,
    wickedMoaiRef,
    moaiCreatorRef,
    moaiTokenRef,
    moaiAdventureRef,
    askQuestionRef,
  ]);

  return (
    <div className="relative">
      <HeaderMobile />
      <Banner />
      <StoryTelling storyRef={storyRef} />
      <NftCollection nftCollectionRef={nftCollectionRef} />
      <WickedMoai wickedMoaiRef={wickedMoaiRef} />
      <MoaiCreator moaiCreatorRef={moaiCreatorRef} />
      <MoaiToken moaiTokenRef={moaiTokenRef} />
      <MoaiAdventure moaiAdventureRef={moaiAdventureRef} />
      <AskedQuestion askQuestionRef={askQuestionRef} />
      <FooterMobile />
    </div>
  );
};

export default MainSliderMobile;
