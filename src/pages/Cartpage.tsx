
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Cartproducts from "../components/Cartproducts"
const Cartpage = () => {
  return (
   <>
   <Nav cartbgcolor="bg-8a" carticoncolor="#FFFFFF"/>
   <main>
    <Cartproducts/>
   </main>
   <Footer/>
   </>
  )
}

export default Cartpage