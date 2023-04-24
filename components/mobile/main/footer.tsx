import { DiscordIcon } from "@/uikit/icons/discord-icon";
import { MailIcon } from "@/uikit/icons/mail-icon";
import { TwitterIcon } from "@/uikit/icons/twitter-icon";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface Props {
  showAll?: boolean;
}

const FooterMobile = ({ showAll = true }: Props) => {
  return (
    <footer className="mt-5">
      {showAll && (
        <>
          <Image
            src="/assets/ava-moai-png2-mobile.png"
            className="w-full max-w-[306px] h-[306px] mx-auto"
            width={306}
            height={306}
            alt="image footer"
          />
          <p className="mt-10 px-5 text-center text-[24px] leading-[28px]">
            The future is here, and we're shaping it. Be part of the
            conversation and stay inspired by our vision.
          </p>
          <div className="flex gap-[24px] mt-8 justify-center">
            <Link
              href="/"
              className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-gradient-to-r from-[#E71A16] to-[#FC9303]"
            >
              <MailIcon className="text-white" width={20} height={20} />
            </Link>
            <Link
              href="/"
              className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-gradient-to-r from-[#E71A16] to-[#FC9303]"
            >
              <TwitterIcon className="text-white" width={20} height={20} />
            </Link>
            <Link
              href="/"
              className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-gradient-to-r from-[#E71A16] to-[#FC9303]"
            >
              <DiscordIcon className="text-white" width={20} height={20} />
            </Link>
          </div>
        </>
      )}
      <div
        className={clsx(
          "w-full h-[1px] bg-white opacity-20",
          showAll ? "mt-[80px]" : "mt-10"
        )}
      />
      <div className="flex gap-[40px] justify-center py-4">
        <Link className="m-link" href="/privacy-policy">
          Privacy Policy
        </Link>
        <Link className="m-link" href="/terms-and-conditions">
          Terms and Conditions
        </Link>
      </div>
    </footer>
  );
};

export default FooterMobile;
