import { useEffect, useState } from "react"
import Controls from "./Controls"

interface Ptype {
  id: number;
  name: string;
  img: string;
  price: string;
  quantity: number;
}
const Cartproductdetails = () => {
 
  const[cartProducts,setCartProducts]=useState([])
  const handleIncrease=(pid:number)=>{
    const data=localStorage.getItem('product')
    if (data!==null) {
      const filterdata=JSON.parse(data)
      for (let i = 0; i < filterdata.length; i++) {
        if (filterdata[i].id === pid) {  // Edit a specific object
         filterdata[i].quantity = filterdata[i].quantity + 1;
        setCartProducts(filterdata)
        }
      }
      localStorage.setItem('product',JSON.stringify(filterdata))
  }
  }
  const handleDecrease=(pid:number)=>{
    const data=localStorage.getItem('product')
    if (data!==null) {
      const filterdata=JSON.parse(data)
      for (let i = 0; i < filterdata.length; i++) {
        if (filterdata[i].id === pid && filterdata[i].quantity > 1) {  // Edit a specific object
            filterdata[i].quantity = filterdata[i].quantity - 1;
            setCartProducts(filterdata)        
        }
      }
      localStorage.setItem('product',JSON.stringify(filterdata))
  }
    }
  const handleDelete=(pid:number)=>{
    const data=localStorage.getItem('product')
if (data!==null) {
  const filterdata=JSON.parse(data).filter((p:Ptype)=>p.id!==pid)
  localStorage.setItem('product',JSON.stringify(filterdata))
  setCartProducts(filterdata)
}
  }
  useEffect(()=>{
    const retriveddata= localStorage.getItem("product")
    if(retriveddata!=null ){
      setCartProducts(JSON.parse(retriveddata))
    }
  },[])

  return (
  cartProducts?.map((p:Ptype)=>{
  return(
  <article key={p.id} className="flex  justify-evenly items-center">
  <header className="flex justify-center  gap-5 ">
  <img src={p.img} className="w-[6.25rem] h-[6.25rem] md:w-[12.5rem] md:h-[12.5rem] rounded-xl" alt="" />
  <div className="flex flex-col   gap-5 w-full">
  <h2 className="font-bold font-Causten text-[1.125rem] text-3c">{p.name}</h2>
<Controls onDelete={handleDelete} pid={p.id} onIncrease={handleIncrease} productNums={p.quantity} onDecrease={handleDecrease}/>
  </div>
  </header>
  <span className="text-3c text-[1.125rem] leading-6 font-bold font-Causten  " >{p.price}</span>
     </article>
  )
})
  )
}

export default Cartproductdetails