import React from 'react'
import './midesec.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'


const MidSec = () => {
    return (

        <div className="midSec">
            <div className='midContents'>
            <img src="images/Subtract (1).png" alt="" id='imge2'/>
            <img src="images/Subtract.png" alt="" id='imge1'/>
            <div className="card1">
                <div className="cardContents">
                    <div className="cardleft">
                        <h4>FS Project Post IDO Review: $MGCT > Dec 2021</h4>
                            <h2>MagicCraft</h2>
                        <p>War and conquer MMO Play-To-Earn RPG, launched on Binance Smart Chain, with advanced guild, taxes and economy systems. You team up with other players and build clans to fight with other clans on the platform.</p>
                        <div class="Bton">
                            <div class="btn1">
                                <button>How to invest</button>
                                <FontAwesomeIcon icon={faCircleChevronRight} className="arrowicons" />
                            </div>
                        </div>
                    </div>
                    <div className="cardright">
                        <h3>1189%</h3>
                        <p>Post ido ath</p>
                    </div>

                </div>


            </div>
            </div>

        </div>
    )
}

export default MidSec