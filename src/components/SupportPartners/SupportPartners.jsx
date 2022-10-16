import React from "react";
import "./SupportPartners.css";
// import fantom from "../../../public/images/fontom.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";

const SupportPartners = () => {
  return (
    <div className="SuppPartContainer">
      <div className="SupportPartners">
        <div className="topcon">
          <img src="images/Mask group.jpg" alt="" className="topImag"/>
          <div className="top">
            <div className="topLeft">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="topRight">
              <h1>Supporting Partners</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
                voluptas alias, commodi nesciunt amet nisi facilis totam iusto
                beatae architecto sunt in dicta sit nemo tempore obcaecati
                mollitia esse. Sit? Lorem ipsum dolor sit amet consectetur,
                
              </p>
            </div>
          </div>
        </div>
        
        <div className="btm">
        <div className="center">
          <li>
            <img src="images/fontom.png" alt="" />
          </li>
          <li>
            <img src="images/fontom.png" alt="" />
          </li>
          <li>
            <img src="images/fontom.png" alt="" />
          </li>
          <li>
            <img src="images/fontom.png" alt="" />
          </li>
        </div>
        <div className="bottom">
          <div className="btmLeft">
            <h2>Stay up to date</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              assumenda quod ut molestias eaque fuga cum explicabo suscipit
              voluptate illo, molestiae animi praesentium quia sit laborum
              beatae saepe dolore magni!
            </p>
            <span>
              <div class="subscribe">
                <input type="text" placeholder="Email Address" id="input" />
                <FontAwesomeIcon
                  icon={faCircleChevronRight}
                  className="arrowicon"
                />
              </div>
            </span>
          </div>
          <div className="btmRight">
            <div>
              <span>
                <p className="smallBox"></p>
              </span>
              <span>
                <p className="smallBox"></p>
              </span>
            </div>
            <div>
              <span>
                <h3>Header</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit.
                </p>
              </span>
              <span>
                <h3>Header</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit.
                </p>
              </span>
            </div>
            <div>
              <span>
                <h3>Bottom</h3>
              </span>
              <span>
                <h3>Bottom</h3>
              </span>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPartners;
