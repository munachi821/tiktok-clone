import liveIcon from "./assets/tiktok icons/tiktok-live.svg";
import searchIcon from "./assets/tiktok icons/tiktok-search.svg";
import heartIcon from "./assets/tiktok icons/tiktok-heart.svg";
import commentIcon from "./assets/tiktok icons/tiktok-comments.svg";
import favoriteIcon from "./assets/tiktok icons/tiktok-favorite.svg";
import forwardIcon from "./assets/tiktok icons/tiktok-forward.svg";
import verifiedIcon from "./assets/tiktok icons/tiktok-verified.svg";
import { Plus } from "lucide-react";
function App() {
  return (
    <div className="min-h-screen min-w-screen bg-red-400 p-4">
      <div className="flex w-full justify-between items-center">
        <div>
          <img src={liveIcon} alt="tiktok live icon" width={35} />
        </div>
        <ul className="inline-flex text-[#B8B9BD] gap-4 font-bold pt-5 text-[15.933px]">
          <li className="cursor-pointer">STEM</li>
          <li className="cursor-pointer">Explore</li>
          <li className="cursor-pointer">Following</li>
          <li className="text-white border-b-2 pb-3 w-8 whitespace-nowrap flex items-center justify-center ml-4">
            For You
          </li>
        </ul>
        <div>
          <img src={searchIcon} alt="tiktok search icon" width={35} />
        </div>
      </div>

      <div className="flex flex-col items-center w-fit gap-5">
        <div className="size-16 rounded-full bg-black relative background">
          <div className="absolute size-6 rounded-full -bottom-2 left-[21px] flex items-center justify-center text-white bg-[#FD2C54]">
            <Plus size={18} />
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img src={heartIcon} alt="tiktok heart icon" width={37} />
          <span className="font-bold text-white text-xl">87.1k</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <img src={commentIcon} alt="tiktok comment icon" width={37} />
          <span className="font-bold text-white text-xl">5,197</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <img src={favoriteIcon} alt="tiktok favorite icon" width={37} />
          <span className="font-bold text-white text-xl">4,428</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <img src={forwardIcon} alt="tiktok forward icon" width={37} />
          <span className="font-bold text-white text-xl">9,782</span>
        </div>
      </div>

      <div>
        <div className="flex items-end justify-between">
          <div>
            <span className="inline-flex gap-2.5">
              <h1 className="text-3xl font-semibold text-white">
                Onyebuchi Munachi
              </h1>
              <img src={verifiedIcon} alt="tiktok verified icon" width={20} />
            </span>
            <div className="h-12.5 max-w-[360px] overflow-y-hidden">
              <p className="text-lg text-white">
                My name is Munachi Onyebuchi, I'm a frontend web developer with
                more...more years of experience in react js and tailwindCSS
              </p>
            </div>
          </div>

          <div className="size-14 rounded-full bg-black background"></div>
        </div>
        <div className="mt-2">
          <input
            type="range"
            name="range"
            id="range"
            min={0}
            max={100}
            /* value={0} */
            /* className="w-full accent-white/20 outline-0 border-0 focus:outline-none focus:border-none hover:outline-none hover:border-none" */
            className="slider"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
