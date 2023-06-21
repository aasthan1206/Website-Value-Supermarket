import React from "react";
import hero from "../../public/images/hero.png";
import Image from "next/image";
import {
  FaApple,
  FaThumbsUp,
  FaDollarSign,
  FaCheck,
  FaCcMastercard,
  FaPiggyBank,
} from "react-icons/fa";
import { MdOutlineLocalShipping } from "react-icons/md";

const Hero = () => {
  const heroData = [
    {
      id: 1,
      icon: <FaApple className="text-primary h-8 w-8" />,
      desc1: "Healthy",
      desc2: "Foods",
    },
    {
      id: 2,
      icon: <FaThumbsUp className="text-primary h-8 w-8" />,
      desc1: "High",
      desc2: "Quality",
    },
    {
      id: 3,
      icon: <FaDollarSign className="text-primary h-8 w-8" />,
      desc1: "Best",
      desc2: "Prices",
    },
  ];
  const featuresData = [
    {
      id: 1,
      icon: <MdOutlineLocalShipping className="text-primary h-10 w-10" />,
      title: "Free Shipping",
      desc: "On order above $45",
    },
    {
      id: 2,
      icon: <FaCcMastercard className="text-primary h-10 w-10" />,
      title: "Totally Safe Transaction",
      desc: "On order above $45",
    },
    {
      id: 3,
      icon: <FaCheck className="text-primary h-10 w-10" />,
      title: "Next Day Delivery",
      desc: "In most parts of Greater London",
    },
    {
      id: 4,
      icon: <FaPiggyBank className="text-primary h-10 w-10" />,
      title: "Competitive Prices",
      desc: "Buy online & save from retail",
    },
  ];
  return (
    <div>
      <div className="flex bg-yellow-50 h-96">
        <div className="w-1/2 self-end">
          <Image src={hero} alt="hero"/>
        </div>
        <div className="bg-yellow-50 w-1/2 flex flex-col justify-center">
          <div className="self-center text-3xl font-semibold">
            Fresh & Healthy Grocery
          </div>
          <div className="self-center text-center px-16 py-4">
            Value supermarket is an Online Grocery Deliver Supermarket. We sell
            Indian, Pakistani, Bangladeshi, Sri Lankan & Nepali grocery.
          </div>
          <div className="self-center text-center flex gap-8 py-4">
            {heroData.map((item) => (
              <div key={item.id} className="flex gap-2">
                <div className="rounded-full border-2 border-primary p-2">
                  {item.icon}
                </div>
                <div className="font-semibold text-left">
                  <div>{item.desc1}</div>
                  <div className="text-lg">{item.desc2}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-16 flex justify-between my-4">
        {featuresData.map((item) => (
            <div key={item.id} className="flex gap-2 self-center">
                <div className="rounded-full border-[1px] border-primary p-2 self-center">
                    {item.icon}
                </div>
                <div className="self-center">
                    <div className="font-semibold">{item.title}</div>
                    <div className="text-sm">{item.desc}</div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
