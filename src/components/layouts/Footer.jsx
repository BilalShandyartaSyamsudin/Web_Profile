import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-icons">
        <a href="https://www.instagram.com/bilal.shandyarta/" target="_blank">
          <img src="./src/assets/img/instagram_2111463.png" alt="" width={24} height={24} viewbox="0 0 24 24"/>
        </a>
        <a href="https://github.com/BilalShandyartaSyamsudin" target="_blank">
          <img src="./src/assets/img/github_733553.png" alt="" width={24} height={24} viewbox="0 0 24 24"/>
        </a>
        <a href="https://www.linkedin.com/in/bilal-shandyata-syamsudin-731057253/" target="_blank">
          <img src="./src/assets/img/linkedin_174857.png" alt="" width={24} height={24} viewbox="0 0 24 24"/>
        </a>
      </div>
      <p>&#169; 2024 All Right Reserved</p>
    </footer>
  );
}

export default Footer;
