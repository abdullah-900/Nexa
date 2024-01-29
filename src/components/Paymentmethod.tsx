const Paymentmethod = () => {
  return (
    <>
    <section className="w-[90%] md:[37.5rem]  lg:w-[52.5rem] rounded-xl bg-f6 p-5 ml-5 md:ml-9 lg:ml-[6.25rem] pl-[1.75rem] py-[2.8125rem] pr-[3rem]">
      <article className="w-full lg:w-[47.75rem]">
        <div className="flex items-center gap-[1.1875rem]">
          <input className="rounded-full cursor-pointer" type="checkbox" id="Cash on delivery"/>
          <label htmlFor="Cash on delivery" className="cursor-pointer flex flex-col gap-[.3125rem]">
            <span className="font font-Causten font-bold text-[1.25rem] text-3c">
              Cash on delivery
            </span>
            <span className="text-3c font-Causten text-base">
              Pay with cash upon delivery.
            </span>
          </label>
        </div>
        <hr className="border-ed w-full my-[1.875rem]" />
        <div className="flex flex-col gap-[1.875rem] w-full">
          <div className="flex items-center gap-[1.1875rem]">
            <input  className="rounded-full cursor-pointer" type="checkbox" id="Credit Card"  />
            <label htmlFor="Credit Card" className="flex cursor-pointer flex-col gap-[.3125rem]">
              <span className="font font-Causten font-bold text-[1.25rem] text-3c">
                Credit Card
              </span>
              <span className="text-3c font-Causten text-base">
                We accept all major credit cards.
              </span>
            </label>
          </div>
          <div className=" h-[2.875rem] w-[5rem] flex ml-[2.3125rem]  bg-white items-center rounded justify-center">
            <img
              className="w-[2.5275rem] h-[.7762rem] "
              src="visa.svg"
              alt=""
            />
          </div>
          <input placeholder="Card Number" className="w-full  md:w-[21.0625rem] h-[3.0625rem] rounded-lg placeholder-80 placeholder:text-[.875rem] placeholder:font-Causten" type="text" />
          <input placeholder="Name On Card" className="w-full md:w-[21.0625rem] h-[3.0625rem] rounded-lg placeholder-80 placeholder:text-[.875rem] placeholder:font-Causten" type="text" />
          <input placeholder="Expiration date (MM/YY)" className="w-full md:w-[21.0625rem] h-[3.0625rem] rounded-lg placeholder-80 placeholder:text-[.875rem] placeholder:font-Causten" type="text" />
          <input placeholder="Security Code" className="w-full md:w-[21.0625rem] h-[3.0625rem] rounded-lg placeholder-80 placeholder:text-[.875rem] placeholder:font-Causten" type="text" />
        </div>
      </article>
    </section>
    <div className="w-full flex justify-center md:justify-start  ">
    <button className="md:ml-[6.25rem]  mt-[3.125rem] mb-[6.25rem] py-4 px-5 bg-8a rounded-lg text-[1.125rem] font-medium font-Causten text-[#FFFFFF]">Pay Now</button>
    </div>
</>
    
  );
};

export default Paymentmethod;
