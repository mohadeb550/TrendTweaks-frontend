
import Container from "@/components/Shared/Container";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import Counter from "./Counter";


export default function Banner() {

    return (
      <section className='gradient-background'>
      <Container>
          <div  className="hero h-[590px] md:h-[420px] lg:h-[550px] xl:h-[600px] pt-7 lg:pt-10 xl:pt-12 mb-3 md:mb-8 font-play flex flex-col-reverse  md:flex-row justify-around items-start md:pb-12 gap-3 md:gap-0" >

<div className=" text-left text-neutral-content flex-1">
  <div className="max-w-4xl space-y-4 md:space-y-6 xl:space-y-10">

  <p className={`text-sm md:text-base lg:text-lg lg:font-medium text-zinc-700 `}>------- Discover our wide range of campers </p>
    <h1 className={`hidden md:block text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-amber-500 carter-one-regular `}>Rent Car In <br/>Worldwide</h1>

    <h1 className="md:hidden text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-zinc-300  carter-one-regular">Rent Car In Worldwide</h1>
    <p className={`text-sm md:text-base lg:text-lg lg:font-medium  text-zinc-600`}> Discover our wide range of campers and RVs perfect for your next adventure. Start your journey today!</p>


      {/* search funciton  */}
    <section className="flex items-center gap-4">

    <div className='lg:w-72 relative'>
      <div className="relative flex items-center md:w-60 lg:w-full mx-auto h-[40px] lg:h-12 rounded focus-within:shadow-lg bg-white overflow-hidden">
          <div className="grid place-items-center h-full w-12 text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
          </div>
  
          <input 
          className="peer h-full w-full outline-none text-zinc-700 text-sm lg:text-base placeholder:text-gray-700 pr-2"
          type="text"
          id="search"
          placeholder="Search Cars By Location.." /> 

      </div>

  </div>

  <Link href={'/cars'}>
        <button className=" px-4 md:px-3 lg:px-8 text-sm lg:text-base  py-2 md:py-2 xl:py-3 whitespace-nowrap inter-medium text-white rounded transition bg-amber-600 hover:bg-amber-700 flex items-center gap-2">Book Now  <span className="text-xl"><GoArrowUpRight/></span></button></Link>
    </section>



        
   
        

  </div>
</div>

<div className="flex-1 h-full w-full pt-7 md:pt-2 xl:pt-4">

{/* badge  */}
<Counter/>

<img src="/pngegg (17).png" className="md:h-[280px] lg:h-[360px] w-full object-contain" />
</div>



</div>
      </Container>
       </section>
    )
  }
  