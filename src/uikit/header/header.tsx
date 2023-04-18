import Link from "next/link";
import styles from './header.module.scss';

export function Header() {
  return (
    <header className='fixed top-0 right-0 left-0 z-10 select-none'>
      <div className='container mx-auto h-[75px] flex justify-between items-center'>
        <div className='text-[20px] font-semibold'>LOGO</div>

        <div className='flex gap-4'>
          <Link className={styles['nav-item']} href='/?section=storytelling'>Storytelling</Link>
          <Link className={styles['nav-item']} href='/?section=nft-collection'>NFT Collection</Link>
          <Link className={styles['nav-item']} href='/?section=on-chain-game'>On-chain game</Link>
          <Link className={styles['nav-item']} href='/?section=evil-club'>Evil club</Link>
          <Link className={styles['nav-item']} href='/?section=moai-token'>Moai token</Link>
          <Link className={styles['nav-item']} href='/?section=faq'>FAQ</Link>
        </div>
      </div>
    </header>
  );
}