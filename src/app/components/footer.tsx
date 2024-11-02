import Image from "next/image";
import logo from "../images/Group 11 1.png";
import icon1 from "../images/location.png";
import icon2 from "../images/phoneIcon.png";
import icon3 from "../images/mailIcon.png";
import sM1 from "../images/facebook.png"
import sM2 from "../images/Shape.png";
import sM3 from "../images/Linked In.png";
import sM4 from "../images/Shape (1).png"
export default function Footer (){
    return (
        <div>
            <div className="fMainDiv">
            <div className="footer">

                <Image className="fLogo" src={logo} alt="logo"></Image>
                <ul>
                    <li className="fMHeading">Information</li>
                    <li className="fSHeadings">Main</li>
                    <li className="fSHeadings">Gallery</li>
                    <li className="fSHeadings">Projects</li>
                    <li className="fSHeadings">Certification</li>
                    <li className="fSHeadings">Contacts</li>
                </ul>
                <ul>
                    <li className="fMHeading">Contacts</li>
                    <li> <Image className="fImage" src={icon1} alt="locationIcon"></Image> <p className="para"> 1234 sample street </p> </li>
                   <p className="para2">Austin Texas 78704</p>
                   {/* <li className="margin" > <Image className="fImage" src={icon2} alt="phoneIcon"></Image> <p className="para"> 512.333.2222 </p></li>
                   <li className="margin"> <Image className="fImage" src={icon3} alt="mailIcon"></Image> <p className="para"> sampleemail@gmail.com </p></li> */}
                  
                   
                    {/* {/* <li className="fSHeadings"><p><Image className="fImage" src={icon1} alt="locationImage"></Image> 1234 sample street</p></li>
                   <p className="para">Austin Texas 78704</p> */}
                   
                     <li className="fSHeadings1"><Image className="fImage" src={icon2} alt="phoneImage"></Image><p className="paragraph">  512.333.2222</p></li>
                     <li className="fSHeadings2"><Image className="fImage" src={icon3} alt="mailImage"></Image> <p className="paragraph"> sampleemail@gmail.com</p></li> 
                </ul>
                
                <ul>
                    
                    <li className="fMHeading">Social Media</li>
                    <ul className="inlineIcons">
                    <li><Image className="socialMedia" src={sM1} alt="facebookIcon"></Image></li>
                    <li><Image className="socialMedia" src={sM2} alt="tweeterIcon"></Image></li>
                    <li><Image className="socialMedia" src={sM3} alt="linkedinIcon"></Image></li>
                    <li><Image className="socialMedia" src={sM4} alt="shape"></Image></li>
                    </ul>
                    
                </ul>
             
                
            
            </div>
            <hr />
            <div className="div2">
            <p className="copyRight">&copy; 2021 All Right Reserved</p>
            </div>
        </div>
        </div>
    )
}