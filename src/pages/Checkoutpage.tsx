import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Pagesnav from "../components/Pagesnav"
import Ordersummary from "../components/Ordersummary"
import { useLayoutEffect } from 'react';
import Checkoutform from "../components/Checkoutform";
import Shippingdetails from "../components/Shippingdetails";
import Paymentmethod from "../components/Paymentmethod";
const Checkoutpage = () => {
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: Add smooth scrolling
    });
  }, []); // Empty dependency array to run only once after render
  
  return (
    <>
    <Nav cartbgcolor="bg-8a" carticoncolor="#FFFFFF"/>
    <main>
    <Pagesnav/>
  <section className="flex flex-col md:flex-row  justify-around p-5 md:p-20">
  <Checkoutform/>
  <Ordersummary/>
  </section>
    <hr className="border-ed w-full my-[1.875rem]" />
    <Shippingdetails/>
    <hr className="border-ed w-full my-[1.875rem]" />
   <header className="ml-[3.125rem] md:ml-[6.25rem] mt-[3.75rem] mb-[3.5625rem]">
   <h1 className=" text-3c font-Core-Sans-C65 text-[1.375rem] leading-[2.0938rem] tracking-[.0275rem]">Payment Method</h1>
    <h2 className="mt-2 font-Causten text-3c">All transactions are secure and encrypted.</h2>
   </header>
    <Paymentmethod/>
    </main>
    <Footer/>
    </>
  )
}

export default Checkoutpage