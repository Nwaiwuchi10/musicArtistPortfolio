
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";
import { SiAudiomack } from "react-icons/si";
import "./About.css"

const About = () => {
  const socialLinks = {
    linkedin: 'https://www.linkedin.com/in/gbujie-chimauzom-465aa8180?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    youtube: 'https://youtube.com/@chimas0?si=HsvKtyJ1laOneVrj',
    instagram: 'https://www.instagram.com/chimas100?utm_source=qr&igsh=MTBycGpoejBkYmNnYg==',
    facebook: 'https://www.facebook.com/share/1H77QKZfxj/',
    tiktok: 'https://www.tiktok.com/@chimasgbujie?_t=ZM-8vX2uH1R9BV&_r=1',
    audiomack:"https://audiomack.com/Chimas"
  };
  return (
    <>
 
    <section className="about-section" id="about">
<div className="about-display-container">


<div>
    <div>

    <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer">
        <FaYoutube className="about-icon" />
      </a>
        {/* <FaYoutube className="about-icon" /> */}
         </div>
    <div>
    <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="about-icon" />
      </a>
      {/* <FaLinkedin className="about-icon"  />  */}
      </div>
    <div>
    <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
        <FaInstagram className="about-icon"/>
      </a>
      {/* <FaInstagram  className="about-icon"  />  */}
      </div>
    <div>
    <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
        <FaFacebook className="about-icon"/>
      </a>
      {/* <FaFacebook className="about-icon" />  */}
      </div>
      <div>
      <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer">
        <FaTiktok className="about-icon" />
      </a>
      </div>
      <div>
      <a href={socialLinks.audiomack} target="_blank" rel="noopener noreferrer">
      <SiAudiomack className="about-icon"/>
  
      </a>
      </div>
   </div>
<div className="about-second-section">
    <p>

   Gbujie Chimauzom Onyenaturuchi aka Chimas is Born and raised in Eastern Nigeria within a devout Christian family, Chimas discovered his passion for music at an early age, inspired by the rich gospel sounds that shaped his spiritual foundation. Surrounded by the harmonies of church choirs and the powerful messages of faith-driven songs, he began to nurture his musical gift with a strong desire to uplift and inspire others through sound. This passion would soon evolve into a calling—one that transcends performance and speaks directly to the soul.
    </p>
<p>As a proud member of the Tunecore community, Chimas h
  
  
  as continued to share his ministry with the world through professionally distributed songs that resonate across different generations and cultures. His sound blends Afro-gospel rhythms with soul-stirring messages, creating a distinct identity that sets him apart in the ever-growing gospel music landscape. Whether through personal devotionals or live worship sessions, his music carries a message of hope, redemption, and purpose.</p>
<p>Outside the studio, Chimas is a dedicated realtor and building contractor, driven by integrity and excellence in every venture. His life is a testament to faith in action—balancing music, ministry, and entrepreneurship while remaining grounded in his values.

</p>


</div>
</div>

  

    </section></>
    
  )
}

export default About