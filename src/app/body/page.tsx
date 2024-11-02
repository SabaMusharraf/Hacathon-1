import Image from "next/image";
import img from "../images/Rectangle 6.png";
import img2 from "../images/Rectangle 8.png";
import img3 from "../images/Rectangle 10.png";
import img4 from "../images/Rectangle 9.png";
import image1 from "../images/Rectangle 17.png";
import image2 from "../images/image 15.png"
import img16 from "../images/image 16.png";
import img17 from "../images/image 17.png";
import img18 from "../images/image 18.png";
import projectBtn from "../images/Frame 11.png"
import img12 from "../images/image 12.png"
import btn from "../images/Frame 11 (1).png"
import insideImage from "../images/Group 17.png"
import firstBtn from "../images/Frame 10 (1).png";
import arrow1 from "../images/Frame 9 (1).png";
import arrow2 from "../images/Frame 8.png";
import slide from "../images/slide-numbers.png"
export default function Body (){
    return (
        <div>
            <div className="bDiv1">
            <div className="headings">
                <h1 className="heading1">Project </h1>
                <h1 className="heading2"><b>lorum</b></h1>
                <div className="arrowDiv">
               <button><Image className="arrow1" src={arrow1} alt="arrow"></Image></button> 
                <button><Image className="arrow2" src={arrow2} alt="arrow"/></button>
                </div>
                <Image className="slide" src={slide} alt="slide"></Image>
            </div>
            <div>
           
                <Image className="image1" src={img} alt="buildingImage"></Image>
                <button><Image className="btn1" src={firstBtn} alt="button"></Image></button>
               
            </div>
        </div>
        <div className="bDiv2">
            <div className="sec2">
                <Image className="image2" src={img2} alt="image2"></Image>
                <Image className="image3" src={img3} alt="image2"></Image>
            </div>
            <div className="bDiv3">
                <Image className="image4" src={img4} alt="buildingImage"></Image>
            <div className="bAbout">
                <h1 className="aboutHeading">About</h1>
                <p className="aboutPara">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. </p>
                    <button className="aboutBtn">READ MORE <hr className="aboutHr"></hr> <i className="arrow right"></i></button>
                
            
                    </div>
            </div>
        </div>

      <div className="sec3">
            <p className="secHeading">Main Focus/Mission Statement</p>
    
       <table className="table">
        <tr>
      
            <td className="number">1</td>
            <td className="tablePara">Lorem ipsum dolor sit amet onsectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</td>
      
           
            <td className="number">2</td>
            <td className="tablePara">Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed efficitur, lectus et facilisis placerat,magna mauris porttitor tortor, a auctor est felis ut nisl.</td>
            </tr>
       </table>
       </div>
       <div className="sec4">
        <h1 className="headingSec4">Our Projects</h1>
        <div className="imageBox">
            <Image className="insideImage" src={insideImage} alt="text"></Image>
            <Image className="img1" src={image1} alt="image"></Image>
            <Image className="img2" src={image2} alt="image"></Image>
        </div>
        <div className="imageBox2">
            <Image className="img3" src={img16} alt="image"></Image>
            <Image className="img4" src={img17} alt="image"></Image>
            <Image className="img5" src={img18} alt="image"></Image>
        </div>
        <div className="projectBtn">
           <button> <Image className="btn" src={projectBtn} alt="button"></Image></button>
        </div>
       </div>
        <div className="sec5">
            <h1 className="contactHeading">Contact Us</h1>
            <div className="contact">
            <div >
            <form>
                <p >
                    <input className="input" type="text" name="name" size={15} maxLength={30} placeholder="Name"/>
                </p>
                <p >
                    <input className="input" type="number" name="phoneNumber" size={15} maxLength={60} placeholder="Phone Number"/>
                </p>
                <p >
                    <input className="input" type="email" name="email" size={15} maxLength={60} placeholder="E-mail"/>
                </p>
                <p >
                    <input className="input" type="text" name="interest" size={15} maxLength={60} placeholder="Interested In"/>
                </p>
                <p>
                    <textarea className="messageBox" name="message" placeholder="Message" />
                </p>
    </form>
    </div>
   
    <div className="contactImg">
    <Image className="image16" src={img12} alt="image"></Image>
    </div>
   
    </div>
        </div> <div className="contactBtn">
    <button><Image className="contactBtn" src={btn} alt="button"></Image></button>
    </div>
        </div>
    )
    }