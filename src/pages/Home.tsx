import About from "../components/About/About"
import Header from "../components/Header/Header"
import HeroSection from "../components/HeroSection/HeroSection"
import PortFolio from "../components/PortFolio/PortFolio"
import Service from "../components/Services/Service"


const Home = () => {
  return (
    <div>
        <Header/>
    <HeroSection/>
    <About/>
    <PortFolio/>
    <Service/>
    </div>
  )
}

export default Home