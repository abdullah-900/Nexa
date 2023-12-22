

const Subtotal = () => {
  return (
    <section className="w-full bg-[#f3f3f3] flex justify-center items-center">
    <div className=" gap-[3.125rem]  flex flex-col justify-center items-center w-[29.0625rem] p-5 md:p-10  ">
        <article className="flex flex-col justify-center items-center  w-[17.6875rem] text-3c text-[1.375rem] font-Causten tracking-[.0275rem]">
         <div className="flex items-center justify-between w-full">
            <h4 className="font-medium">Sub Total </h4>
            <strong className="font-medium">500$</strong>
         </div>
         <div className="flex items-center justify-between w-full mt-5 md:mt-[2.5625rem]">
            <h4 className="font-medium">Shipping</h4>
            <strong className="font-medium">200$</strong>
         </div>
         <div className="flex items-center justify-between w-full mt-12 md:mt-[6.6875rem]">
            <h4 className="font-bold">Grand Total</h4>
            <strong className="font-bold">150$</strong>
         </div>
        </article>
        <hr className="w-full border-[#BEBCBD]"  />
        <button className="text-[#ffffff] text-[1.125rem] font-Causten font-semibold rounded-lg flex justify-center items-center py-3 px-5 w-[14.5rem] h-[2.875rem] bg-8a">Proceed To Checkout</button>
    </div>
    </section>
  )
}

export default Subtotal