import Image from "next/image";
import React from "react";
import arrowDown from "../../public/images/arrowDown.png";
import search from "../../public/images/search.png";
import cart from "../../public/images/cart.png";
import menu from "../../public/images/menu.png";
import logo from "../../public/images/logo.png";

const Header = () => {
  const navbarItems = [
    {
      id: 1,
      title: "Green Box",
    },
    {
      id: 2,
      title: "Daily Essentials",
    },
    {
      id: 3,
      title: "Offers",
    },
    {
      id: 4,
      title: "Festival Special",
    },
    {
      id: 5,
      title: "Recipe",
    },
    {
      id: 6,
      title: "Quick Buy",
    },
  ];
  return (
    <div className="">
      <div className="px-16 flex justify-between py-2 border-b-2 border-b-gray-200 text-sm">
        <div className="flex gap-4 self-center">
          CONTACT & SUPPORT: <span className="font-semibold">02084329689</span>
        </div>
        <div className="flex gap-4 text-sm">
          <div className="flex self-center">
            <span className="self-center">Site Selector</span>
            <Image className="" src={arrowDown} alt="arrow" />
          </div>
          <div className="self-center">Business Customer</div>
        </div>
      </div>

      {/* LOGO SECTION */}
      <div className="px-16 py-2 flex justify-between">
        {/* LOGO */}
        <div className="w-1/3">
          {/* <div className="text-primary text-3xl">
            <span className="font-semibold">Value</span>{" "}
            <span>Supermarket</span>
          </div>
          <div className="text-sm ml-28">Delivering Convenience</div> */}
          <Image src={logo} alt="logo"/>
        </div>
        {/* search bar */}
        <div className="self-center border-[1px] border-black flex justify-between p-2 w-96">
          <input
            type="text"
            placeholder="Search entire store here..."
            className="border-none outline-none text-sm w-96"
          />
          <Image src={search} className="self-center" height={18} width={18} alt="search" />
        </div>
        {/* cart */}
        <div className="flex gap-6 self-center">
          <div className="text-sm self-center">Login | My Account</div>
          <div className="flex gap-2">
            <div className="rounded-full bg-secondary p-1.5">
              <Image src={cart} alt="cart"/>
            </div>
            <div className="text-xs">
              <div>MY CART</div>
              <div className="text-center">$00.00</div>
            </div>
          </div>
        </div>
      </div>
      {/* NAVBAR */}
      <div className="bg-primary px-16 flex gap-12 text-sm">
        <div className="bg-secondary flex gap-2 pl-4 py-2 pr-1 font-semibold">
          GROCERY <Image src={menu} alt="menu" />
        </div>
        {navbarItems.map((item) => (
            <div key={item.id} className="text-white self-center">{item.title}</div>
        ))}
      </div>
    </div>
  );
};

export default Header;
