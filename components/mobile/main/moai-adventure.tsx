import clsx from "clsx";

interface Props {
  numb: number;
  title: string;
  content: string;
  isLast: boolean;
}

const MoaiAdventureItem = ({ numb, title, content, isLast }: Props) => {
  return (
    <div className="px-5">
      <div className="relative pl-[19px] pr-5">
        <div className="absolute top-[-5px] left-0 w-[40px] h-[40px] bg-[#FC9303] rounded-full p-1 bg-opacity-40">
          <div className="w-full h-full p-1 bg-[#fc5603] rounded-full bg-opacity-60">
            <div className="flex w-full h-full items-center justify-center text-[14px] bg-gradient-to-r from-[#E71A16] to-[#FC9303] rounded-full">
              {numb}
            </div>
          </div>
        </div>
        <div
          className={clsx(
            "border-l-[2px] border-[#FC9303] pl-[27px]",
            !isLast ? "pb-10" : ""
          )}
        >
          <div className="pl-5 font-[500] text-transparent text-[20px] bg-clip-text bg-gradient-to-r from-[#E71A16] to-[#FC9303]">
            {title}
          </div>
          <div className="mt-3 bg-gradient-to-r from-[#E71A16] to-[#FC9303] p-[2px] rounded-[24px]">
            <div className="bg-black px-[28px] py-5 rounded-[23px]">
              {content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const adventures = [
  {
    title: "Product Development",
    content:
      "Community-building, Blockchain & Infrastructure Development, Game & NFT Development, TGE preparation",
  },
  {
    title: "Community Development",
    content:
      "Airdrop, KOLs networking, Game Release, Staking&trading rewards, TGE",
  },
  {
    title: "Ecosystem Growth",
    content:
      "DAO Governance, Game World Development, NFT Collection and Storytelling",
  },
  {
    title: "On-chain Game World",
    content:
      "SDK to enable the creation/integration of existing games that can operate entirely on-chain",
  },
];

const MoaiAdventure = ({ moaiAdventureRef }: any) => {
  return (
    <div className="pt-[60px]" ref={moaiAdventureRef}>
      <div className="text-[32px] leading-[38px] text-center font-[500] pb-[48px]">
        Moai adventure
      </div>
      {adventures?.map((item: any, index: number) => {
        return (
          <MoaiAdventureItem
            key={index}
            numb={index + 1}
            title={item?.title}
            content={item?.content}
            isLast={index === adventures?.length - 1}
          />
        );
      })}
    </div>
  );
};

export default MoaiAdventure;
