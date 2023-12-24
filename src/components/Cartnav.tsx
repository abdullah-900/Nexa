
import { Link } from "react-router-dom"
const Cartnav = () => {
  return (
   <article className="flex flex-col gap-[30px] w-full md:w-[30.125rem]   h-[5.6875rem] ml-[1.25rem] md:ml-[6.25rem] mt-[3.125rem]  ">
<div className="flex gap-[.9375rem]">
  <Link to="/" className="font-Causten text-80 text-[1.125rem] font-medium leading-[1.375rem] ">Home</Link>
  <img src="left (Stroke).svg" alt="" />
  <a className="text-3c font-Causten text-[1.125rem] leading-[1.375rem]">Add To Cart</a>
</div>
<div className="flex flex-col gap-[.3125rem]">
  <p className="text-[.875rem] select-none font-Causten leading-[1.0625rem]   tracking-[.0175rem] text-80">Please fill in the fields below and click place order to complete your purchase</p>
  <p className="text-[.875rem] font-Causten leading-[1.0625rem]  tracking-[.0175rem] text-80">Already registered? Please login here</p>
</div>
   </article>
  )
}

export default Cartnav