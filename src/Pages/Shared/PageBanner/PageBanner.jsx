import { Parallax } from "react-parallax";

const PageBanner = ({ img, title, description }) => {
  return (
    <>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="banner"
        strength={-200}
        className="lg:h-screen"
      >
        <header className="hero md:min-h-screen pt-24 h-[280px] md:p-0 px-16">
          <div className="bg-black bg-opacity-60 text-center text-neutral-content md:py-32 py-5 md:w-2/3 w-full ">
            <h1 className="mb-5 lg:text-8xl md:text-5xl  font-serif font-bold ">
              {title}
            </h1>
            <p className="font-medium md:text-[24px] text-xs font-serif">{description}</p>
          </div>
        </header>
      </Parallax>
    </>
  );
};

export default PageBanner;
