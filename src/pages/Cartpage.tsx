import { useLayoutEffect } from "react"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Cartproducts from "../components/cartpage/Cartproducts"
import Cartnav from "../components/cartpage/Cartnav"

// @ts-ignore

const Cartpage = () => {
  
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
    <Cartnav/>
    <Cartproducts/>
   </main>
   <Footer/>

   </>
  )
}

export default Cartpage