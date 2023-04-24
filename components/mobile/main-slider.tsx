import Banner from "./main/banner";
import NftCollection from "./main/nft-collection";
import StoryTelling from "./main/story-telling";
import WickedMoai from "./main/wicked-moai";

interface Props {}

const MainSliderMobile = ({}: Props) => {
  return (
    <div className="relative">
      <Banner />
      <StoryTelling />
      <NftCollection />
      <WickedMoai />
    </div>
  );
};

export default MainSliderMobile;
