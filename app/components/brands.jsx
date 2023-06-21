import React from 'react'
import brand from "../../public/images/brand.jpg"
import Image from 'next/image'

const Brands = () => {
    const brandData = [
        {
            id: 1,
            logo: brand,
        },
        {
            id: 2,
            logo: brand,
        },
        {
            id: 3,
            logo: brand,
        },
        {
            id: 4,
            logo: brand,
        },
        {
            id: 5,
            logo: brand,
        },
    ]
  return (
    <div className='mx-16 mb-4'>
        <div className='text-lg mb-2'>Popular Brands</div>
        <div className='flex gap-6'>
            {brandData.map((item) => (
                <div key={item.id} className='border-2 border-gray-200'>
                    <Image src={item.logo} alt="brand logo" />
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default Brands
