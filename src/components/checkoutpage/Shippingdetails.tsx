

const Shippingdetails = () => {
  return (
    <section className='flex flex-col gap-[1.875rem] text-3c p-5 md:p-10'>
        <h1 className=' font-Core-Sans-C65 font-bold text-[1.375rem] tracking-[.0275rem] leading-[2.0938rem]'>Shipping Details</h1>
        <article className=' flex flex-col gap-[1.5625rem] bg-f6 rounded-xl p-10'>
<h2 className="font-Causten font-bold text-[1.25rem]">Arrives by Monday, June 7</h2>
<hr className='border-be w-full' />
<div className="flex justify-between">
<h2 className="font-Causten font-bold text-[1.25rem]">Delivery Charges</h2>
<h3 className="font-Causten font-bold text-[1.25rem]" >$5.00</h3>
</div>
        </article>
    </section>
  )
}

export default Shippingdetails