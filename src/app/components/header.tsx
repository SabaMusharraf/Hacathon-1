import Image from "next/image";
import logo from "../images/Group 11.png"

export default function (){
    return (
        <div>
            <div className="header">
            <Image className="logo" src={logo} alt="logo"></Image>
            <ul className="headButtons">
                <li className="main"> <u>Main</u></li>
                <li>Gallery</li>
                <li>Projects</li>
                <li>Certifications</li>
                <li>Contacts</li>
            </ul>
            </div>
        </div>
    )
}