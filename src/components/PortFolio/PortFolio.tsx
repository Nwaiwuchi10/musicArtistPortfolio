import img1 from "../../assets/Images/1.png"
import img2 from "../../assets/Images/2.png"
import img3 from "../../assets/Images/3.png"
import img4 from "../../assets/Images/4.png"
import img5 from "../../assets/Images/5.png"
import img6 from "../../assets/Images/6.png"
import img7 from "../../assets/Images/7.png"
import img8 from "../../assets/Images/8.png"
import "./PortFolio.css"
const PortFolio = () => {
  return (
    <section className="portfolio-section">
<div className="portfolio-title-div">
<h2>Portfolio</h2>
<h3>Book Artist</h3>

</div>
<div className="portfolio-img-div-display">

    <div><img src={img1} /> </div>
    <div><img src={img2} /> </div>
    <div><img src={img3} /> </div>
    <div><img src={img4} /> </div>
    <div><img src={img5} /> </div>
    <div><img src={img6} /> </div>
    <div><img src={img7} /> </div>
    <div><img src={img8} /> </div>
   

</div>
    </section>
  )
}

export default PortFolio