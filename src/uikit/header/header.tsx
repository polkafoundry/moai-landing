import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import useMediaQuery from "../../../components/hooks/media-query";
import HeaderMobile from "../../../components/mobile/main/header";
import { HomeSection } from "../../modules/index/const";
import styles from "./header.module.scss";
import Image from "next/image";
import { LITEPAPER } from "@/const/config";

const navItems = [
  { label: "Storytelling", sec: HomeSection.STORY_TELLING },
  { label: "NFT Collection", sec: HomeSection.NFT_COLLECTION },
  { label: "On-chain game", sec: HomeSection.ONCHAIN_GAME },
  { label: "Moai club", sec: HomeSection.EVIL_CLUB },
  { label: "$Moai", sec: HomeSection.MOAI_TOKEN },
  { label: "Road map", sec: HomeSection.ROADMAP },
  { label: "Litepaper", sec: "" },
  { label: "FAQ", sec: HomeSection.FAQ },
];

export function Header() {
  const router = useRouter();
  const isSmall = useMediaQuery("(max-width: 1280px)");
  const section = (router.query.section as HomeSection) || HomeSection.MAIN;

  if (isSmall) {
    return <HeaderMobile />;
  }

  return (
    <header className="fixed top-0 right-0 left-0 z-40 select-none">
      <div className="container mx-auto h-[75px] flex justify-between items-center">
        <Link href="/?section=main" shallow>
          <Image src="/assets/logo.png" width={100} height={46} alt="logo" />
        </Link>

        <div className="flex gap-2">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              className={clsx(
                styles["nav-item"],
                "transition-all duration-300",
                {
                  [styles.active]: section === item.sec,
                }
              )}
              href={item?.sec ? `/?section=${item.sec}` : LITEPAPER}
              target={item?.sec ? "" : "_blank"}
              shallow
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
