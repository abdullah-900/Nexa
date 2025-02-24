// @ts-nocheck
import { useEffect, useState } from 'react';
import Product from './Product'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'; 
import { useContext } from 'react';
import {context} from '../Context/Context.jsx';
interface Ptype {
  id: number;
  name: string;
  img: string;
  price: number;
quantity: number;
priceperunit:number;
}
const Products = () => {
  const [cartItems,setCartItems]=useState([]);
  useEffect(()=>{
    const retriveddata= localStorage.getItem("product")
    if(retriveddata!=null){
      setCartItems(JSON.parse(retriveddata))
    }
  },[])

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/Cartpage');
  };
  const notifyProductAdded =(pname:string)=>{
    toast(`${pname} Added To Cart`, { pauseOnHover: true })
}
const notifyalreadyAdded =(pname:string)=>{
  toast(`${pname} already in Cart`, { pauseOnHover: true })
}
  const products=[
    {id:20,name:'Rose Shimmer',img:'lip1.jpeg',price:200, quantity:1},
    {id:10,img:'lip2.jpeg', name:'Coral Crush', price:230, quantity:1},
  ]


const handleAddToCart = (product: Ptype) => {
  const isincart=cartItems.find((item) => item.id === product.id) 
  if (isincart){  
    notifyalreadyAdded(isincart.name)
  } else{
    const updatedCartItems=[...cartItems, product];
    setCartItems(updatedCartItems);
    localStorage.setItem("product", JSON.stringify(updatedCartItems));
    notifyProductAdded(product.name)
  }  
};



  return (
    
    <section id='products' className=' p-14 flex flex-col justify-center items-center gap-10'>
      <h2 className='text-[2.6875rem] leading-[2.6875rem] font-Marcellus'>Our Products</h2>
      <div className='grid gap-10 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-12' >
      {products.map((p) => ( 
  <Product key={p.id} product={{id:p.id,name:p.name,img:p.img,price:p.price,quantity:1,priceperunit:p.price}} onAddProduct={handleAddToCart} />
))}
   <ToastContainer  autoClose={2000} onClick={handleNavigate}/>
      </div>
    </section>
  )
}

export default Products