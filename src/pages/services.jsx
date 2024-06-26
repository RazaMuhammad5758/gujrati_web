import FeatureSection from "../components/featureSection";
import { features } from "../constants";
import React from 'react'

const Services = () => {
  
    return (
        <div className='relative mt-20 border-b border-neutral-800 min-h-[800px] px-14 py-10'>
          <div className='text-center'>
            <span className='bg-neutral-900 text-pink-500 rounded-full h-6 text-sm font-medium px-2 py-3 uppercase'>Services</span>
          <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking wide'> <span className='bg-gradient-to-r from-blue-500 to-green-800 text-transparent bg-clip-text'> You can easily avail  these through your Community card </span></h2>
          </div>
          <div className='flex flex-wrap mt-10 lg:mt-20'>
            {features.map((feature,index)=>(<div key={index} className='w-full sm:1/2 lg:w-1/3'>
              <div className='flex'>
                <div className='flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-teal-700 justify-center items-center rounded-full'>{feature.icon}
                </div>
                <div >
                  <h5 className='mt-1 mb-6 text-xl' >{feature.text}</h5>
                  <p className='text-md p-2 mb-20'>{feature.description}</p>
                </div>
            </div>
            </div>
            ))}
          </div>
        </div>
      )

}

export default Services