import WhyChooseUs from "../components/HomeComponents/WhyChooseUs";
import HowItWorks from "../components/HomeComponents/HowItWorks";
import AboutUs from "../components/HomeComponents/AboutUs";
import HomeComponent from "../components/HomeComponents/HomeComponent";
import HomeCards from "../components/HomeComponents/HomeCards";
import FeaturedProducts from "../components/HomeComponents/FeaturedProducts";
import Category from "../components/HomeComponents/Category";
import Footer from "../components/Footer";
import Testimonials from "../components/HomeComponents/Testimonials";
import { useEffect } from "react";
import Contact from "../components/HomeComponents/Contact";
import Navbar from "../components/Navbar";
import Login from "./Authenticate/Login";
import About from "./about";
import Wishlist from "./Wishlist";
import Sell from "./Sell";
import Sell2 from "./Sell2";

export default function Home({wishlist, addToWishlist}) {
  console.log(wishlist, addToWishlist);
  useEffect(()=>{
    document.title = 'Metal Station'; 
  },[])
  return (
    <>
      {/* <Navbar/>
      <HomeComponent/>
      <HomeCards/>
      <WhyChooseUs />
      <HowItWorks />
      <AboutUs />
      <FeaturedProducts />
      <Category />     
      <Testimonials/>
      <Contact wishlist={wishlist} addToWishlist={addToWishlist} /> 
      <Footer /> */}
      {/* <Wishlist wishlist={wishlist}/> */}
      <Sell/>
      {/* <Sell2/> */}
    </>
  )
}
