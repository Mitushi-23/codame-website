import React from 'react'
import {PastEvents,UpcomingEvents} from "./data"

const Card = (props) => {
  const category = props.category;
  console.log(category);
  if(category== "PastEvents"){
  return (
    <>
    {PastEvents.map((data,key)=>{
      console.log(key);
      return(
      
          <div key={key}>
            <Events
            key={key}
            ImgUrl={data.ImgUrl}
            />
      </div>
      )})}
    </>
  )
}
return(
  <>
  {UpcomingEvents.map((data,key)=>{
    return(
      
          <div key={key}>
            <Events
            key={key}
            ImgUrl={data.ImgUrl}
            />
          </div>
        
    )
  })}
  </>
)
}

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../assets/events", false, /\.(png|jpe?g|svg)$/)
);


const Events=({ImgUrl})=>{
  const pic = JSON.stringify({ ImgUrl });
  const array = pic.split(":");
  const array1 = array[1].split("}");
  const answer = array1[0].replace(/["]+/g, "");

  if(!ImgUrl) return <div/>;
  return(
    <>
   
 <div className='card'>
  <div className="relative h-80 w-[28rem] -left-4 -top-4 bg-emerald-300 rounded-3xl -z-20 opacity-80 my-12">
  <img className='absolute h-80 w-[28rem] -right-4 -bottom-4 rounded-3xl' src={images[answer]} alt="" />
  </div> 
  </div>

      </>
  )
}


export default Card
