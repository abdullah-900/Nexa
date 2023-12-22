const Product: React.FC<{ img: string, name: string, price: string  }> = ({
  img,
  name,
  price,
  
}) => {
  return (
    <article className=" w-[17.625rem] h-[27.5625rem] flex flex-col items-center gap-[1.875rem] justify-center">
      <header className=" w-full flex flex-col justify-center items-center rounded-xl ">
        <img className="rounded-xl"  aria-describedby="product-name" src={img}  alt="" />
        <div className="flex items-center justify-around gap-2 w-full mt-[1.875rem]">
        <h2 id="product-name" className="font-Causten font-semibold">{name}</h2>
        <div className="rounded-lg bg-f6 w-[5.1444rem] h-[2.2862rem]  flex justify-center items-center">
          <span className="text-3c font-Causten font-bold text-[.875rem]">
            {price}
          </span>
        </div>
      </div>
      </header>
      <footer className="flex cursor-pointer items-center justify-center gap-3 px-10 py-3 bg-8a  text-[#fff] rounded-lg">
        <img src="add to cart button icon.svg" alt="" />
        <button>Add to cart</button>
      </footer>
    </article>
  );
};

export default Product;
