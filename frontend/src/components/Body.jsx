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
    <div className='bg-gray-50 min-h-screen'>
        <div className='py-6 flex gap-4 mx-8 justify-center items-center'>
            <input 
                className='border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent w-96 shadow-sm hover:border-orange-300 transition-colors' 
                type='text' 
                placeholder='Search for restaurants...'
                value={searchName} 
                onChange={(e)=>setSearchName(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && searchRestaurants()}
            />
            <button 
                className='bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105'
                onClick={searchRestaurants}
            >
                Search
            </button>
            <button 
                className='bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105'
                onClick={FilterRestaurants}
            >
                ⭐ Top Rated
            </button>
        </div>
        <div className='flex flex-wrap justify-center gap-6 px-8 py-4'>
             {filterRes.map((restaurant) => (
          <Link  key={restaurant.info.id}  to={"/restaurant-list/"+restaurant.info.id}>
            <RestaurantCard resData={restaurant}/>
          </Link> 
        ))}
         </div>
    </div>
  )
}

export default Body