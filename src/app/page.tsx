import Image from "next/image";
import iphonePic from "../Iphone Image.webp";
import playstation from "../PlayStation.webp";
import macbook from "../new-macbook-pro-16-inch-free-mockups-removebg-preview.png";
import airpods from "../th__2_-removebg-preview.png";
import vision from "../th-removebg-preview.png";
import camera from "../5.jpeg";
import iphone from "../3.jpg";
import smartwatch from "../4.jpeg";
import headphone2 from "../7.jpeg";
import samsung from "../2.png";
import ipad from "../1.jpg";
import ipad1 from "../8.jpeg";
import headphone from "../6.jpeg";
import ipadpro from "../ipadpro.webp";
import samsunggalaxy from "../samsunggalaxy.webp";
import Macbook1 from "../Macbook 1.webp";
import popularproduct from "../popularproduct.webp";
import { FcSearch } from "react-icons/fc";
import { FaComputer } from "react-icons/fa6";
import { PiGameControllerFill } from "react-icons/pi";
import { PiHeadsetDuotone } from "react-icons/pi";
import { FaMobileAlt } from "react-icons/fa";
import { FaCameraRetro } from "react-icons/fa";
import { BsSmartwatch } from "react-icons/bs";
import banner from "../Banner 2.webp"
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareTwitter } from "react-icons/fa6";

