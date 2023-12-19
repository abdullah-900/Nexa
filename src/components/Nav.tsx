
import { useNavigate } from "react-router-dom";
import '../../public/user.svg'
import Usericon from "./Usericon";
import Carticon from "./Carticon";
import { useState } from "react";
const Nav:React.FC<{cartbgcolor:string,carticoncolor:string}> = ({cartbgcolor,carticoncolor}) => {
  const Handlehover=()=>{
    setIshover(!Ishover)
  }
  const [Ishover,setIshover]=useState(false)
  const navigate = useNavigate();
  return (
    <>
    <nav  className="flex justify-center items-center h-[6.75rem]">
     <div className=" justify-between px-5 xl:px-[6.375rem] py-[1.9375rem] flex w-full ">
     <img src="Logo.svg" alt="" />
      <ul className=" flex justify-center items-center gap-10 text-[1.375rem] font-Causten text-80">
      </ul>
      <div className=" flex items-center cursor-pointer justify-center gap-3">
        <div className="rounded-lg p-3 bg-f6">
        <Usericon color="#807D7E"/>
        </div>
        <div onMouseEnter={Handlehover} onMouseLeave={Handlehover} onClick={()=>navigate('/Cartpage')} className={`rounded-lg ${cartbgcolor} hover:bg-8a p-3`}>
       <Carticon color={!Ishover?carticoncolor:'#FFFFFF'}/>
        </div>
      </div>
     </div>
    </nav>

    </>
  );
};

export default Nav;
