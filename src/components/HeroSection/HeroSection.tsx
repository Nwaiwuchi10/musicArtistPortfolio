
import "./Hero.css"
import linkImg from "../../assets/Images/8.png"
import linkImg2 from "../../assets/Images/4.png"
import linkImg3 from "../../assets/Images/7.png"
import linkImg4 from "../../assets/Images/link-1.png"
import whatsapp from "../../assets/Images/whatsapp-removebg-preview-Picsart-AiImageEnhancer.png";
const HeroSection = () => {
  const WhatsappClick = () => {
    const phoneNumber = "+15512442572";
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };
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
       
      <div> <div><img src={linkImg2}/> </div>
      <p>
      Biography</p></div>
      <div> <div><img src={linkImg3}/> </div>
      <p>
      Biography</p></div>
      <div> <div><img src={linkImg4}/> </div>
      <p>
      Biography</p></div>
      </div>
      <div className="whatsapp-img-div">
        <div className="whatsapp-img-size" onClick={WhatsappClick}>
          <img src={whatsapp} alt="whatsapp" className="whatsapp-img" />
        </div>{" "}
      </div>
    </section>
    
  )
}

export default HeroSection