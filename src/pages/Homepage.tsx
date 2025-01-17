import Nav from "../components/Nav"
import Hero from "../components/homepage/Hero"
import Products from "../components/homepage/Products"
import Footer from "../components/Footer"

const Homepage = () => {
  return (
    
<>
    <Nav cartbgcolor="bg-f6" carticoncolor="#807D7E"/>
    <main>
    <Hero/>
    <Products/>
      <Footer/>
    </main>
    </>
  
  )
}

export default Homepage