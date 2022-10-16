import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'



const Footer = () => {
    return (
        <div className="footer">
            <img src="images/footer.png" alt="" className="footerImg" />
            <img src="images/footer-back-2.png" alt="" className="footerImg footerImg-m" />
            <div className="footerTop">
                <div className="footer-content">
                    <h2>Interested in a career at FS MultiChain?</h2>
                    <p>We are always looking out for exceptional talent, please click the button below for our current vacancies.</p>
                    <div class="FBton">
                        <div class="Fbtn1">
                            <button>Vacancies</button>
                            <FontAwesomeIcon icon={faCircleChevronRight} className="arrowicons" />
                        </div>
                    </div>
                </div>
                <hr />
            </div>

            <div className="footeBottom">
                <div className="box box1">
                    <img src="images/footerLogo.png" alt="" />
                    <h2>Fantom Starter</h2>
                    <ul>
                        <a href="#">About</a>
                        <a href="#">litepaper</a>
                        <a href="#">audit</a>
                        <a href="#">Scout Program</a>
                    </ul>
                </div>
                <div className="box" style={{marginTop:"60px"}}>
                <h2>Help</h2>
                    <ul>
                        <a href="#">FAQ</a>
                        <a href="#">Contact</a>
                        <a href="#">Careers</a>
                    </ul>
                </div>
                <div className="box" style={{marginTop:"110px"}}>
                <h2>Socils</h2>
                    <ul>
                        <a href="#">Twitter</a>
                        <a href="#">Telegram</a>
                        <a href="#">Discord</a>
                        <a href="#">Github</a>
                        <a href="#">Blog</a>
    
                    </ul>
                </div>
                <div className="box BtnBox" style={{marginTop: "-80px", marginBottom:"0"}} >
                <div class="FBton">
                        <div class="Fbtn1">
                            <button>Start Investing</button>
                            <FontAwesomeIcon icon={faCircleChevronRight} className="arrowicons" />
                        </div>
                    </div>
                    <li>
                        <img src="images/Socials.png" alt="" />
                        <img src="images/Socials (1).png" alt="" />
                        <img src="images/Socials (2).png" alt="" />
                        <img src="images/Socials (3).png" alt="" />
                    </li>
            
                </div>
            </div>
        </div>
    )
}

export default Footer