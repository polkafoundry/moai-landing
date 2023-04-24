import Link from "next/link";
import { DiscordIcon } from "../icons/discord-icon";
import { TwitterIcon } from "../icons/twitter-icon";
import styles from "./footer.module.scss";
import useMediaQuery from "../../../components/hooks/media-query";
import { TelegramIcon } from "../icons/telegram-icon";
import { DISCORD_URL, TELE_URL, TWITTER_URL } from "@/const/config";
import { ExternalLink } from "../external-link";

export function Footer() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  if (isMobile) {
    return null;
  }

  return (
    <footer className="lg:fixed z-30 right-0 bottom-0 left-0 min-h-[56px] flex items-center border-t border-t-white/20">
      <div className="container mx-auto flex justify-between">
        <div className="flex gap-[40px]">
          <Link className="m-link" href="/privacy-policy">
            Privacy Policy
          </Link>
          <Link className="m-link" href="/terms-and-conditions">
            Terms and Conditions
          </Link>
        </div>

        <div className="flex gap-[8px]">
          <ExternalLink className={styles["social-link"]} href={TELE_URL}>
            <TelegramIcon className="text-white" />
          </ExternalLink>
          <ExternalLink className={styles["social-link"]} href={TWITTER_URL}>
            <TwitterIcon className="text-white" />
          </ExternalLink>
          <ExternalLink className={styles["social-link"]} href={DISCORD_URL}>
            <DiscordIcon className="text-white" />
          </ExternalLink>
        </div>
      </div>
    </footer>
  );
}
