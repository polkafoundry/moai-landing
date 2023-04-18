import Link from "next/link";
import { HomeSection } from "../const";
import styles from './header.module.scss';

const navItems = [
  { label: 'Story telling', sec: HomeSection.STORY_TELLING },
  { label: 'NFT Collection', sec: HomeSection.NFT_COLLECTION },
  { label: 'On-chain game', sec: HomeSection.ONCHAIN_GAME },
  { label: 'Evil club', sec: HomeSection.EVIL_CLUC },
  { label: 'Moai token', sec: HomeSection.MOAI_TOKEN },
  { label: 'FAQ', sec: HomeSection.FAQ },
]

export function Header() {
  return (
    <header className='fixed top-0 right-0 left-0 z-40 select-none'>
      <div className='container mx-auto h-[75px] flex justify-between items-center'>
        <Link href='/?section=main' shallow><div className='text-[20px] font-semibold'>LOGO</div></Link>

        <div className='flex gap-4'>
          {navItems.map((item, idx) => (
            <Link
              key={idx} className={styles['nav-item']} href={`/?section=${item.sec}`} shallow
            >{item.label}</Link>
          ))}
          {/*           
          <Link className={styles['nav-item']} href='/?section=nft-collection'>NFT Collection</Link>
          <Link className={styles['nav-item']} href='/?section=on-chain-game'>On-chain game</Link>
          <Link className={styles['nav-item']} href='/?section=evil-club'>Evil club</Link>
          <Link className={styles['nav-item']} href='/?section=moai-token'>Moai token</Link>
          <Link className={styles['nav-item']} href='/?section=faq'>FAQ</Link> */}
        </div>
      </div>
    </header>
  );
}