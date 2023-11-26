import { useState } from "react";
const Nav = () => {
  const [isActive,setIsActive]=useState(false)
  function handleClick() {
    setIsActive(!isActive)
  }
  
  return (
    <>
    <nav  className="flex justify-center items-center h-[6.75rem]">
     <div className=" justify-between px-5 xl:px-[6.375rem] py-[1.9375rem] flex w-full ">
     <img src="Logo.svg" alt="" />
      <ul className="hidden xl:flex justify-center items-center gap-10 text-[1.375rem] font-Causten text-80">
        <li className="font-Causten font-bold text-[1.375rem] text-3c">
          <a href="">Shop</a>
        </li>
        <li>
          <a href="">Men</a>
        </li>
        <li>
          <a href="">Women</a>
        </li>
        <li>
          <a href="">Combos</a>
        </li>
        <li>
          <a href="">Joggers</a>
        </li>
      </ul>
      <div className="flex items-center justify-center w-[55%]  xl:w-[16.6875rem] px-5 py-3 gap-3 rounded-lg bg-f6">
        <img  src="search.svg" alt="" />
        <input className="bg-f6 font-Causten text-80 w-full" placeholder="Search" type="text"  />
      </div>
      <div className="hidden md:flex items-center justify-center gap-3 ">
        <div className="rounded-lg bg-f6 ">
        <img className="p-3 " src="heart.svg " alt="" />
        </div>
        <div className="rounded-lg bg-f6">
        <img className="p-3" src="user.svg" alt="" />
        </div>
        <div className="rounded-lg bg-f6 ">
        <img className="p-3" src="shopping cart.svg" alt="" />
        </div>
      </div>
      {isActive || <img onClick={handleClick} className="block xl:hidden"   src="burgermenu.svg" alt="burgermenu" />}
       {isActive && <img onClick={handleClick} className="block xl:hidden"   src="burgeropened.svg" alt="burgermenu" />}
     </div>
    </nav>
   { isActive && <ul className="flex justify-center flex-col xl:hidden items-center gap-10 text-[1.375rem] font-Causten text-80">
   <div className="flex md:hidden items-center justify-center gap-3 ">
        <div className="rounded-lg bg-f6 ">
        <img className="p-3 " src="heart.svg " alt="" />
        </div>
        <div className="rounded-lg bg-f6">
        <img className="p-3" src="user.svg" alt="" />
        </div>
        <div className="rounded-lg bg-f6 ">
        <img className="p-3" src="shopping cart.svg" alt="" />
        </div>
      </div>
        <li className="font-Causten font-bold text-[1.375rem] text-3c">
          <a href="">Shop</a>
        </li>
        <li>
          <a href="">Men</a>
        </li>
        <li>
          <a href="">Women</a>
        </li>
        <li>
          <a href="">Combos</a>
        </li>
        <li>
          <a href="">Joggers</a>
        </li>
      </ul>}
    </>
  );
};

export default Nav;
