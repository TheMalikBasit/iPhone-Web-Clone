import { hightlightsSlides } from "../Constants/index";

const VideoCarousel = () => {
  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((item) => (
          <div key={item.id} id="slider" className="!pr-10 !sm:pr-20">
            <div className="video-carousel_container">
              <div className="w-full overflow-hidden rounded-3xl h-full flex-center bg-black">
                <video
                  className="pointer-events-none"
                  id="video"
                  preload="auto"
                  autoPlay
                  muted
                  playsInline
                  key={item.id}
                >
                  <source src={item.video} type="video/mp4"/>
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
    </>
  );
};

export default VideoCarousel;