export default function Home() {
  type Product = {
    picture: any;
    title: string;
    price: string;
    button: string;
  };

  const items: Product[] = [
    {
      picture: camera,
      title: "Blackmagic Pocket Cinema Camera 6K",
      price: "$235",
      button: "Buy Now",
    },
    {
      picture: iphone,
      title: "Apple iPhone 16 128GB Exclusive Color",
      price: "$500",
      button: "Buy Now",
    },
    {
      picture: smartwatch,
      title: " Watch Series 9 GPS 41mm Starlight Aluminium",
      price: "$400",
      button: "Buy Now",
    },
    {
      picture: headphone2,
      title: "AirPods Max Silver Starlight Aluminium",
      price: "$100",
      button: "Buy Now",
    },
    {
      picture: samsung,
      title: "Samsung S23 ultra Debuts Exquisite Exclusive Color",
      price: "$1500",
      button: "Buy Now",
    },
    {
      picture: ipad1,
      title: " Galaxy Tab and Macbook. sleek design and powerful performance",
      price: "$230",
      button: "Buy Now",
    },
    {
      picture: ipad,
      title: "Galaxy Tab. sleek design and powerful performance",
      price: "$250",
      button: "Buy Now",
    },
    {
      picture: headphone,
      title:
        "Audio Headphones experience. advanced noise-cancellation technology",
      price: "$200",
      button: "Buy Now",
    },
  ];

  type Bestproduct = {
    Image: any;
    describtion: string;
    tag: string;
    tagName: string;
    bgColor : any;
  };

  const offerProduct: Bestproduct[] = [
    {
      Image: samsunggalaxy,
      describtion:
        "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
      tag: "SHOP NOW",
      tagName: "Samsung Galaxy",
      bgColor : "bg-slate-50"
    },
    {
      Image: Macbook1,
      describtion:
        "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
      tag: "SHOP NOW",
      tagName: "Macbook pro.",
      bgColor : "bg-[#f9f9f9]"
    },
    {
      Image: popularproduct,
      describtion:
        "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
      tag: "SHOP NOW",
      tagName: "Popular Products",
      bgColor : "bg-[#ededed]"
    },
    {
      Image: ipadpro,
      describtion:
        "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
      tag: "SHOP NOW",
      tagName: "IPad Pro",
      bgColor : "bg-zinc-600"
    },
  ];

  return (
    <div className="mt-[20px] font-mono">
      <div className="flex items-center max-w-[1320px] mx-auto mb-[20px]">
        <h1 className="font-bold text-3xl pr-[50px] cursor-pointer">cyber</h1>
        <div className="relative">
          <input
            className="w-[300px] h-[45px] pl-[30px] shadow-lg text-[20px] font-semibold rounded-lg"
            type="text"
            placeholder="search"
          />
          <FcSearch className="absolute top-[8px] left-[5px] text-[20px]" />
        </div>
        <ul className="flex ml-12 space-x-4 p-4 text-2xl font-bold">
          <li className="hover:underline cursor-pointer pr-[20px]">
            <a href="">HOME</a>
          </li>
          <li className="hover:underline cursor-pointer pr-[20px]">
            <a href="">ABOUT</a>
          </li>
          <li className="hover:underline cursor-pointer pr-[100px]">
            <a href="">CONTACT US</a>
          </li>
          <li className="hover:underline cursor-pointer pr-[50px]">
            <a href="">LOGIN</a>
          </li>
          <li className="hover:underline cursor-pointer pr-[px]">
            <a href="">SIGN IN</a>
          </li>
        </ul>
      </div>
      {/* ================================================================================== */}
      <div className="relative w-full h-[100vh] bg-slate-950">
        <div className="relative">
          <Image
            className="absolute left-[60%]"
            src={iphonePic}
            alt="this is iphone pic"
          />
        </div>
        <div className="absolute top-[30%] left-[7%] text-white">
          <h2 className="font-semibold text-[25px] text-slate-400">
            PRE_BEYOND.
          </h2>
          <h1 className="text-white font-semibold text-[85px] font-sans diagonal-fractions">
            iPhone 16 <span className="font-bold text-[90px]">Pro</span>
          </h1>
          <p className="text-slate-400 font-[500] font-mono text-[17px]">
            Created to change everything for the better. For everyone.
          </p>
          <button className=" animated-button hover:shadow-lg cursor-pointer border-4 border-gray-300 text-3xl px-[20px] py-[5px] mt-4 rounded-xl">
            BUY NOW
          </button>
        </div>
      </div>

{/* ============================================================================== */}
      <div className="grid grid-cols-[50%_50%] ">
        <div className="relative">
          <Image
            src={playstation}
            alt="this play station 5 picture"
            className="w-[350px]"
          />
          <div className="absolute top-[100px] left-[310px]">
            <h1 className="font-bold text-5xl font-mono ">PlayStation5</h1>
            <p className="font-[500] text-[15px] text-slate-400 mt-[20px]">
              Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
              will redefine your PlayStation experience.
            </p>
          </div>

          <div className="grid grid-cols-[50%_50%] h-[100%]  ">
            <div className="bg-[#ededed] w-full h-[50%] relative ">
              <Image
                src={airpods}
                alt="this is apple vision picture"
                className="absolute right-[60px] w-[400px]"
              />
              <div className="absolute top-[50%] ">
                <h1 className="text-center text-2xl font-[500]">
                  Apple Vision
                  <span className="font-bold text-[30px]">Pro</span>
                </h1>
                <p className="text-center text-slate-500">
                  An immersive way to experience entertainment.
                </p>
              </div>
            </div>

            <div className="bg-[#353535] w-full h-[50%] relative ">
              <Image alt=" this is airpod picture" src={vision} className="" />
              <div className=" absolute text-center ">
                <h1 className="text-[25px] font-[500] text-white">
                  Apple AirPods Max
                </h1>
                <p className="text-[#909090]">
                  Computational audio. Listen, it's powerful.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="borde  h-[100vh] bg-[#ededed] relative">
          <Image
            src={macbook}
            alt="MacBook picture"
            className="absolute bottom-[200px] w-full"
          />
          <div className="text-center absolute bottom-[90px] w-full">
            <h1 className="mb-[10px] font-[500] text-6xl ">MacBook Air</h1>
            <p className="text-slate-400">
              The new 15-inch MacBook Air makes room for more of what you love
              with a spacious Liquid Retina display.
            </p>
            <button className="animated-button1 bg-[#ededed]">SHOP NOW</button>
          </div>
        </div>
      </div>
      
      {/* ================================================================= */}
      <div className="max-w-[1320px] mx-auto px-4">
  <h1 className="text-3xl font-bold font-mono mt-10 mb-5 sm:mt-12 sm:mb-6 md:mt-16 md:mb-8 lg:mt-20 lg:mb-10">
    Browse by Category
  </h1>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mt-5">
    <div className="product-card bg-gray-100 h-[150px] shadow-lg flex flex-col items-center justify-center pt-4 rounded-2xl">
      <PiHeadsetDuotone className="text-5xl" />
      <h1 className="font-bold mt-4 text-lg sm:text-xl md:text-2xl font-mono">Head Phone</h1>
    </div>
    <div className="product-card bg-gray-100 h-[150px] shadow-lg flex flex-col items-center justify-center pt-4 rounded-2xl">
      <PiGameControllerFill className="text-5xl" />
      <h1 className="font-bold mt-4 text-lg sm:text-xl md:text-2xl font-mono">Game Controller</h1>
    </div>
    <div className="product-card bg-gray-100 h-[150px] shadow-lg flex flex-col items-center justify-center pt-4 rounded-2xl">
      <FaComputer className="text-5xl" />
      <h1 className="font-bold mt-4 text-lg sm:text-xl md:text-2xl font-mono">Computer</h1>
    </div>
    <div className="product-card bg-gray-100 h-[150px] shadow-lg flex flex-col items-center justify-center pt-4 rounded-2xl">
      <BsSmartwatch className="text-5xl" />
      <h1 className="font-bold mt-4 text-lg sm:text-xl md:text-2xl font-mono">SmartWatch</h1>
    </div>
    <div className="product-card bg-gray-100 h-[150px] shadow-lg flex flex-col items-center justify-center pt-4 rounded-2xl">
      <FaCameraRetro className="text-5xl" />
      <h1 className="font-bold mt-4 text-lg sm:text-xl md:text-2xl font-mono">Camera</h1>
    </div>
    <div className="product-card bg-gray-100 h-[150px] shadow-lg flex flex-col items-center justify-center pt-4 rounded-2xl">
      <FaMobileAlt className="text-5xl" />
      <h1 className="font-bold mt-4 text-lg sm:text-xl md:text-2xl font-mono">Mobile</h1>
    </div>
  </div>
</div>

      {/* ====================================================== */}
      <div className="ml-4 mt-8 w-full sm:w-3/4 md:w-1/2 lg:w-[500px]">
  <ul className="flex flex-col sm:flex-row sm:justify-between space-y-4 sm:space-y-0 sm:space-x-4">
    <li className="animated-link text-lg sm:text-base md:text-lg lg:text-xl">
      <a href="">New Arrival</a>
    </li>
    <li className="animated-link text-lg sm:text-base md:text-lg lg:text-xl">
      <a href="">Best Seller</a>
    </li>
    <li className="animated-link text-lg sm:text-base md:text-lg lg:text-xl">
      <a href="">Featured Products</a>
    </li>
  </ul>
</div>


      {/* ====================================================================== */}
      <div className="container mx-auto p-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {items.map((product, index) => (
      <div
        key={index}
        className="bg-[#ededed] shadow-md rounded-lg overflow-hidden h-auto font-mono relative"
      >
        <Image
          src={product.picture}
          alt={product.title}
          className="w-full h-[200px] object-cover"
        />
        <div className="p-4 flex flex-col items-center">
          <p className="font-semibold text-lg md:text-xl lg:text-2xl text-center">{product.title}</p>
          <b className="text-stone-600 font-bold text-xl mt-4">{product.price}</b>
          <button className="awesome-button mt-4 text-base sm:text-lg md:text-xl lg:text-2xl bg-black text-white py-2 px-6 rounded-lg">
            {product.button}
          </button>
        </div>
      </div>
    ))}
  </div>
