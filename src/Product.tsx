

const Product:React.FC<{img:string,name:string,price:string}> = ({img,name,price}) => {
  return (
    <div className=" w-[17.625rem] h-[27.5625rem] flex flex-col items-center gap-[1.875rem] justify-center">
       <div className="bg-slate-200 w-full flex justify-center items-center rounded-xl">
       <img className='rounded-xl' src={img} alt="" />
       </div>
        <div className="flex justify-between h-[2.5625rem] items-center w-full">
            <p className="font-Causten font-semibold">{name}</p>
            <div className="rounded-lg bg-f6 w-[5.1444rem] h-[2.2862rem]  flex justify-center items-center"><p className="text-3c font-Causten font-bold ">{price}</p></div>
        </div>
    </div>
  )
}

export default Product