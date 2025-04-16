
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import "./About.css"

const About = () => {
  return (
    <>
 
    <section className="about-section">
<div className="about-display-container">


<div>
    <div>

        
        <FaYoutube className="about-icon" />
         </div>
    <div><FaLinkedin className="about-icon"  /> </div>
    <div><FaInstagram  className="about-icon"  /> </div>
    <div><FaFacebook className="about-icon" /> </div>
   </div>
<div className="about-second-section">
    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur</p>
<p>Erat placerat. In iaculis arcu eros, eget tempus orci facilisis id. Praesent lorem orci, mattis non efficitur id, ultricies vel nibh. Sed volutpat lacus vitae gravida viverra. Fusce vel tempor elit. Proin tempus, magna id scelerisque vestibulum, nulla ex</p>
<p>Pharetra sapien, tempor posuere massa neque nec felis. Aliquam sem ipsum, vehicula ac tortor vel, egestas ullamcorper dui. Curabitur at risus sodales, tristique est id, euismod justo. Mauris nec leo non libero sodales lobortis. Quisque a neque pretium, dictum tellus vitae, euismod neque. Nulla facilisi. Phasellus ultricies dignissim nibh ut.</p>
Nam et quam sit amet turpis finibus maximus tempor eget augue. Aenean at ultricies lorem. Sed egestas ligula tortor, sit amet mattis ex feugiat non. Duis purus diam, dictum et ante at, commodo iaculis urna. Aenean lacinia, nisl id vehicula condimentum, enim massa.

</div>
</div>

  

    </section></>
    
  )
}

export default About