</div>


      {/* ====================================================================== */}

      <div className="w-full mt-[50px]">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  h-auto">
    {offerProduct.map((value, index1) => (
      <div key={index1} className={`${value.bgColor} p-4 flex flex-col items-center`}>
        <Image
          src={value.Image}
          alt={value.describtion}
          className="w-[300px] h-[300px] max-w-[500px] max-h-[500px] object-cover"
        />
        <div className="w-full max-w-[300px] mx-auto mt-4 text-center">
          <h1 id={index1 === 3 ? "highlighted" : undefined} className="font-semibold text-xl md:text-2xl lg:text-3xl font-mono">{value.tagName}</h1>
          <p className="mt-2 text-base md:text-lg lg:text-xl text-stone-400 font-medium">{value.describtion}</p>
          <h2 className="awesome-button mt-4 text-base md:text-lg lg:text-xl">{value.tag}</h2>
        </div>
      </div>
    ))}
  </div>
</div>

 
 {/* ============================================================================= */}
     
 <div className="w-full mt-[90px] h-[450px] relative">
  <Image src={banner} alt="this is footer banner image" className="w-full h-full object-cover" />
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
    <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin">Big Summer<span className="text-stone-100 font-bold"> Sale</span></h3>
    <p className="text-base sm:text-lg md:text-xl lg:text-2xl mt-3 text-stone-400">Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
    <button className="awesome-button2 mt-4 text-base sm:text-lg md:text-xl lg:text-2xl bg-zinc-700 py-2 px-4 md:px-6 rounded-lg">
      Shop Now
    </button>
  </div>
</div>


 {/* ============================================================================= */}
 <footer className="bg-[#000] w-full h-auto py-10 relative">
  <div className="flex flex-wrap space-x-4 h-full w-full px-4 md:flex-nowrap">
    <div className="mt-10 md:mt-[100px] ml-0 md:ml-[50px] w-full md:w-1/4">
      <h1 className="text-white text-2xl font-bold mb-4">CYBER</h1>
      <p className="text-[#cfcfcf] font-mono">
        We are a residential interior design firm located in Portland. Our boutique-studio offers more than...
      </p>
    </div>
    <div className="mt-10 md:mt-[100px] flex flex-col w-full md:w-1/4 space-y-4">
      <h1 className="text-white text-2xl font-bold mb-4 md:ml-[100px]">SERVICES</h1>
      <div className="flex flex-col space-y-2 text-[#cfcfcf] md:ml-[100px]">
        <span>Bonus Program</span>
        <span>Gift cards</span>
        <span>Credit and payment</span>
        <span>Service contracts</span>
        <span>Non-cash account</span>
        <span>Payment</span>
      </div>
    </div>
    <div className="flex flex-col mt-10 md:mt-[100px] w-full md:w-1/4 space-y-4">
      <h1 className="text-white text-2xl font-bold mb-4">Assistance to the buyer</h1>
      <div className="flex flex-col space-y-2 text-[#cfcfcf]">
        <span>Find an order</span>
        <span>Terms of delivery</span>
        <span>Exchange and return of goods</span>
        <span>Guarantee</span>
        <span>Frequently asked questions</span>
        <span>Terms of use of the site</span>
      </div>
    </div>
  </div>
  <div className="absolute text-4xl text-white bottom-10 left-10 md:bottom-[100px] md:left-[150px]">
    <h3 className="flex space-x-2  sm:mt-[30px]">
      <FaSquareInstagram />
      <FaFacebookSquare />
      <IoLogoLinkedin />
      <FaSquareTwitter />
    </h3>
  </div>
</footer>

    


      













 {/* ============================================================================= */}

    </div>
  );
}
