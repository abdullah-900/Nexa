import Controls from "./Controls"

const Cartproductdetails = () => {
  return (
    <article className="flex  justify-evenly items-center">
    <header className="flex justify-center  gap-5 ">
    <img src="lip1.jpeg" className="w-[6.25rem] h-[6.25rem] md:w-[12.5rem] md:h-[12.5rem] rounded-xl" alt="" />
    <div className="flex flex-col   gap-5 w-full">
    <h2 className="font-bold font-Causten text-[1.125rem] text-3c">Rose Shimmer</h2>
    <Controls/>
    </div>
    </header>
    <strong className="text-3c text-[1.125rem] leading-6 font-bold font-Causten  " >200 EGP</strong>
       </article>
  )
}

export default Cartproductdetails