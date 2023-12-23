import Cartproductdetails from "./Cartproductdetails";
import Subtotal from "./Subtotal";

const Cartproducts = () => {
  return (
    <section className=" flex flex-col w-full justify-center  gap-[4.375rem] mt-[3.125rem]">
    <header className="text-f6 bg-3c flex items-center justify-center h-[4.75rem]">
      <h1 className="text-[1.125rem] font-semibold font-Causten">Shopping Cart</h1>
    </header>
<Cartproductdetails/>
<Subtotal/>
    </section>
  );
};

export default Cartproducts;
