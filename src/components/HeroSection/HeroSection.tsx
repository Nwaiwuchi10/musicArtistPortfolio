
import "./Hero.css"
import linkImg from "../../assets/Images/link-1.png"
const HeroSection = () => {
  return (
    <section>
      <section className="hero">
      <div className="hero-content">
        <h2>The Fashion Industry through a Lense
        </h2>
      </div>
     
    </section>
    <div className="hero-img-flex-container">
      <div> <div><img src={linkImg}/> </div>
      <p>
      Biography</p></div>
       
      <div> <div><img src={linkImg}/> </div>
      <p>
      Biography</p></div>
      <div> <div><img src={linkImg}/> </div>
      <p>
      Biography</p></div>
      <div> <div><img src={linkImg}/> </div>
      <p>
      Biography</p></div>
      </div>
    </section>
    
  )
}

export default HeroSection