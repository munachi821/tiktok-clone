import liveIcon from "./assets/tiktok icons/tiktok-live.svg";
import searchIcon from "./assets/tiktok icons/tiktok-search.svg";
import heartIcon from "./assets/tiktok icons/tiktok-heart.svg";
import commentIcon from "./assets/tiktok icons/tiktok-comments.svg";
import favoriteIcon from "./assets/tiktok icons/tiktok-favorite.svg";
import forwardIcon from "./assets/tiktok icons/tiktok-forward.svg";
import verifiedIcon from "./assets/tiktok icons/tiktok-verified.svg";
import homeIcon from "./assets/tiktok icons/tiktok-home.svg";
import createIcon from "./assets/tiktok icons/tiktok-create.svg";
import messageIcon from "./assets/tiktok icons/tiktok-messages.svg";
import profileIcon from "./assets/tiktok icons/tiktok-user.svg";
import video1 from "./assets/tiktok assets/video1.mp4";
import video2 from "./assets/tiktok assets/video2.mp4";
import video3 from "./assets/tiktok assets/video3.mp4";
import { Plus } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function App() {
  const [range, setRange] = useState(0);
  const videos = [video1, video2, video3];
  const videoRefs = useRef([]);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          if (entry.isIntersecting) setActiveIndex(index);
        });
      },
      { threshold: 0.7 }
    );

    videoRefs.current.forEach((video, index) => {
      if (video instanceof Element) {
        video.dataset.index = index;
        observer.observe(video);
      }
    });

    // 👇 Force first video active on mount
    if (videoRefs.current[0]) {
      setActiveIndex(0);
    }

    return () => {
      videoRefs.current
        .filter((video) => video instanceof Element)
        .forEach((video) => observer.unobserve(video));
    };
  }, []);

  useEffect(() => {
    const currentVideo = videoRefs.current[activeIndex];
    if (!currentVideo) return;

    const handleLoadedMetadata = () => {
      setDuration(currentVideo.duration);
      setRange(0);
      setCurrentTime(0);
    };

    const handleTimeUpdate = () => {
      const { currentTime, duration } = currentVideo;
      if (duration && duration > 0) {
        setCurrentTime(currentTime);
        setRange((currentTime / duration) * 100);
      }
    };

    //once you scroll off the video pause it
    videoRefs.current.forEach((video, i) => {
      if (i !== activeIndex && video) {
        video.pause();
        video.currentTime = 0;
      }
    });

    currentVideo.addEventListener("loadedmetadata", handleLoadedMetadata);
    currentVideo.addEventListener("timeupdate", handleTimeUpdate);

    currentVideo.play().catch((err) => {
      if (err.name !== "AbortError") {
        console.error("Video play error", err);
      }
    });

    return () => {
      currentVideo.pause(); //pauses when leaving
      currentVideo.removeEventListener("loadedmetadata", handleLoadedMetadata);
      currentVideo.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [activeIndex]);

  const formatTime = (time) => {
    if (!time || isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };
  return (
    <div className="min-h-screen min-w-screen bg-black p-5">
      {/* Header */}
      <div className="flex min-w-[90.8vw] justify-between items-center fixed z-50">
        <div>
          <img src={liveIcon} alt="tiktok live icon" width={35} />
        </div>
        <ul className="inline-flex text-[#B8B9BD] gap-4 font-bold pt-5">
          <li>STEM</li>
          <li>Explore</li>
          <li>Following</li>
          <li className="active">For You</li>
        </ul>
        <div>
          <img src={searchIcon} alt="tiktok search icon" width={30} />
        </div>
      </div>

      {/* Main Screen Section */}
      <div className="fixed left-0 top-0 w-full max-h-[854px] overflow-y-scroll snap-y snap-mandatory mt-6">
        {videos.map((src, index) => (
          <div
            key={index}
            className="snap-start h-full w-full flex justify-center items-center"
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)} // use the main ref only for the first one
              src={src}
              loop
              muted
              className="h-full w-auto object-cover"
            />
          </div>
        ))}
      </div>

      {/* User Interaction Section */}
      <div className="flex flex-col items-center w-fit gap-5 mt-20 fixed right-0 mr-4 bottom-0 mb-52">
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

      {/* Caption and User buttons */}
      <div className="fixed bottom-0 mb-3 min-w-[90.8vw]">
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
                  My name is Munachi Onyebuchi, I'm a frontend web developer
                  with more...more years of experience in react js and
                  tailwindCSS
                </p>
              </div>
            </div>

            <div className="size-14 rounded-full background"></div>
          </div>
        </div>
        <div className="flex flex-col relative group">
          <p className="text-xl hidden group-active:block text-white font-semibold z-50 absolute text-center w-full bottom-30 whitespace-nowrap">
            {formatTime(currentTime)} <span className="text-sm"> / </span>
            <span className="text-[#ffffff77]">{formatTime(duration)}</span>
          </p>
          <div className="mt-2">
            <input
              type="range"
              name="range"
              id="range"
              min={0}
              max={100}
              value={isNaN(range) ? 0 : range}
              onChange={(e) => {
                const newRange = e.target.value;
                setRange(newRange);
                const currentVideo = videoRefs.current[activeIndex];
                if (currentVideo && duration > 0) {
                  currentVideo.currentTime = (newRange / 100) * duration;
                }
              }}
              style={{
                background: `linear-gradient(to right, #ffffffc4 ${range}%, #eeeeee65 ${range}%)`,
              }}
              className="slider"
            />
          </div>
          <div className="flex justify-between items-center text-white">
            <div className="flex items-center flex-col">
              <img
                src={homeIcon}
                alt="tiktok home icon"
                width={28}
                className="w-10"
              />
              <span>Home</span>
            </div>
            <div className="flex items-center flex-col">
              <div className="size-10 rounded-full background"></div>
              <span>Friends</span>
            </div>
            <img src={createIcon} alt="tiktok create icon" width={70} />
            <div className="flex items-center flex-col">
              <img src={messageIcon} alt="tiktok messages icon" width={28} />
              <span>Inbox</span>
            </div>
            <div className="flex items-center flex-col">
              <img src={profileIcon} alt="tiktok profile icon" width={28} />
              <span>Profile</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
