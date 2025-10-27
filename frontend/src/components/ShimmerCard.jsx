import React from 'react'

const ShimmerCard = () => {
  return (
    <div className='w-72 bg-white rounded-lg shadow-md overflow-hidden animate-pulse'>
      {/* Image shimmer */}
      <div className='w-full h-48 bg-gray-300 relative'>
        <div className='absolute top-2 right-2 bg-gray-300 w-12 h-6 rounded-md'></div>
      </div>
      
      {/* Content shimmer */}
      <div className='p-4'>
        {/* Restaurant name shimmer */}
        <div className='h-6 bg-gray-300 rounded mb-2'></div>
        
        {/* Cuisines shimmer */}
        <div className='h-4 bg-gray-300 rounded mb-2 w-3/4'></div>
        
        {/* Location shimmer */}
        <div className='h-4 bg-gray-300 rounded mb-3 w-1/2'></div>
        
        {/* Rating shimmer */}
        <div className='flex items-center justify-between'>
          <div className='h-4 bg-gray-300 rounded w-20'></div>
        </div>
      </div>
      
      {/* Shimmer animation overlay */}
      <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 shimmer-animation'></div>
    </div>
  )
}

export default ShimmerCard
