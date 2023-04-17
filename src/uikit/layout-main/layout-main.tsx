import { PropsWithChildren } from 'react';
import { Footer } from '../footer';
import { Header } from '../header';

export function LayoutMain({ children }: PropsWithChildren) {
  return (
    <div className='pt-[75px]'>
      <Header />
      <div className='min-h-[calc(100vh-106px)]'>
        {children}
      </div>

      <Footer />
    </div>
  )
}