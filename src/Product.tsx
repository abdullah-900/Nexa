

const Product:React.FC<{img:string,name:string,price:string}> = ({img,name,price}) => {
  return (
    <div className=" w-[17.625rem] h-[27.5625rem] flex flex-col items-center gap-[1.875rem] justify-center">
       <div className="bg-slate-200 w-full flex justify-center items-center rounded-xl">
       <img className='rounded-xl' src={img} alt="" />
       </div>
        <div className="flex items-center justify-around gap-2 w-full">
            <p className="font-Causten font-semibold">{name}</p>
            <div className="rounded-lg bg-f6 w-[5.1444rem] h-[2.2862rem]  flex justify-center items-center"><p className="text-3c font-Causten font-bold text-[.875rem]">{price}</p></div>
        </div>
        <div className="flex cursor-pointer items-center justify-center gap-3 px-10 py-3 bg-8a  text-[#fff] rounded-lg"><img   src="add to cart button icon.svg" alt="" /><button>Add to cart</button></div>
    </div>
  )
}

export default Product