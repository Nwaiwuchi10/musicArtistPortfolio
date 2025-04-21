
import "./Footer.css"
const Footer = () => {
  const socialLinks = {
    linkedin: 'https://www.linkedin.com/in/gbujie-chimauzom-465aa8180?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    youtube: 'https://youtube.com/@chimas0?si=HsvKtyJ1laOneVrj',
    instagram: 'https://www.instagram.com/chimas100?utm_source=qr&igsh=MTBycGpoejBkYmNnYg==',
    facebook: 'https://www.facebook.com/share/1H77QKZfxj/',
    tiktok: 'https://www.tiktok.com/@chimasgbujie?_t=ZM-8vX2uH1R9BV&_r=1',
    audiomack:"https://audiomack.com/Chimas"
  };
  return (
    <section>
        <div className='footer-links'>
<h4><a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer"> Facebook</a> 
</h4>
<h4> <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
</h4>
<h4><a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer">YouTube</a></h4>
<h4><a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a></h4>
        </div>
        <p className='footer-p' style={{marginBottom:"20px"}}>turuchichimas@yahoo.com</p>
        <p className='footer-p'>Copyright © 2025</p>
    </section>
  )
}

export default Footer