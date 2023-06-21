import React from "react";
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai"
import product2 from "../../public/images/product2.png"
import Image from "next/image";

const Products = () => {
    const productData = [
        {
            id: 1,
            img: product2,
            name: "Spinach Fresh 500g",
            price: "£2.49",
        },
        {
            id: 2,
            img: product2,
            name: "Spinach Fresh 500g",
            price: "£2.49",
        },
        {
            id: 3,
            img: product2,
            name: "Spinach Fresh 500g",
            price: "£2.49",
        },
        {
            id: 4,
            img: product2,
            name: "Spinach Fresh 500g",
            price: "£2.49",
        },
        {
            id: 5,
            img: product2,
            name: "Spinach Fresh 500g",
            price: "£2.49",
        },
    ]
  return (
    <div className="mx-16 mt-4">
      <div className="flex justify-between text-xl">
        <div>Popular Products</div>
        <div className="flex gap-1">
          <button className="bg-primary text-white font-bold p-2">
            <AiOutlineLeft />
          </button>
          <button className="bg-primary text-white font-bold p-2">
            <AiOutlineRight />
          </button>
        </div>
      </div>
      <div className="mt-2 grid grid-cols-5 gap-4">
        {productData.map((item) => (
            <div key={item.id}>
                <div className="border-2 border-gray-200 p-6">
                    <Image src={item.img} alt="item image"/>
                </div>
                <div>
                    <div className="pt-2 pb-1 text-sm">{item.name}</div>
                    <div className="font-semibold text-lg">{item.price}</div> 
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
