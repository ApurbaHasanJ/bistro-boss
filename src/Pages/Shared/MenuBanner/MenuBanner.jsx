import { Parallax } from "react-parallax";

const MenuBanner = ({ img, title, description }) => {
  return (
    <>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="banner"
        strength={-200}
        // bgImageStyle={{ height: "100%", width: "100%"}}
      >
        <header className="hero ">
          <div className="bg-black bg-opacity-60 md:my-40 my-16 mx-5 text-center text-neutral-content md:py-32 py-5 md:w-2/3">
            <h1 className="mb-5 lg:text-[45px] md:text-5xl uppercase  font-serif font-semibold ">
              {title}
            </h1>
            <p className="font-medium md:text-2xl text-xs font-serif">
              {description}
            </p>
          </div>
        </header>
      </Parallax>
    </>
  );
};

export default MenuBanner;
