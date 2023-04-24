import { DISCORD_URL, LITEPAPER, TELE_URL, TWITTER_URL } from "@/const/config";
import { HomeSection } from "@/modules/index/const";
import { ExternalLink } from "@/uikit/external-link";
import { DiscordIcon } from "@/uikit/icons/discord-icon";
import { TelegramIcon } from "@/uikit/icons/telegram-icon";
import { TwitterIcon } from "@/uikit/icons/twitter-icon";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Storytelling", sec: HomeSection.STORY_TELLING },
  { label: "NFT Collection", sec: HomeSection.NFT_COLLECTION },
  { label: "On-chain game", sec: HomeSection.ONCHAIN_GAME },
  { label: "Moai club", sec: HomeSection.EVIL_CLUB },
  { label: "Moai token", sec: HomeSection.MOAI_TOKEN },
  { label: "Road map", sec: HomeSection.ROADMAP },
  { label: "FAQ", sec: HomeSection.FAQ },
];

const HeaderMobile = () => {
  const router = useRouter();
  const [isShow, setIsShow] = useState<boolean>(false);
  const section = (router.query.section as HomeSection) || HomeSection.MAIN;
  const [background, setBackground] = useState("transparent");

  const onScroll = () => {
    if (window?.scrollY === 0) {
      setBackground("transparent");
    }
    if (background === "transparent") {
      setBackground("#0B0515");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
  });

  return (
    <header
      style={{ background: isShow ? "#0B0515" : background }}
      className={clsx(
        "fixed top-0 right-0 left-0 z-40 select-none overflow-y-auto hide-scroll",
        isShow ? "h-full" : ""
      )}
    >
      <div className="container mx-auto h-[60px] px-8 flex justify-between items-center">
        <Link href="/?section=main" shallow>
          <div className="text-[20px] font-semibold">
            <Image src="/assets/logo.png" width={80} height={37} alt="logo" />
          </div>
        </Link>
        <Image
          src="/assets/icon-menu.svg"
          width={25}
          height={16}
          alt="menu"
          onClick={() => setIsShow(!isShow)}
        />
      </div>
      {isShow && (
        <>
          <div className="grid gap-[12px] justify-center">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                className={clsx(
                  "transition-all w-fit mx-auto duration-300 px-8 py-[12px] rounded-[4px] text-center",
                  section === item.sec
                    ? "bg-[#F0500E] bg-opacity-80"
                    : "bg-white bg-opacity-10"
                )}
                href={`/?section=${item.sec}`}
                onClick={() => setIsShow(false)}
                shallow
              >
                {item.label}
              </Link>
            ))}
            <Link
              className="transition-all w-fit mx-auto duration-300 px-8 py-[12px] rounded-[4px] text-center bg-white bg-opacity-10"
              href={LITEPAPER}
              target={"_blank"}
              onClick={() => setIsShow(false)}
              shallow
            >
              Whitepaper
            </Link>
          </div>

          <p className="max-w-[334px] mx-auto mt-10 px-5 text-center text-[20px] leading-[24px]">
            The future is here, and we're shaping it. Be part of the
            conversation and stay inspired by our vision.
          </p>
          <div className="flex gap-[24px] mt-8 justify-center">
            <ExternalLink
              href={TELE_URL}
              className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-gradient-to-r from-[#E71A16] to-[#FC9303]"
            >
              <TelegramIcon className="text-white" width={20} height={20} />
            </ExternalLink>
            <ExternalLink
              href={TWITTER_URL}
              className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-gradient-to-r from-[#E71A16] to-[#FC9303]"
            >
              <TwitterIcon className="text-white" width={20} height={20} />
            </ExternalLink>
            <ExternalLink
              href={DISCORD_URL}
              className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-gradient-to-r from-[#E71A16] to-[#FC9303]"
            >
              <DiscordIcon className="text-white" width={20} height={20} />
            </ExternalLink>
          </div>
          <div className="w-full h-[1px] bg-white opacity-20 mt-[60px]" />
          <div className="flex gap-[40px] justify-center py-4">
            <Link className="m-link" href="/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="m-link" href="/terms-and-conditions">
              Terms and Conditions
            </Link>
          </div>
        </>
      )}
    </header>
  );
};

export default HeaderMobile;
