import { PropsWithChildren } from "react";
import { Footer } from "../footer";

export function LayoutMain({ children }: PropsWithChildren) {
  return (
    <div className="md:overflow-x-hidden">
      {children}

      <Footer />
    </div>
  );
}
