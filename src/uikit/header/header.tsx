import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { HomeSection } from "../../modules/index/const";
import styles from './header.module.scss';

const navItems = [
  { label: 'Story telling', sec: HomeSection.STORY_TELLING },
  { label: 'NFT Collection', sec: HomeSection.NFT_COLLECTION },
  { label: 'On-chain game', sec: HomeSection.ONCHAIN_GAME },
  { label: 'Moai club', sec: HomeSection.EVIL_CLUB },
  { label: 'Moai token', sec: HomeSection.MOAI_TOKEN },
  { label: 'FAQ', sec: HomeSection.FAQ },
]

export function Header() {
  const router = useRouter();
  const section = router.query.section as HomeSection || HomeSection.MAIN;

  return (
    <header className='fixed top-0 right-0 left-0 z-40 select-none'>
      <div className='container mx-auto h-[75px] flex justify-between items-center'>
        <Link href='/?section=main' shallow><div className='text-[20px] font-semibold'>LOGO</div></Link>

        <div className='flex gap-4'>
          {navItems.map((item, idx) => (
            <Link
              key={idx} className={clsx(
                styles['nav-item'], 'transition-all duration-300',
                {
                  [styles.active]: section === item.sec,
                })}
              href={`/?section=${item.sec}`}
              shallow
            >{item.label}</Link>
          ))}
        </div>
      </div>
    </header>
  );
}