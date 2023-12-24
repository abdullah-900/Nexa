
import { Link } from "react-router-dom"
const Cartnav = () => {
  return (
   <article className="flex flex-col gap-[30px]  md:w-[30.125rem]   h-[5.6875rem] pl-4 md:ml-[6.25rem] mt-[3.125rem]  ">
<div className="flex gap-[.9375rem]">
  <Link to="/" className="font-Causten text-80 text-[1.125rem] font-medium leading-normal ">Home</Link>
  <img src="left (Stroke).svg" alt="" />
  <a className="text-3c font-Causten text-[1.125rem] leading-normal">Add To Cart</a>
</div>
<div className="flex flex-col gap-[.3125rem]">
  <p className="text-[.875rem] select-none font-Causten leading-normal   tracking-[.0175rem] text-80">Please fill in the fields below and click place order to complete your purchase</p>
  <p className="text-[.875rem] font-Causten leading-normal  tracking-[.0175rem] text-80">Already registered? Please login here</p>
</div>
   </article>
  )
}

export default Cartnav