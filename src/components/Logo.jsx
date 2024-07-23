import LogoM from "../assets/logo-header.svg"
import FooterLogos from "../assets/logo-footer.svg"

const Logo = () => {

    return (
        <div>
         <img style={{width:"253px",height:"44px"}}src={LogoM} alt="Logo marca Digital Store" />
        </div>
      );
}
export const FooterLogo = () => {

  return (
      <div>
       <img style={{width:"253px",height:"44px"}}src={FooterLogos} alt="Logo marca Digital Store" />
      </div>
    );
}
 
export default Logo;
