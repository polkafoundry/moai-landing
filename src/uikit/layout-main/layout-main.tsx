import { PropsWithChildren } from "react";
import { Footer } from "../footer";
import { Header } from "../header";
import useMediaQuery from "../../../components/hooks/media-query";

export function LayoutMain({ children }: PropsWithChildren) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="md:overflow-x-hidden">
      {!isMobile && <Header />}

      {children}

      <Footer />
    </div>
  );
}
