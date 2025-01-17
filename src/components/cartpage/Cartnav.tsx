
import { Link } from "react-router-dom"
const Cartnav = () => {

  return (
   <nav className="flex flex-col gap-[30px] justify-center ml-[.9375rem] pl-4 md:ml-[6.25rem] mt-[3.125rem] " >
<div className="flex gap-[.9375rem]">
  <Link to="/" className="font-Causten text-46 text-[1.125rem] font-medium leading-normal ">Home</Link>
  <img src="left (Stroke).svg" alt="" />
  <Link to='/Cartpage' className="text-3c font-Causten text-[1.125rem] leading-normal">Cart</Link>
</div>
   </nav>
  )
}

export default Cartnav