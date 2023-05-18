import { dataMoaiToken } from "@/const/data";
import { FadeEffect } from "@/uikit/animation/fade-effect";
import { WhitePaperIcon } from "@/uikit/icons/whitepaper-icon";
import dynamic from "next/dynamic";
import { HomeSection } from "../const";
import { useScreenActive } from "../ctx";
import { ExternalLink } from "@/uikit/external-link";
import { LITEPAPER } from "@/const/config";

const ChartComponent = dynamic(() => import("./chart").then((m) => m.Chart), {
  ssr: false,
});

export function MoaiToken() {
  const show = useScreenActive(HomeSection.MOAI_TOKEN);

  return (
    <div className="backdrop">
      <div
        className="h-[100vh] py-[60px] lg:py-0 overflow-auto flex items-center z-10"
        style={{
          backgroundImage: `url(/assets/bg-moai.png)`,
          backgroundSize: "cover",
        }}
      >
        <div className="h-full lg:h-auto container relative z-10 bg-transparent">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-[40px] lg:gap-[110px]">
            <div className="col-span-3 lg:col-span-2 w-full text-white/80 flex flex-col justify-center">
              <FadeEffect show={show} y={-50}>
                <h1 className="text-[48px] font-[500] mb-[25px]">
                  $MOAI
                </h1>
              </FadeEffect>

              <div className="flex flex-col gap-[20px] text-white/80 mb-[28px]">
                <FadeEffect show={show} x={-100}>
                  <div>
                    The $MOAI powers the Wicked Moai ecosystem's
                    blockchain-based game world. It facilitates game
                    participation, adoption, and advanced features while
                    incentivizing players who contribute to the community with
                    $MOAI.
                  </div>
                </FadeEffect>
                <FadeEffect show={show} x={-200}>
                  <div className="flex gap-4 mt-2">
                    <div className="w-full">
                      <ExternalLink href={LITEPAPER}>
                        <button className="btn-white w-full">
                          <div className="flex items-center justify-center gap-2 hover:scale-[1.1] duration-150">
                            <WhitePaperIcon /> LITEPAPER
                          </div>
                        </button>
                      </ExternalLink>
                    </div>
                    <button className="btn-cta w-full opacity-70" disabled>
                      Join DAO
                    </button>
                  </div>
                </FadeEffect>
              </div>
            </div>
            <div className="col-span-3 flex justify-center flex-col pb-8">
              <div className="min-h-[400px] z-40 py-8">
                {show && <ChartComponent dataMoaiToken={dataMoaiToken} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
