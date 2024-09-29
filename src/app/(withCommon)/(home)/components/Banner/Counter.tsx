'use client'
import CountUp from 'react-countup';

const Counter = () => {
    return (
        <>
           
           <div className="flex items-center justify-center gap-6 lg:gap-16 xl:gap-20 mb-5 md:mb-2 xl:mb-4">

<div className="space-y-1 md:space-y-2 xl:space-y-4">
<h1 className={`text-3xl lg:text-4xl xl:text-5xl pb-1 lg:pb-2 xl:pb-4 border-b-2 md:border-b-4 border-zinc-600 font-semibold text-zinc-400 carter-one-regular`}> <CountUp end={10} duration={6} /> <span className="">+</span> </h1>
<p className={`text-sm  text-zinc-400 `}>Years Experience</p>
</div>

<div className="space-y-1 md:space-y-2 xl:space-y-4">
<h1 className={`text-3xl lg:text-4xl xl:text-5xl pb-1 lg:pb-2 xl:pb-4 border-b-2 md:border-b-4 border-zinc-600 font-semibold text-zinc-400 carter-one-regular`}> <CountUp end={75} duration={6} /><span className="">+</span> </h1>
<p className={`text-sm text-zinc-400`}>Happy
Clients</p>

</div>
<div className="space-y-1 md:space-y-2 xl:space-y-4">
<h1 className={`text-3xl lg:text-4xl xl:text-5xl pb-1 lg:pb-2 xl:pb-4 border-b-2 md:border-b-4 border-zinc-600 font-semibold text-zinc-400 carter-one-regular`}> <CountUp end={45} duration={6} /><span className="">+</span> </h1>
<p className={`text-sm  text-zinc-400 `}>Award
Winning</p>
</div>
</div>
        </>
    );
};

export default Counter;