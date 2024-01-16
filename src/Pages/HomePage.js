import React, {useEffect} from 'react'
import Banner from '../Components/Banner'
import NavigationBar from '../Components/NavigationBar';
import SliderCarousel from '../Components/SliderCarousel';
import Banner2 from '../Components/Banner2';
import Footer from '../Components/Footer'; 
import AOS from "aos"
import "aos/dist/aos.css"
const HomePage = () => {

    useEffect(() =>{
        AOS.init({duration:2000})
}, [])

  return (
    <div>
      <NavigationBar/>

        <Banner/>

        <SliderCarousel data-aos="fade-up"/>
       <Banner2/>

        <Footer/>
    </div>
  )
}
 
export default HomePage