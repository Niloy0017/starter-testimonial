import React from "react";
import {FaQuoteLeft,FaQuoteRight} from'react-icons/fa';

function Card(props){
    let review=props.review;
    return(
        <div className="md:relative">

            <div className="absolute top-[-7rem] z-0">
                <img src={review.image} className="aspect-square rounded-full w-[140px] h-[140px] z-10 "></img>
                <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] -z-10 left-[10px]"></div>
            </div>

            <div className="flex flex-col justify-center items-center">
            <div className="mt-7">
                <p className="font-bold text-2xl capitalize text-center tracking-wider">{review.name}</p>
                <p className="text-violet-300 uppercase text-sm text-center">{review.job}</p>
            </div>
            <div className="text-violet-400 mt-5">
                <FaQuoteLeft></FaQuoteLeft>
            </div>
            <div className="text-slate-500 mt-4"> 
                <p>{review.text}</p>
            </div>
            <div className="text-violet-400 mt-5">
                <FaQuoteRight></FaQuoteRight>
            </div>
            </div>

        </div>
    )
}

export default Card;