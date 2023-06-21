import React from "react";

const Offer = () => {
  return (
    <div className="mx-16 flex gap-4">
      <div className="bg-offer1 bg-cover w-1/2 h-52">
        <div className="bg-white bg-opacity-50 w-1/2 h-2/3 px-4 py-2 ">
          <div className="bg-primary rounded-2xl w-min text-xs whitespace-nowrap text-white px-3 py-1 font-semibold">HOT PRODUCT</div>
          <div className="py-2 text-2xl">
            <div>MIN 20% OFF FRESH VEGETABLES</div>
          </div>
        </div>
      </div>
      <div className="bg-offer1 bg-cover w-1/2 h-52">
        <div className="bg-white bg-opacity-50 w-1/2 h-2/3 px-4 py-2 ">
          <div className="bg-primary rounded-2xl w-min text-xs whitespace-nowrap text-white px-3 py-1 font-semibold">HOT PRODUCT</div>
          <div className="py-2 text-2xl">
            <div>MIN 20% OFF FRESH VEGETABLES</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
