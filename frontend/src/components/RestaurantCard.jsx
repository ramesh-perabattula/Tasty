import React from 'react'

const RestaurantCard = (props) => {

    const {name,avgRating,cuisines,cloudinaryImageId,locality}=props.resData.info;
    console.log(props.resData);
    //console.log(name,avgRating,cuisines,cloudinaryImageId,locality);
    
    const ratingColor = avgRating >= 4.0 ? 'text-green-600' : avgRating >= 3.0 ? 'text-yellow-600' : 'text-red-600';
    
  return (
    <div className='w-72 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:-translate-y-2 transition-transform'>
        <div className='relative'>
            <img 
                className='w-full h-48 object-cover' 
                src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/'+cloudinaryImageId}
                alt={name}
            />
            <div className='absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded-md flex items-center gap-1'>
                <span className='text-yellow-400'>⭐</span>
                <span className='font-bold'>{avgRating}</span>
            </div>
        </div>
        <div className='p-4'>
            <h3 className='text-lg font-bold text-gray-800 truncate mb-1'>{name}</h3>
            <p className='text-sm text-gray-600 truncate mb-2'>{cuisines?.join(', ')}</p>
            <p className='text-sm text-gray-500 truncate mb-3'>{locality}</p>
            <div className='flex items-center justify-between'>
                <div className={`flex items-center gap-1 font-semibold ${ratingColor}`}>
                    <span>⭐</span>
                    <span>{avgRating} • </span>
                    <span className='text-gray-600 font-normal'>Rating</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RestaurantCard