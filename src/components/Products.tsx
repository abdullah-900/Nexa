
import Product from './Product'
const Products = () => {
  return (
    <section className=' p-14 flex flex-col justify-center items-center gap-10'>
      <h2 className='text-[2.6875rem] leading-[2.6875rem] font-Marcellus'>Our Products</h2>
      <div className=' md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  md:gap-10' >
        <Product img={'lip1.jpeg'} name={'Rose Shimmer'} price={'200 EGP'}/>
        <Product img={'lip2.jpeg'} name={'Coral Crush'} price={'230 EGP'}/>
        <Product img={'lip3.jpeg'} name={'Nude Elegance'} price={'150 EGP'}/>
        <Product img={'lip4.jpeg'} name={'Pink Petal'} price={'140 EGP'}/>
        <Product img={'lip5.jpeg'} name={'Sunset Glow'} price={'180 EGP'}/>
        <Product img={'lip6.jpeg'} name={'Silk Rose'} price={'170 EGP'}/>
      </div>
    </section>
  )
}

export default Products