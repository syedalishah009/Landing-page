import React from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div class="header">
            <div class="upper">
                <div class="head-left">
                    <h4>opportunity Awaits</h4>
                    <h1>Invest or raise capital
                        on any blockchain</h1>
                    <p>We’re an opportunity starter that enables investors to participate first in the most promising
                        projects and products with solid business plans to win top blockchain opportunities. Hold $FS
                        to access hand-picked projects’ token sales and other distinctive features.</p>
                </div>
                <div class="head-right">
                    <img src="images/head.png" alt="" />
                </div>
            </div>
            <div class="lower">
                <div class="btn">
                    <button>How to invest</button>
                    <FontAwesomeIcon icon={faCircleChevronRight} className="arrowicon" />
                </div>
                <div class="btn">
                    <button>Tier benefits</button>
                    <FontAwesomeIcon icon={faCircleChevronRight} className="arrowicon" />
                </div>
                <div class="btn">
                    <button>app.fantomstarter</button>
                    <FontAwesomeIcon icon={faCircleChevronRight} className="arrowicon" />
                </div>
                <div class="btn">
                    <button>Apply as a Project</button>
                    <FontAwesomeIcon icon={faCircleChevronRight} className="arrowicon" />
                </div>

            </div>
            <div className="bottom">
                <img src="images/fontom.png" alt="" />
                <img src="images/fontom.png" alt="" />
                <img src="images/fontom.png" alt="" />
                <img src="images/fontom.png" alt="" />
            </div>
        </div>
    )
}

export default Header