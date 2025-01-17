import { Link } from "react-router-dom"

const Emptycart = () => {
  return (
    <div className="flex items-center flex-col gap-[3.125rem] mb-[4.375rem]">
    <img className="md:w-[27.9931rem] w-80 md:h-[20.4819rem]" src="emptycart.png" alt="emptycart" />
    <div>
        <h1 className="font-Core-Sans-C65 text-2xl md:text-[2.125rem]">Your cart is empty and sad :&#40;</h1>
        <h2 className="text-base font-Core-Sans-C45 text-80 text-center">Add something to make it happy!</h2>
    </div>
    <Link to='/' className="text-white inline-block rounded-lg text-[1.125rem] font-Causten font-semibold bg-8a px-6  md:px-12 py-3">Continue Shopping</Link>

    </div>

  )
}

export default Emptycart