// @ts-nocheck
import { useEffect, useState } from "react"

const Ordersummary = () => {
   const [orders,setOrders]=useState([])
useEffect(()=>{
   const fetchOrders=()=>{
      const orders=localStorage.getItem('product')
      if (orders!=null){
         const order=JSON.parse(orders)
         setOrders(order)
      }
      }
      fetchOrders()
},[])

const totalPrice = orders.reduce((accumulator, order) => {
   return accumulator + order.price; 
 }, 0); 

  return (
    <section className="flex flex-col w-full md:w-[22.3125rem]  justify-center p-5 md:p-10">
        <h1 className="font-Core-Sans-C65 text-[1.5rem]   text-3c">Order Summary</h1>
        <hr className="border-ed my-[.9375rem]" />
   <div>
   <article className="flex w-full md:w-80  lg:w-[22.3125rem] justify-between items-center">
    <header className="flex justify-center  gap-5 ">
    <img src="lip1.jpeg" className="w-[3.9375rem] h-[3.9375rem] md:w-[6.25rem] md:h-[6.25rem] rounded-xl" alt="product image" />
    <div className="flex flex-col   gap-5 w-full">
    <h2 className="font-bold font-Causten text-[1.125rem] text-3c">Rose Shimmer</h2>
    </div>
    </header>
    <strong className="text-3c text-[1.125rem] leading-6 font-bold font-Causten  " >200 EGP</strong>
       </article>
       <hr className="border-ed my-[.9375rem]" />
   </div>
   
      <dl className="font-bold w-full md:w-80 lg:w-[22.3125rem] justify-between text-[1.125rem] text-3c tracking-[.0225rem] font-Causten">
      <div className="flex items-center justify-between w-full">
            <dt>Sub Total </dt>
            <dd>{`${totalPrice} EGP`}</dd>
         </div>
         <div className="flex items-center justify-between w-full  mb-[1.625rem] ">
            <dt>Shipping</dt>
            <dd>5.00 EGP</dd>
         </div>
         <hr className="border-ed my-[.9375rem]" />
         <div className="flex items-center justify-between w-full ">
            <dt>Total</dt>
            <dd>518.00 EGP</dd>
         </div>
      </dl>
    </section>

  )
}

export default Ordersummary