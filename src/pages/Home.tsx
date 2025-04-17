import About from "../components/About/About"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import HeroSection from "../components/HeroSection/HeroSection"
import PortFolio from "../components/PortFolio/PortFolio"
import Service from "../components/Services/Service"
import WorkTogetherSection from "../components/Work/Work"





const Home = () => {
  return (
    <div>
        <Header/>
    <HeroSection/>
    <About/>
    <PortFolio/>
    <Service/>
    <WorkTogetherSection />
    <Footer/>
    </div>
  )
}

export default Home