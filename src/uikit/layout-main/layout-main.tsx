import { PropsWithChildren } from 'react';
import { Footer } from '../footer';
import { Header } from '../header';

export function LayoutMain({ children }: PropsWithChildren) {
  return (
    <div className='overflow-x-hidden'>
      {children}

      <Footer />
    </div>
  )
}