import { useRouter } from 'next/router';
import { HomeSection } from './const';

export const useScreenActive = (currentSec: HomeSection) => {
  const router = useRouter();
  const section = router.query.section as HomeSection;

  return section === currentSec;
}