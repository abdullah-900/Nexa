

const Checkoutform = () => {
  return (
    <section className="flex flex-col gap-[3.125rem] ">
        <header className="flex flex-col gap-5" >
            <div className="flex gap-[.9375rem] items-center">
            <div className="bg-8a w-[.375rem] h-[1.75rem] rounded-[.625rem]"></div>
       <h1 className="text-3c font-Core-Sans-C65 text-[1.75rem]  tracking-[.035rem] leading-[2.0938rem]">Check Out</h1>
            </div>
       <h2 className="text-3c font-Core-Sans-C65 text-[1.375rem] tracking-[.0275rem] " >Shipping Address</h2>
        </header>
        <form action="" className="flex flex-col gap-[1.5625rem]">
            <label className="text-3c text-[1rem] font-semibold font-Causten tracking-[.02rem] flex flex-col gap-[.625rem]" htmlFor="fullname">
                Full Name*
            <input placeholder="Full Name" className="w-full md:w-[23.875rem] placeholder-80 h-[3.0625rem] px-[1.25rem] py-4 rounded-lg bg-f6" type="text" id="fullname" />
            </label>
            <label className="text-3c text-[1rem] font-semibold font-Causten tracking-[.02rem] flex flex-col gap-[.625rem]" htmlFor="phonenumber">
                Phone Number*
            <input placeholder="Phone Number" className="w-full md:w-[23.875rem] placeholder-80 h-[3.0625rem] px-[1.25rem] py-4 rounded-lg bg-f6" type="tel" id="phonenumber" />
            </label>
            <label className="text-3c text-[1rem] font-semibold font-Causten tracking-[.02rem] flex flex-col gap-[.625rem]" htmlFor="address">
                Address*
<textarea placeholder="Address" className="w-full md:w-[23.875rem] placeholder-80 h-[6.25rem] px-[1.25rem] py-4 rounded-lg bg-f6"  id="address"  name="address"  cols={30} rows={50}></textarea>
            </label>
        </form>
       
    </section>
  )
}

export default Checkoutform