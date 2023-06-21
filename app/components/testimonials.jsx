import React from 'react'
import {AiFillStar} from "react-icons/ai"

const Testimonials = () => {
    const testimonialData = [
        {
            id: 1,
            line1: "Zooker customer care number",
            line2: "+91 -8521613057 -07563096483",
            line3: "7260636276-8757190603",
            name: "Rusam Kumar",
        },
        {
            id: 2,
            line1: "Zooker customer care number",
            line2: "+91 -8521613057 -07563096483",
            line3: "7260636276-8757190603",
            name: "Rusam Kumar",
        },
        {
            id: 3,
            line1: "Zooker customer care number",
            line2: "+91 -8521613057 -07563096483",
            line3: "7260636276-8757190603",
            name: "Rusam Kumar",
        },
        {
            id: 4,
            line1: "Zooker customer care number",
            line2: "+91 -8521613057 -07563096483",
            line3: "7260636276-8757190603",
            name: "Rusam Kumar",
        },
    ]
  return (
    <div className='mx-16 mt-4'>
        <div className='text-lg'>Testimonials</div>
        <div className='my-2 flex gap-2 justify-between'>
            {testimonialData.map((item) => (
                <div key={item.id} className='border-gray-200 border-4 p-4 w-1/4'>
                    <div className='flex gap-1'>
                        <AiFillStar className='text-white p-1 h-6 w-6 bg-primary' />
                        <AiFillStar className='text-white p-1 h-6 w-6 bg-primary' />
                        <AiFillStar className='text-white p-1 h-6 w-6 bg-primary' />
                        <AiFillStar className='text-white p-1 h-6 w-6 bg-primary' />
                        <AiFillStar className='text-white p-1 h-6 w-6 bg-primary' />
                    </div>
                    <div className='text-sm pt-2'>{item.line1}</div>
                    <div className='text-sm'>{item.line2}</div>
                    <div className='text-sm'>{item.line3}</div>
                    <div className='text-sm font-semibold'>{item.name}</div>
                </div>
            ))}
        </div>
        <div className='border-b-[1px] border-black my-4'></div>
      
    </div>
  )
}

export default Testimonials
