import {Link} from 'react-router-dom'
const Pagesnav = () => {

  return (
   <section className="flex flex-col gap-[30px] pl-4 md:ml-[6.25rem] ">
    <nav className='flex items-center h-[1.875rem] pl-4 ml-[.9375rem] md:ml-[6.25rem]   mt-[1.4375rem]   gap-[.9375rem]'>
         <Link to="/" className="font-Causten text-80 text-[1.125rem] font-medium leading-normal ">Home</Link>
  <img src="left (Stroke).svg" alt="" />
  <Link to="/Cartpage" className="font-Causten text-80 text-[1.125rem] font-medium leading-normal ">Cart</Link>
  <img src="left (Stroke).svg" alt="" />
  <Link to='/Checkoutpage' className="text-3c font-Causten text-[1.125rem] leading-normal">Checkout</Link>
    </nav>
    <div className="flex flex-col gap-[.3125rem]">
  <p className="text-[.875rem] select-none font-Causten leading-normal tracking-[.0175rem] text-80">Please fill in the fields below and click place order to complete your purchase</p>
</div>
    </section>
  )
}

export default Pagesnav