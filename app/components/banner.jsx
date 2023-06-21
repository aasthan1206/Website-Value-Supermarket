import React from "react";
import banner1 from "../../public/images/banner1.jpg";
import banner2 from "../../public/images/banner2.jpg";
import banner3 from "../../public/images/banner3.jpg";
import banner5 from "../../public/images/banner5.jpg";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="mx-16 mt-4 flex gap-4">
      <div className="w-[50%] relative">
        <Image src={banner5} alt="banner" />
        <div className="absolute bottom-0 bg-white bg-opacity-70 w-full text-center text-lg font-semibold py-2">
          Raksha Bandhan
        </div>
      </div>
      <div className="w-[50%] flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="relative">
            <Image src={banner1} alt="banner" />
            <div className="absolute bottom-0 bg-white bg-opacity-70 w-full text-center text-lg font-semibold py-2">
              Chicken Tikka Masala
            </div>
          </div>
          <div className="relative">
            <Image src={banner2} alt="banner" />
            <div className="absolute bottom-0 bg-white bg-opacity-70 w-full text-center text-lg font-semibold py-2">
              Lamb Rogan Josh
            </div>
          </div>
        </div>
        <div className="relative">
          <Image src={banner3} alt="banner" />
          <div className="absolute bottom-0 bg-white bg-opacity-70 w-full text-center text-lg font-semibold py-2">
            Veg Biryani
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
