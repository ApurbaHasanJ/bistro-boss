
import { Parallax } from 'react-parallax';

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
        <header
        className="hero "
      >
        <div className="bg-black bg-opacity-60 my-40 text-center text-neutral-content py-32 w-2/3">
          <h1 className="mb-5 lg:text-[45px] text-2xl  font-serif font-semibold ">
            {title}
          </h1>
          <p className="font-medium text-base ">{description}</p>
        </div>
      </header>
    </Parallax>
      
      
    </>
    );
};

export default MenuBanner;