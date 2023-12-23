
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Cartproducts from "../components/Cartproducts"
import Cartnav from "../components/Cartnav"
const Cartpage = () => {
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