import { Parallax } from 'react-parallax';

const PageBanner = ({ img, title, description }) => {
  return (
    <>
    <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="banner"
        strength={-200}
        // bgImageStyle={{ }}
    >
        <header
        className="hero min-h-screen"
      >
        <div className="bg-black bg-opacity-60 text-center text-neutral-content py-32 w-2/3">
          <h1 className="mb-5 lg:text-8xl text-5xl  font-serif font-bold ">
            {title}
          </h1>
          <p className="font-medium text-[24px] font-serif">{description}</p>
        </div>
      </header>
    </Parallax>
      
      
    </>
  );
};

export default PageBanner;
