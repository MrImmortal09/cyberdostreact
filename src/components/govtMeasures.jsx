import React from "react";
import govtCard from "./govtCard";

function govtMeasures() {
    return (
        <div className="w-full h-auto bg-slate-800 p-12 md:24 flex flex-col flex-wrap gap-24">
            <div className="flex justify-center items-center">
                <p className="font-bold font-sarif text-[#BD9F67] pt-12 text-5xl md:text-7xl lg:text-8xl">Government Measures</p>
            </div>
            <div className="flex flex-col flex-wrap gap-12">
                <div className="flex justify-center">
                    <p className="font-semibold text-white font-sarif text-4xl md:text-6xl lg:text-7xl ">Team Leader</p>
                </div>
                <div className="flex flex-wrap gap-9 p-4 md:p-8 lg:p-12 justify-around">
                    <MemberCard add="/maneesh.jpeg" username="Maneesh Shukla"/>
                   
                </div>
            </div>
            <div className="flex flex-col flex-wrap gap-12">
                <div className="flex justify-center">
                    <p className="font-semibold  font-sarif text-4xl md:text-6xl lg:text-7xl text-white">Members</p>
                </div>
                <div className="flex flex-wrap gap-9 p-4 md:p-8 lg:p-12 justify-around">
                    <MemberCard add="/ayush.jpeg" username="Ayush Yadav"/>
                    <MemberCard add="/reddy.jpeg" username="Pranav Reddy Katreddy" />
                    <MemberCard add="" username="Lakshya Agarwal" />
                </div>
            </div>

        </div>
    )
}

export default govtMeasures