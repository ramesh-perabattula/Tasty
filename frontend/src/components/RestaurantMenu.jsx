import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const RestaurantMenu = () => {
    const [resData,setResData]=useState();
    const {resId}=useParams();
     console.log(resId);
    // const fetchData=async()=>{
    //     const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.5798313&lng=81.9977665&restaurantId=787172&catalog_qa=undefined&submitAction=ENTER");
    //     console.log(data)
    //     const dataJson=await data.json();
    //     setResData(dataJson);
    //     console.log(dataJson);
    // }

   // export const FOODFIRE_MENU_API_URL = `${process.env.REACT_FOODFIRE_APP_BASE_URL}menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&submitAction=ENTER&restaurantId=`;

    
    const fetchData=async()=>{
        const res = await fetch("https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&submitAction=ENTER&restaurantId=74644");
        const data = await res.json();
        console.log(data);
    }
    useEffect(()=>{
        fetchData();
    },[]);

  return (

    <div>
{/* 
        <div>
            <h1>{resData.name}</h1>
        </div> */}

       <div>
        {/* {
            resData.map((list)=><li>{list.name}-{list.price}</li>)
        } */}
        </div>
    </div>
  )
}

export default RestaurantMenu;