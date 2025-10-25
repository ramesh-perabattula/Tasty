import React from 'react'

const RestaurantCard = (props) => {

    const {name,avgRating,cuisines,cloudinaryImageId,locality}=props.resData.info;
    console.log(props.resData);
    //console.log(name,avgRating,cuisines,cloudinaryImageId,locality);
  return (
    <div className='border-2 w-50 h-70 m-2'>
        <div>
            <h1>
                <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/'+cloudinaryImageId}></img>
            </h1>
        </div>
        <div>
            <h3>{name}</h3>
            <h3>{cuisines}</h3>
            <h3>{avgRating}</h3>
            <h3>{locality}</h3>
            <h3>star rating </h3>
        </div>
    </div>
  )
}

export default RestaurantCard