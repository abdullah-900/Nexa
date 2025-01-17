   // @ts-nocheck
   import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {context} from "../../Context/Context.jsx"
import Emptycart from "./Emptycart.js"
const Subtotal = () => {
   const [orders,setOrders]=useState([])
   const [total,setTotal]=useState(0)
   const shippingFee=30

   function isset($variable) {
      if (typeof $variable!== "undefined" && $variable!==null) {
         return true
      }else {
      return false
      }
   }
const {cartItemsDetails}=useContext(context)
   useEffect(()=>{
      const fetchOrders=()=>{
         const orders=localStorage.getItem('product')
         if (orders!=null){
            const order=JSON.parse(orders)
            setOrders(order)
         }
         }
         fetchOrders()
   },[cartItemsDetails])

  
   useEffect(()=>{
            const calculateTotal=()=>{
         if (orders.length > 1) {
            const totalPrice=orders.reduce((acc,current)=>acc.price+current.price)
            setTotal(totalPrice)
         }else {
            setTotal(orders[0]?.price)
         }
       
      }
     calculateTotal();

     },[orders])
     
   const navigate = useNavigate();
  return (
   <>
{
isset(total)?
<section className="w-full bg-[#f3f3f3] flex justify-center items-center">
<div className=" gap-[3.125rem]  flex flex-col justify-center items-center w-[29.0625rem] p-[3.0625rem]  ">
    <article className="flex flex-col justify-between h-[8.3125rem]  w-[17.6875rem] text-3c text-[1.375rem] font-Causten leading-[1.625rem] tracking-[.0275rem]">
              <div className="flex items-center justify-between w-full">
        <h4 className="font-medium">Sub Total </h4>
        <strong className="font-medium">{`${total} EGP`}</strong>
     </div>
     <div className="flex items-center justify-between w-full  mb-[1.625rem] ">
        <h4 className="font-medium">Shipping</h4>
        <strong className="font-medium mr-[1.375rem]">{shippingFee}EGP</strong>
     </div>
     <div className="flex items-center justify-between w-full ">
        <h4 className="font-bold">Grand Total</h4>
        <strong className="font-bold">{total+shippingFee}EGP</strong>
     </div>
    </article>
    <hr className="w-full border-[#BEBCBD]"  />
    <button onClick={()=>navigate("/Checkoutpage")} className="text-[#ffffff] text-[1.125rem] font-Causten font-semibold rounded-lg flex justify-center items-center py-3 px-5 w-[14.5rem] h-[2.875rem] bg-8a mb-[.625rem]">Proceed To Checkout</button>
</div>
</section>

 :  <Emptycart/>
}
</>
  )
}

export default Subtotal