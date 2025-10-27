import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import { Link } from 'react-router-dom';

const Body = () => {

    const [listOfResturants,setListOfResturants]=useState([]);
    const [filterRes,setFilterRes]=useState([]);
    const [searchName,setSearchName]=useState("");

    const fecthData=async()=>{
        const data=await fetch("https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.5798313&lng=81.9977665&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const dataJson=await data.json();
        setListOfResturants(dataJson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants);
        console.log(dataJson);
        setFilterRes(dataJson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(dataJson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const FilterRestaurants=()=>{
        const filterRes=listOfResturants.filter((res)=>res.info.avgRating > 2); 
        console.log(filterRes); //setListOfResturants(filterRes);
        setListOfResturants(filterRes);
    };

    const searchRestaurants=()=>{
        const res=listOfResturants.filter((res)=>res.info.name.toLowerCase().includes(searchName.toLowerCase()));
        setFilterRes(res);
    }

    useEffect(()=>{
        fecthData();
    },[]);
    
  return (
    <div className='bg-gray-50 min-h-screen pb-8'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            {/* Search Bar Section */}
            <div className='flex flex-col sm:flex-row gap-4 py-6 items-center justify-center'>
                <input 
                    className='border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent w-full sm:w-80 md:w-96 shadow-sm hover:border-orange-300 transition-colors' 
                    type='text' 
                    placeholder='Search for restaurants...'
                    value={searchName} 
                    onChange={(e)=>setSearchName(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && searchRestaurants()}
                />
                <button 
                    className='bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 w-full sm:w-auto'
                    onClick={searchRestaurants}
                >
                    Search
                </button>
                <button 
                    className='bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 w-full sm:w-auto'
                    onClick={FilterRestaurants}
                >
                    ⭐ Top Rated
                </button>
            </div>

            {/* Restaurant Cards Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center'>
                {filterRes.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurant-list/"+restaurant.info.id} className='w-full max-w-xs'>
                        <RestaurantCard resData={restaurant}/>
                    </Link> 
                ))}
            </div>
        </div>
    </div>
  )
}

export default Body