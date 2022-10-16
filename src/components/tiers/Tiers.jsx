import React from 'react'
import './tier.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'



const Tiers = () => {
    return (
        <div className="tier">
            {/* <img src="images/back2.png" alt="" className="back2img" /> */}
            <div className="res">
                <div className="Tcontents">
                    <div className="tleft">
                        <h1>Smart Subscription Investment Tiers</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <h5>Start investing from for only 13,500FS</h5>
                        <div class="tBton">
                            <div class="tbtn1">
                                <button>Shope Tiers</button>
                                <FontAwesomeIcon icon={faCircleChevronRight} className="arrowicons" />
                            </div>
                            <div className='compage'>
                            <p>Compage all tears</p>
                            <img src="images/Icon (1).png" alt="" />
                            </div>
                            <div class="tbtn1" id='hideBtn'>
                                <button>How to invest</button>
                                <FontAwesomeIcon icon={faCircleChevronRight} className="arrowicons" />
                            </div>
                        </div>
                    </div>
                    <div className="tright">
                        <img src="images/Group 92 (1) 1.png" alt="" id='Timg'/>
                        <img src="images/cardG.png" alt="" id='Timg2'/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Tiers