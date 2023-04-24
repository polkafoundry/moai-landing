import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

const StoryTelling = () => {
  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <div className="pt-[60px]">
      <div className="text-[32px] leading-[38px] text-center">The Legend</div>
      <p
        className={clsx(
          "mt-5 text-center px-5 text-[14px]",
          isShow
            ? ""
            : "text-ellipsis overflow-hidden flex-wrap block-ellipsis-14"
        )}
      >
        <p>
          Some time ago, there was a prosperous and civilized culture living on
          the legendary island of Rapa Nui, which now belongs to Easter Island.
          They were guided by the Makemake - an ancient god who helped them
          build the statues of Moai and imbued them with the spirit of Mana, who
          blessed the Rapa Nui islanders with bravery, strength, prosperity,
          peace, and protection through its resting eyes.
        </p>
        <p className="mt-[12px] leading-[22px]">
          The Moais are divided into five tribes, representing the natural
          elements - the Aaren representing earth, the Aegle representing light,
          the Agni representing fire, the Aqua representing water, and the Adina
          representing air.
        </p>
        <p className="mt-[12px] leading-[22px]">
          However, as life began to prosper, people began to abandon their
          faith. Eventually, a group of Rapa Nui islanders ended up destroying
          the eyes of Moai, leaving behind the blessing spirit of Mana with no
          homes to go to. 
        </p>
        <p className="mt-[12px] leading-[22px]">
          Their arrogance and hubris brought about the wrath of the Makemake.
          Natural disasters and diseases began to swarm upon the island, and the
          people of Rapa Nui slowly disappeared, until no one is seen living in
          this once-vibrant society.
        </p>
        <p className="mt-[12px] leading-[22px]">
          To protect the spirits of Moai, the Makemake hid them away in another
          shape - something that modern people nowadays know as the “Wicked Moai
          NFT”. Legend has it that Moai will bond with the worthy holders of the
          NFTs and bestow gifts upon them - whether luck, creativity, or
          strength, and ask only for care and respect in return. 
        </p>
        <p className="mt-[12px] leading-[22px]">
          Until now, 1043 Wicked Moai NFTs have been found all over the world,
          as modern people continue to explore the ancient ruins of Rapa Nui and
          piece together the clues left by its vanished residents.
        </p>
        <p className="mt-[12px] leading-[22px]">
          The search for Moais is becoming more and more attractive to modern
          society, as people believe whoever beholds the “Wicked Moai” will
          receive its blessing and guidance into the future, and discover a
          long-forgotten secret of the wrath of Makemake.
        </p>
        <p className="mt-[12px] leading-[22px]">
          Were the Rapa Nui islanders truly disappear because of the
          then-reigning natural disasters and deathly diseases? 
        </p>
        {/* The search for Moais is becoming more and more attractive to modern
        society, as people believe whoever beholds the “Wicked Moai” will
        receive its blessing and guidance into the future, and discover a
        long-forgotten secret of the wrath of Makemake.
        <br />
        <br /> */}
        <p className="mt-[12px] leading-[22px]">
          Or their vanishment without a trace, leaving behind only daunting and
          mysterious stone-faced monoliths, was the result of something else
          more celestial…
        </p>
        <p className="mt-[12px] leading-[22px]">
          Embark on the mystical journey to unveil Rapa Nui’s ancient apocalypse
          and embrace the malevolent power of Wicked Moai.
        </p>
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
      <div className="grid grid-cols-2 gap-5 px-5 mt-7">
        <div>
          <Image
            src="/assets/bg-moai2-small.png"
            className="w-full h-[30vw] object-contain"
            width={145}
            height={102}
            alt="water"
          />
          <p className="text-[16px] leading-[19px] text-center">Aqua/Water</p>
        </div>
        <div>
          <Image
            src="/assets/bg-moai3-small.png"
            className="w-full h-[30vw] object-contain"
            width={145}
            height={102}
            alt="water"
          />
          <p className="text-[16px] leading-[19px] text-center">Aegle/Light</p>
        </div>
        <div>
          <Image
            src="/assets/bg-moai3-small.png"
            className="w-full h-[30vw] object-contain"
            width={145}
            height={102}
            alt="water"
          />
          <p className="text-[16px] leading-[19px] text-center">Agni/Fire</p>
        </div>
        <div>
          <Image
            src="/assets/bg-moai2-small.png"
            className="w-full h-[30vw] object-contain"
            width={145}
            height={102}
            alt="water"
          />
          <p className="text-[16px] leading-[19px] text-center">Adina/Air</p>
        </div>
        <div>
          <Image
            src="/assets/aaren_earth.png"
            className="w-full h-[30vw] object-contain"
            width={145}
            height={102}
            alt="water"
          />
          <p className="text-[16px] leading-[19px] text-center">Aaren/Earth</p>
        </div>
      </div>
    </div>
  );
};

export default StoryTelling;
