import React from 'react'
import tomato from "../../public/images/tomato.png"
import Image from 'next/image'

const Category = () => {
    const categoryData = [
        {
            id: 1,
            img: tomato,
            title: "Fresh Vegetable",
        },
        {
            id: 2,
            img: tomato,
            title: "Fresh Vegetable",
        },
        {
            id: 3,
            img: tomato,
            title: "Fresh Vegetable",
        },
        {
            id: 4,
            img: tomato,
            title: "Fresh Vegetable",
        },
        {
            id: 5,
            img: tomato,
            title: "Fresh Vegetable",
        },
        {
            id: 6,
            img: tomato,
            title: "Fresh Vegetable",
        },
        {
            id: 7,
            img: tomato,
            title: "Fresh Vegetable",
        },
        {
            id: 8,
            img: tomato,
            title: "Fresh Vegetable",
        },
    ]
  return (
    <div className='mx-16 mt-4'>
        <div className='flex justify-between text-xl'>
            <div>Browse by Category</div>
            <div>
                <button className='bg-primary text-white px-4 py-2 text-sm font-semibold'>VIEW ALL</button>
            </div>
        </div>
        <div className='grid grid-cols-4 gap-6 text-center mt-2'>
            {categoryData.map((item) => (
                <div key={item.id} className='border-2 border-gray-200 py-4 px-16'>
                    <Image src={item.img} alt="item image" />
                    <div className='pt-2'>{item.title}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Category
