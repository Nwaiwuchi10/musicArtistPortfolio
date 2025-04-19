
import "./Hero.css"
import linkImg from "../../assets/Images/hy.png"
import linkImg2 from "../../assets/Images/hs.png"
import linkImg3 from "../../assets/Images/kd.png"
import linkImg4 from "../../assets/Images/jk.jpg"
import whatsapp from "../../assets/Images/whatsapp-removebg-preview-Picsart-AiImageEnhancer.png";
const HeroSection = () => {
  const WhatsappClick = () => {
    const phoneNumber = "+2348145306090";
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };
  return (
    < >
      <section className="hero" id="heroSection">
      <div className="hero-content">
        <h2>
A Professional Gospel Musical Artist
          {/* The Fashion Industry through a Lense */}
        </h2>
      </div>
     
    </section>
    <div className="hero-img-flex-container">
      <div> <div><img src={linkImg}/> </div>
      <p>
      <a href="tel:+2348145306090">Get in touch</a>
      </p></div>
       
      <div> <div><img src={linkImg2}/> </div>
      <p>
      <a href="tel:+2348145306090">Get in touch</a></p></div>
      <div> <div><img src={linkImg3}/> </div>
      <p>
      <a href="tel:+2348145306090">Get in touch</a></p></div>
      <div> <div><img src={linkImg4}/> </div>
      <p>
      <a href="tel:+2348145306090">Get in touch</a></p></div>
      </div>
      <div className="whatsapp-img-div">
        <div className="whatsapp-img-size" onClick={WhatsappClick}>
          <img src={whatsapp} alt="whatsapp" className="whatsapp-img" />
        </div>{" "}
      </div>
    </>
    
  )
}

export default HeroSection