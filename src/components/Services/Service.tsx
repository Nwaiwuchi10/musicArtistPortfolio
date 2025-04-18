
import p9 from "../../assets/Images/net.jpeg"
import "./Service.css"
const Service = () => {
  return (
    <div >
        <h2 className="service-h2">Services</h2>
        <div className="service-content-display">

            <div>

            <h3>Live Performances & Concerts</h3>
            <p>Offer an electrifying performance on musical concert, crusades, conferences, and gospel concerts through live music.</p>
           <p>
           Explore</p>
           <h3>Songwriting</h3>
           <p>Offer services like writing gospel songs & collaboration with other musical artists.</p>
           <p>
           Explore</p>
            </div>
            <div className="div-p9-img" > <img src={p9} /></div>
            <div> <h3>Music Production</h3>
            <p>Offers music production, Recording, Voice Backup and Live Mix</p>
           <p>
           Explore</p>
           <h3>Mentorship & Music Training</h3>
           <p>Train upcoming gospel artists or worship leaders through workshops, seminars, or one-on-one mentorship.</p>
           <p>
           Explore</p></div>
        </div>
    </div>
  )
}

export default Service