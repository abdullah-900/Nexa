import React from 'react';

interface Ptype {
  id: number;
  name: string;
  img: string;
  price: string;
quantity: number;
}
 type onAdd = (product:Ptype) => void;
 
const Product: React.FC<{product:Ptype, onAddProduct:onAdd}> = ({
product,
  onAddProduct,

}) => {

  return (
    <article className=" w-[17.625rem] h-[27.5625rem] flex flex-col items-center gap-[1.875rem] justify-center">
      <header className=" w-full flex flex-col justify-center items-center rounded-xl ">
        <img className="rounded-xl"  aria-describedby="product-name" src={product.img}  alt="" />
        <div className="flex items-center justify-around gap-2 w-full mt-[1.875rem]">
        <h2 id="product-name" className="font-Causten font-semibold">{product.name}</h2>
        <div className="rounded-lg bg-f6 w-[5.1444rem] h-[2.2862rem]  flex justify-center items-center">
          <span className="text-3c font-Causten font-bold text-[.875rem]">
            {product.price}
          </span>
        </div>
      </div>
      </header>
      <footer  onClick={()=>{onAddProduct(product)}} className="flex cursor-pointer items-center justify-center gap-3 px-10 py-3 bg-8a  text-[#fff] rounded-lg">
        <img src="add to cart button icon.svg" alt="" />
       <button>Add to cart</button>
      </footer>
    </article>
  );
};

export default Product;
