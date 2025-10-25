import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'

const Body = () => {

    const [listOfResturants,setListOfResturants]=useState([]);
    const [filterRes,setFilterRes]=useState([]);
    const [searchName,setSearchName]=useState("");

    const fecthData=async()=>{
        const data=await fetch("https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.5798313&lng=81.9977665&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const dataJson=await data.json();
        setListOfResturants(dataJson?.data.cards[2].card.card.gridElements.infoWithStyle?.restaurants);
        //console.log(dataJson);
        setFilterRes(dataJson?.data.cards[2].card.card.gridElements.infoWithStyle?.restaurants);
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
    <div>
        <div className='py-2 flex mx-2'>
            <input className='border-1 mx-2 p-2' type='text' placeholder='type your restuarent name'
            value={searchName} onChange={(e)=>setSearchName(e.target.value)}></input>
            <button className='border-1 mx-2 p-2'
            onClick={searchRestaurants}>Search</button>
            <button className='border-1 mx-2 px-2'onClick={FilterRestaurants}>Top Rated</button>
        </div>
        <div className='flex flex-wrap'>
             {filterRes.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            resData={restaurant}
          />
        ))}
         </div>
    </div>
  )
}

export default Body