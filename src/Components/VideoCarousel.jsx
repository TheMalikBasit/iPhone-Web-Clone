import { useEffect } from "react";
import { hightlightsSlides } from "../Constants/index";
import { useRef, useState } from "react";
import { pauseImg, playImg, replayImg,  } from "../utils";

const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [Video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoID: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const [loadedData, setloadedData] = useState([]);

  // useEffect(() => {
  //   if (loadedData.length > 3) {
  //     if (!isPlaying) {
  //       videoRef.current[videoID].pause();
  //     } else {
  //       startPlay && videoRef.current[videoID].play();
  //     }
  //   }
  // }, [isPlaying, startPlay, videoID, loadedData]);

  const { isEnd, startPlay, videoID, isLastVideo, isPlaying } = Video;

  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((item, i) => (
          <div key={item.id} id="slider" className="pr-10 sm:pr-20">
            <div className="video-carousel_container">
              <div className="w-full overflow-hidden rounded-3xl h-full flex-center bg-black">
                <video
                  className="pointer-events-none"
                  id="video"
                  preload="auto"
                  muted
                  playsInline
                  autoPlay
                  ref={(element) => (videoRef.current[i] = element)}
                  onPlay={() => {
                    setVideo((prevVideo) => ({
                      ...prevVideo,
                      isPlaying: true,
                    }));
                  }}
                >
                  <source src={item.video} type="video/mp4" />
                </video>
              </div>
              <div className="absolute top-12 left-[5%] z-10">
                {item.textLists.map((text) => (
                  <p className="md:text-2xl text-xl font-medium" key={text}>
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative flex-center mt-10">
        <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
          {videoRef.current.map((_, i) => (
            <span
              key={i}
              className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer"
              ref={(el) => (videoDivRef.current[i] = el)}
            >
              <span
                className="absolute h-full w-full rounded-full"
                ref={(el) => (videoSpanRef.current[i] = el)}
              />
            </span>
          ))}
        </div>
        <button className="control-btn">
          <img src={isLastVideo ? replayImg : 
            isPlaying ? pauseImg : playImg} 
            alt={isLastVideo ? "Replay" : isPlaying ? "Pause" : "Play"} />
        </button>
        </div>
    </>
  );
};

export default VideoCarousel;
