import Link from "next/link";
import { DiscordIcon } from "../icons/discord-icon";
import { MailIcon } from "../icons/mail-icon";
import { TwitterIcon } from "../icons/twitter-icon";
import styles from './footer.module.scss';

export function Footer() {
  return (
    <footer className='fixed z-20 right-0 bottom-0 left-0 min-h-[56px] flex items-center border-t border-t-white/20'>
      <div className='container mx-auto flex justify-between'>
        <div className='flex gap-[40px]'>
          <Link className='m-link' href='/privacy-policy'>Privacy Policy</Link>
          <Link className='m-link' href='/terms-and-conditions'>Terms and Conditions</Link>
        </div>

        <div className='flex gap-[8px]'>
          <Link className={styles['social-link']} href='/'><MailIcon className='text-white' /></Link>
          <Link className={styles['social-link']} href='/'><TwitterIcon className='text-white' /></Link>
          <Link className={styles['social-link']} href='/'><DiscordIcon className='text-white' /></Link>
        </div>
      </div>
    </footer>
  );
}
