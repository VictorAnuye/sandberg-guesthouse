"use client"
import Image from "next/image";
import homepage from '../app/public/homepage.jpg'
// import navbar from "../app/components"
import Link from "next/link";
import SANDBERG_LOGO from "@/app/public/SANDBERG_LOGO-removebg-preview.png"
// import room from "@/app/public/room.jpg"
// import walkway from "@/app/public/walkway.jpg"
import outside from "@/app/public/outside.jpg"
// import corridor from "@/app/public/corridor.jpg"
import { MdHotel } from "react-icons/md";
import { GiMeal } from "react-icons/gi";
import { HiLightBulb } from "react-icons/hi";
import newroom from "@/app/public/newroom.jpg";
import bedview from "@/app/public/bedview.jpg";
import wardrobe from "@/app/public/wardrobe.jpg";
import bed from "@/app/public/bed.jpg"



export default function Home() {
  return (
    <>
    {/* <div className="md:h-48 sm:h-12" >
      <div className="sm:h-6 md:h-48">
        <Image
          src={homepage}
          alt="Full size image"
          layout="fill"
          objectFit="fill"
          height=""
          style={{ opacity: 0.5 }}
        /> 
      </div>
    </div> */}
    <div class=" bg-gray-800  bg-cover md:h-full bg-center h-full">
      <div className=  " sm:justify-center text-center pt-32 grid  md:px-6 lg:py-20 font-black md:text-6xl h-96 md:h-full ">
        <h1>GET THE <span className="text-orange-500">COMFORT</span> <br />YOU DESERVE <br /> WHETHER FOR <span className="text-orange-500">LUXARY</span><br />OR <span className="text-orange-500">TAMPORAL STAY</span></h1>
        <p className="text-center  ">
        <Link href="/cars" className="inline-block sm:inline w-auto h-auto   md:w-auto  px-6 py-4 rounded-xl
        bg-orange-400 font-bold md:text-2xl sm:text-sm hover:bg-gray-700 ring-4 ring-indigo-300  ">Make Reservation</Link>
        </p>
      </div> 
    </div>
    <div className=" text-center bg-red-300 h-48">
      <div className="text-center justify-center flex pt-2 bg-gray-100 ">
        <Image src={SANDBERG_LOGO} alt="brand logo"  width={200} height={54} />
      </div>
    </div>
    <div>
    <div className="bg-gray-100 flex text-center justify-center">
      <h1 className="text-gray-500 border-double border-4 border-orange-300 p-2 font-black shadow-inner">SANDBERG'S ROOMS & SUITES</h1>
      </div>
    </div>

    <div className=" md:flex justify-around md:pt-4 p-4 bg-gray-100"> 
      <div className=" shadow-2xl bg-white  md:w-1/4 w:full  rounded-sm  text-center">
        <div className=" justify-center text-center   bg-red-200 ">
          <Image src={outside} alt="outside" 
          />
        </div>
      </div>

      <div className="flex ">
        <p className="text-black md:text-xl text-center h-full pt-4 font-serif">
        Sanberg Hotel offers the perfect blend of luxury  <br />and convenience in a prime city location. <br />
          Guests enjoy elegantly designed rooms <br />with modern amenities, exceptional service, and stunning views. <br /> 
          The hotel features a rooftop bar, fine dining, <br /> and a world-class spa, providing an unforgettable experience. <br />   
          Whether for business or leisure, Sanberg Hotel <br /> ensures a relaxing and sophisticated stay,<br /> making it the ideal home away from home.
        </p>
      </div>
    </div>

    <div >
      <div className=" bg-gray-100">
        <h1 className="font-sans font-black md:pt-20 pt-6 text-yellow-800 flex justify-center text-3xl tracking-wide"> What we offer</h1>
        <p className="font-mono text-black flex justify-center pt-2">There are many variation of passages</p>
      </div>
    </div>

    <div className=" grid-cols-3 pt-4 flex justify-around md:h-30 bg-gray-100">
      <div className=" ">
        <MdHotel className=" text-yellow-800 md:h-28 h-12 w-28" />
      </div>
      <div className=" ">
        <GiMeal className="text-yellow-800 md:h-28 h-12 w-28 " />
      </div>
      <div className="">
        < HiLightBulb className="text-yellow-800 md:h-28 h-12 w-28" />
      </div>
    </div>
    <div className="grid-cols-3 flex justify-around h-30  bg-gray-100 gap-2">
      <div className="">
      <p className="flex text-center text-black ">we offer the most comfortable  rooms </p>
      </div>
      <div className="">
      <p className="flex text-center text-black ">get delicious meals at discount price </p>
      </div>
      <div className="">
      <p className="flex text-center  text-black ">24/7 Electricity </p>
      </div>
    </div>
    <div className=" md:flex flex  space-x-6 md:px-32 px-6 md:gap-12  text-center md:pt-6 pt-6 md:h-96 h-44 bg-gray-100 ">
      <div className="bg-white md:w-1/2 md:w-50 w-96 md:h-12 h-20 rounded-sm text-center shadow-2xl">
        <div className="md:w-full w-full md:h-12 h-full">
        <Image src={newroom} alt="newroom" />
        </div>
      </div>
      <div className="md:text-xl ">
        <h1 className="text-black font-serif md:text-3xl text-sm font-normal text-start">ROOM DETAILS</h1>
        <div className="bg-gray-100 md:flex flex md:justify-end  md:text-start text-start md:pt-6 ">
          <p className="md:text-black text-black md:text-xl text-sm md:leading-relaxed">
            Lorem ipsum dolor s <br /> Lorem ipsum dolor sit amet. <br />fjfjf <br />
          </p>
         
        </div>
        <div className="text-black bg-gray-100 font-serif md:text-3xl font-normal md:flex  text-start flex md:justify-start justify-start  pt-1">
          <p>Lorem uukfk</p>

        </div>
      </div>
    </div>

    <div className=" md:flex flex md:gap-1  space-x-4 md:px-32 md:pt-16  px-6 gap-2 md:h-96 h-sreen  bg-gray-100 ">
      <div className="flex gap-1 w-56 md:w-6/12 md:pt-2 md:flex md:gap-6 md:px-1 md:pt-36 md:h-96  ">
        <div className=" bg-red-300 md:h-32 h-12 md:w-48 w-48 shadow-2xl ">
          <Image src={bedview} alt="bedview" />
        </div>
        <div className=" bg-red-300 md:h-32 h-12 md:w-48 w-48 shadow-2xl ">
          <Image src={wardrobe} alt="wardrobe" />
        </div>
        <div className=" bg-red-300 md:h-32 h-12 md:w-48 w-48 shadow-2xl ">
          <Image src={bed} alt="bed" />
        </div>

      </div>
      <div className="bg-gray-100  h-36 ">
        <div className="grid-cols-2 md:px-12  md:gap-2 gap-2 grid  md:justify-center  md:w-auto md:grid-cols-4">
          <div className="md:bg-yellow-800 md:text-white h-auto text-green-800 text-xs md:text-lg md:h-8 h-4 md:p-1  md:text-center text-center md:grid grid md:border border md:rounded-xl border-yellow-800 rounded-sm md:font-serif font-serif ">
            <p>Ac</p>
          </div>
          <div className="md:bg-yellow-800 md:text-white text-green-800 text-xs md:text-lg md:h-8 h-4 md:p-1  md:text-center text-center md:grid grid md:border border md:rounded-xl rounded-sm  border-yellow-800 md:font-serif font-serif">
            <p>Lundary </p>
          </div>
          <div className="md:bg-yellow-800 md:text-white text-green-800 text-xs md:text-lg md:h-8 h-4 md:p-1  md:text-center text-center md:grid grid md:border border md:rounded-xl rounded-sm  border-yellow-800 md:font-serif font-serif">
            <p>Wi-Fi </p>
          </div>
          <div className="md:bg-yellow-800 md:text-white text-green-800 text-xs md:text-lg md:h-8 h-4 md:p-1  md:text-center text-center md:grid grid md:border border md:rounded-xl rounded-sm border-yellow-800 md:font-serif font-serif">
            <p>Heater </p>
          </div>
          <div className="md:bg-yellow-800 h-auto md:text-white text-green-800 text-xs md:text-lg md:h-8 h-4 md:p-1  md:text-center text-center md:grid grid md:border border md:rounded-xl border-yellow-800 rounded-sm md:font-serif font-serif">
            <p>Digital Key </p>
          </div>
          <div className="md:bg-yellow-800 h-auto md:text-white text-green-800 text-xs md:text-lg md:h-8 h-4 md:p-1  md:text-center text-center md:grid grid md:border border md:rounded-xl border-yellow-800 rounded-sm md:font-serif font-serif">
            <p>37-inch TV </p>
          </div>
          <div className="md:bg-yellow-800 md:text-white text-green-800 text-xs md:text-lg md:h-8 h-4 md:p-1  md:text-center text-center md:grid grid md:border border md:rounded-xl rounded-sm border-yellow-800 md:font-serif font-serif">
            <p>Bar </p>
          </div>
          <div className="md:bg-yellow-800 md:text-white text-green-800 text-xs md:text-lg md:h-8 h-4 md:p-1  md:text-center text-center md:grid grid md:border border md:rounded-xl border-yellow-800 rounded-sm md:font-serif font-serif">
            <p>Fridge </p>
          </div>
        </div>
     
        </div>
        
    </div>
    
    </>

  );

}
