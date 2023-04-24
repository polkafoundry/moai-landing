import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

const StoryTelling = ({ storyRef }: any) => {
  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <div className="pt-[60px]" ref={storyRef}>
      <div className="text-[32px] leading-[38px] text-center">The Legend</div>
      <p
        className={clsx(
          "mt-5 text-center px-5 text-[14px]",
          isShow
            ? ""
            : "text-ellipsis overflow-hidden flex-wrap block-ellipsis-14"
        )}
      >
        Some time ago, there was a prosperous and civilized culture living on
        the legendary island of Rapa Nui, which now belongs to Easter Island.
        They were guided by the Makemake - an ancient god who helped them build
        the statues of Moai and imbued them with the spirit of Mana, who blessed
        the Rapa Nui islanders with bravery, strength, prosperity, peace, and
        protection through its resting eyes.
        <br />
        <br />
        The Moais are divided into five tribes, representing the natural
        elements - the Aaren representing earth, the Aegle representing light,
        the Agni representing fire, the Aqua representing water, and the Adina
        representing air.
        <br />
        <br />
        However, as life began to prosper, people began to abandon their faith.
        Eventually, a group of Rapa Nui islanders ended up destroying the eyes
        of Moai, leaving behind the blessing spirit of Mana with no homes to go
        to. 
        <br />
        <br />
        Their arrogance and hubris brought about the wrath of the Makemake.
        Natural disasters and diseases began to swarm upon the island, and the
        people of Rapa Nui slowly disappeared, until no one is seen living in
        this once-vibrant society.
        <br />
        <br />
        To protect the spirits of Moai, the Makemake hid them away in another
        shape - something that modern people nowadays know as the “Wicked Moai
        NFT”. Legend has it that Moai will bond with the worthy holders of the
        NFTs and bestow gifts upon them - whether luck, creativity, or strength,
        and ask only for care and respect in return. 
        <br />
        <br />
        Until now, 1043 Wicked Moai NFTs have been found all over the world, as
        modern people continue to explore the ancient ruins of Rapa Nui and
        piece together the clues left by its vanished residents.
        <br />
        <br />
        The search for Moais is becoming more and more attractive to modern
        society, as people believe whoever beholds the “Wicked Moai” will
        receive its blessing and guidance into the future, and discover a
        long-forgotten secret of the wrath of Makemake.
        <br />
        <br />
        Were the Rapa Nui islanders truly disappear because of the then-reigning
        natural disasters and deathly diseases? 
        <br />
        <br />
        Or their vanishment without a trace, leaving behind only daunting and
        mysterious stone-faced monoliths, was the result of something else more
        celestial…
        <br />
        <br />
        Embark on the mystical journey to unveil Rapa Nui’s ancient apocalypse
        and embrace the malevolent power of Wicked Moai.
      </p>
      <div className="px-5 text-center text-[14px] leading-[15px]">
        {isShow ? (
          <div
            className="text-[#F98306] font-bold mt-10"
            onClick={() => setIsShow(false)}
          >
            HIDE
          </div>
        ) : (
          <button
            className={clsx("btn-cta", "w-full max-w-[160px] h-10 mt-5")}
            onClick={() => setIsShow(true)}
          >
            Read More
          </button>
        )}
      </div>
      <div>
        <Image
          src="/assets/story-map-mobile.png"
          className="w-full max-w-[390px] mx-auto mt-8"
          width={390}
          height={280}
          alt="map"
        />
      </div>
    </div>
  );
};

export default StoryTelling;
