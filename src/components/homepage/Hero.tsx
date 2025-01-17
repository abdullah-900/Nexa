
const Hero = () => {
  const scroll = () => {
    const section = document.querySelector( '#products' );
    section?.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };
  return (
    <>
      <section className="flex bg-[#CD837B] flex-col md:flex-row">
      <div className="flex flex-col items-start justify-center  p-10 gap-10 text-f6">
          <h6 className="text-[.8125rem] leading-4 font-Marcellus">NEW IN TOWN</h6>
          <h1 className="font-Marcellus text-[3.9375rem] leading-[3.9375rem] ">The New LipGloss Collection</h1>
          <h4 className="text-[1.4375rem] font-Marcellus   leading-[1.75rem] ">This new collection brings with it the most exciting colors</h4>
        <button onClick={scroll} className="rounded-sm py-[15px] px-[1.875rem] bg-[#FFFEFE] text-black">SHOP NOW</button>
        </div>
        <img className="md:w-1/2" src="hero section.webp" alt="" />
      </section>
    </>
  );
};

export default Hero;
