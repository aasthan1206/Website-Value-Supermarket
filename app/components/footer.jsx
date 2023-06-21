import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaGooglePlusSquare,
  FaPinterestSquare,
} from "react-icons/fa";

const Footer = () => {
  const footerData = [
    {
      id: 1,
      title: "BUSINESS INFORMATION",
      links: [
        {
          id: 101,
          link: "Corporate website",
        },
        {
          id: 102,
          link: "Download Company Brochure",
        },
        {
          id: 103,
          link: "Become a Supplier",
        },
        {
          id: 104,
          link: "Our Team",
        },
        {
          id: 105,
          link: "Work for us",
        },
      ],
    },
    {
      id: 2,
      title: "USEFUL INFORMATION",
      links: [
        {
          id: 201,
          link: "Delivery Information",
        },
        {
          id: 202,
          link: "Refund Policy",
        },
        {
          id: 203,
          link: "Terms of Use",
        },
        {
          id: 204,
          link: "Frequently asked questions",
        },
        {
          id: 205,
          link: "Track your Order",
        },
        {
          id: 206,
          link: "Download Company Brochure",
        },
      ],
    },
    {
      id: 3,
      title: "QUICK LINKS",
      links: [
        {
          id: 301,
          link: "About Us",
        },
        {
          id: 302,
          link: "Contact Us",
        },
        {
          id: 303,
          link: "Provacy Policy",
        },
        {
          id: 304,
          link: "Partner with us",
        },
        {
          id: 305,
          link: "Our Team",
        },
        {
          id: 306,
          link: "Site Map",
        },
      ],
    },
  ];

  const socialIcons = [
    {
      id: 1,
      icon: <FaFacebookSquare className="h-8 w-8" />,
      link: "#",
    },
    {
      id: 2,
      icon: <FaTwitterSquare className="h-8 w-8" />,
      link: "#",
    },
    {
      id: 3,
      icon: <FaLinkedin className="h-8 w-8" />,
      link: "#",
    },
    {
      id: 4,
      icon: <FaGooglePlusSquare className="h-8 w-8" />,
      link: "#",
    },
    {
      id: 5,
      icon: <FaPinterestSquare className="h-8 w-8" />,
      link: "#",
    },
  ];

  return (
    <div className="bg-[#f3f3f3] px-16 py-3">
      <div className="flex justify-between">
        {/* Newsletter Sign Up */}
        <div className="w-1/4">
          <div className="">
            <div className="">NEWSLETTER SIGNUP</div>
            <div className="border-t-2 border-gray-400 w-12 pb-2"></div>
          </div>
          <div className="text-xs pb-2">
            Be the first to know about sales and special promotions, tips,
            trends and more.
          </div>
          <div className="pb-2">
            <input
              type="text"
              placeholder="Enter your email..."
              className="outline-[1px] outline-primary border-[1px] border-primary p-2"
            />
          </div>
          <div>
            <button className="bg-primary px-6 py-2 text-white">
              SUBSCRIBE
            </button>
          </div>
        </div>

        {footerData.map((item) => (
          <div key={item.id} className="w-1/4">
            <div className="">{item.title}</div>
            <div className="border-t-2 border-gray-400 w-12 pb-2"></div>
            <div>
              {item.links.map((data) => (
                <div key={data.id} className="text-xs py-1">
                  - {data.link}
                </div>
              ))}
            </div>
          </div>
        ))}
        <div></div>
      </div>
      <div className="flex gap-2 pt-2">
        {socialIcons.map((item) => (
          <div key={item.id} className="">
            {item.icon}
          </div>
        ))}
      </div>
      <div className="pt-3 text-xs">&#169; Copyright 2018 Value Supermarket Limited - All rights reserved</div>
    </div>
  ); 
};

export default Footer;
