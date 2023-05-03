import React from 'react'
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer" >
        <div class="leftFooter">
            <h4>Download out App</h4>
            <p>Download App for Android and IOS</p>
            <img src={playStore} alt="plagStore" />
            <img src={appStore} alt="appStore" />
        </div>

        <div className="midFooter">
            <h1>E-Commerce</h1>
            <p>High Quality is our first priority</p>
            <p>Copyrights 2023 &copy; @names_manishh</p>
        </div>

        <div className="rightFooter">
            <h4>follow us</h4>
            <a href="http://instagram.com/names_manishh">Instagram</a>
            <a href="https://youtu.be/NoapPQtDuSM">Youtube</a>
            <a href="https://www.facebook.com/100004678939271/videos/514536426433480/">Facebook</a>
        </div>
    </footer>
  );
};

export default Footer