import About from "../components/About/About"
import Header from "../components/Header/Header"
import HeroSection from "../components/HeroSection/HeroSection"
import PortFolio from "../components/PortFolio/PortFolio"


const Home = () => {
  return (
    <div>
        <Header/>
    <HeroSection/>
    <About/>
    <PortFolio/>
    </div>
  )
}

export default Home