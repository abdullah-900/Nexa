

const Controls = () => {
  return (
    <div className="flex   md:w-[10.625rem] justify-between items-center  ">
    <aside>
  <img src="deleteicon.svg" className="w-[1.25rem] h-[1.25rem] cursor-pointer " alt="Delete product" />
    </aside>
  <fieldset aria-label="Quantity controls" className="flex h-9 border  bg-f6 items-center justify-center rounded-xl font-Causten font-medium text-[.75rem] text-3c gap-[.9375rem] w-[5rem] md:w-[6.25rem]">
    <button aria-label="Decrease quantity"><img src="minusIcon.svg" alt="" /></button>
    <span>2</span>
    <button aria-label="Increase quantity"><img src="plusIcon.svg" alt="" /></button>
  </fieldset>
  </div>
  )
}

export default Controls