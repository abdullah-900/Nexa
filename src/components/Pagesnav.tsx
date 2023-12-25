import {Link} from 'react-router-dom'
const Pagesnav = () => {

  return (
   
    <aside className='flex items-center h-[1.875rem] pl-4 ml-[.9375rem] md:ml-[6.25rem]   mt-[1.4375rem]   gap-[.9375rem]'>
         <Link to="/" className="font-Causten text-80 text-[1.125rem] font-medium leading-normal ">Home</Link>
  <img src="left (Stroke).svg" alt="" />
  <Link to="/Cartpage" className="font-Causten text-80 text-[1.125rem] font-medium leading-normal ">Cart</Link>
  <img src="left (Stroke).svg" alt="" />
  <a className="text-3c font-Causten text-[1.125rem] leading-normal">Checkout</a>
    </aside>

   
  )
}

export default Pagesnav