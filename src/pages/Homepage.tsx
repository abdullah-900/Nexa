import Nav from "../components/Nav"
import Hero from "../components/Hero"
import Products from "../components/Products"
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