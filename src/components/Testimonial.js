import React from "react";
import Card from './Card';
import { useState } from "react";
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi';

function Testimonial(props) {
    let reviews = props.reviews;
    const [index, setindex] = useState(1);

    function leftClick(){
        if (index-1<0){
            setindex(reviews.length-1);
        }
        else{
            setindex(index-1);
        }
    }
    function rightClick(){
        if (index+1>=reviews.length){
            setindex(0);
        }
        else{
            setindex(index+1);
        }
    }
    function surpriseClick(){
        let randomvalue=Math.floor(Math.random()*reviews.length);
        setindex(randomvalue);
    }

    return (
        <div className="w-[85w] md:w-[700px] bg-white mt-10 p-10 hover:shadow-xl rounded-md">
            <Card review={reviews[index]}></Card>
            <div className="font-bold text-violet-400 text-3xl mt-7 gap-3 flex justify-center items-center">

                {/* left button */}
                <button onClick={leftClick} className="cursor-pointer
                 hover:text-violet-500"><FiChevronLeft></FiChevronLeft></button>

                 {/* right button */}
                <button onClick={rightClick} className="cursor-pointer
                 hover:text-violet-500"><FiChevronRight></FiChevronRight></button>

            </div>
            <div className="flex flex-col justify-center items-center mt-6">
                {/* surprise button */}
                <button onClick={surpriseClick} className="bg-violet-400 hover:bg-violet-500 transition-all 
                duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg">Surprise Me</button>
            </div>
        </div>
    )
}

export default Testimonial;