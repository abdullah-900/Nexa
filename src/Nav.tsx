
const Nav = () => {

  
  return (
    <>
    <nav  className="flex justify-center items-center h-[6.75rem]">
     <div className=" justify-between px-5 xl:px-[6.375rem] py-[1.9375rem] flex w-full ">
     <img src="Logo.svg" alt="" />
      <ul className=" flex justify-center items-center gap-10 text-[1.375rem] font-Causten text-80">
      </ul>
      <div className=" flex items-center justify-center gap-3 ">
        <div className="rounded-lg bg-f6">
        <img className="p-3 cursor-pointer" src="user.svg" alt="" />
        </div>
        <div className="rounded-lg bg-f6 ">
        <img className="p-3 cursor-pointer" src="shopping cart.svg" alt="" />
        </div>
      </div>
     </div>
    </nav>

    </>
  );
};

export default Nav;
