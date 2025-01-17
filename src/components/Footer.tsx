const Footer = () => {
  return (
  
    <footer className="bg-46  gap-10 lg:gap-20 flex flex-col items-center justify-center   w-full font-Causten text-f6 px-[3.125rem]  lg:px-[6.875rem] py-[3.6875rem]"  >
      <section className=" grid md:grid-cols-2 lg:grid-cols-4   gap-10 lg:gap-20 ">
        <section className="flex flex-col items-center  lg:items-start text-center lg:text-left" >
          <h2 className="leading-[3.8742rem] font-bold text-[1.7862rem]">
            Need Help
          </h2>
          <ul className="text-[1.125rem] font-medium leading-[2.4401rem]">
            <li>Contact Us</li>
            <li>Track Order</li>
            <li>Returns & Refunds</li>
            <li>FAQ's</li>
            <li>Career</li>
          </ul>
        </section>
        <section className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="leading-[3.8742rem] font-bold text-[1.7862rem]">
            Company
          </h2>
          <ul className="text-[1.125rem] font-medium leading-[2.4401rem]">
            <li>About Us</li>
            <li>euphoria Blog</li>
            <li>euphoriastan</li>
            <li>Collaboration</li>
            <li>Media</li>
          </ul>
        </section>
        <section className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="leading-[3.8742rem] font-bold text-[1.7862rem]">
            More Info
          </h2>
          <ul className="text-[1.125rem] font-medium leading-[2.4401rem]">
            <li>Term and Conditions</li>
            <li>Privacy Policy</li>
            <li>Shipping Policy</li>
            <li>Sitemap</li>
          </ul>
        </section>
        <section className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="leading-[3.8742rem]  font-bold text-[1.7862rem]">
            Location
          </h2>
          <ul className="text-[1.125rem] font-medium leading-[2.4401rem] ">
            <li>support@euphoria.in</li>
            <li>Eklingpura Chouraha, Ahmedabad Main Road</li>
            <li>(NH 8- Near Mahadev Hotel)</li>
          </ul>
        </section>
      </section>
      <section className="flex flex-col lg:flex-row gap-10 w-full justify-between items-center">
        <section className="flex justify-center items-center gap-[.625rem]">
          <a href="https://facebook.com/"><img src="facebook.svg" alt="facebook icon" /></a>
          <a href="https://instagram.com/"><img src="insta.svg" alt="insta icon" /></a>
          <a href="https://x.com/"><img src="x.svg" alt=" twitter icon" /></a>
          <a href="https://linkedin.com/">
            <div className="bg-f6 rounded-[.6675rem] w-[2.314rem] h-[2.314rem] flex justify-center items-center">
              <span className="text-[#363E3E] font-Roboto leading-[1.78rem] text-[1.068rem] font-bold tracking-[.0214rem]">
                in
              </span>
            </div>
          </a>
        </section>
        <section className="flex flex-col gap-4">
          <h2 className="font-bold text-[1.7862rem] leading-[3.8742rem]">Download The App </h2>
         <div className="flex gap-[1.3274rem]">
         <a href="#">
         <div className="flex justify-around  items-center  w-[9.6101rem] h-[3.2024rem] bg-[#404040] rounded-xl">
          <img className="w-[1.8533rem] h-[2.061rem]" src="playicon.svg" alt="playicon" />
           <div className="flex justify-start flex-col">
           <span className="text-[.625rem]">android app on</span>
           <span className="text-[1.125rem]">Google Play</span>
           </div>
          </div>
          </a>
          <a href="#">
          <div className="flex justify-around  items-center  w-[9.6101rem] h-[3.2024rem] bg-[#404040] rounded-xl">
          <img className="w-[1.8533rem] h-[2.061rem]" src="iphone.svg" alt="playicon" />
           <div className="flex justify-start flex-col">
           <span className="text-[.625rem]">Available on the</span>
           <span className="text-[1.125rem]">App Store</span>
           </div>
          </div>
          </a>
         </div>
        </section>
      </section>
<p className="font-Causten font-bold text-[1.125rem]   text-[#FFF] leading-9 ">
        Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
      </p>
     
    </footer>
  
    
  );
};

export default Footer;
