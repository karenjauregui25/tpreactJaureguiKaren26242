import "./Footer.css";
import whatsapp from "../../assets/social.png";
import instagram from "../../assets/instagram.png";

export const Footer = () => {
  
return ( <footer>
      
     <div className="social-icons"> <div className="whatsapp"> 
      <img src={whatsapp} alt="WhatsApp" /> <span>WhatsApp</span> </div> <div className="instagram"> 
      <img src={instagram} alt="Instagram" /> <span>Instagram</span> </div> </div> </footer> );

}