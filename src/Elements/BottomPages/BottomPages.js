import React from "react";
import "../BottomPages/BottomPages.css"

const BottomPages =()=>{

    return(<>
    <footer className="footer">
  <div className="footer__addr">
    <h1 className="footer__logo">Something</h1>
        
    <h2>Contact</h2>
    
    <div>
      Liên hệ Mail<br/>
          
      <div className="footer__btn" href="mailto:example@gmail.com">Email Us</div>
    </div>
  </div>
  
  <ul className="footer__nav">
    <li className="nav__item">
      <h2 className="nav__title">Iphone</h2>

      <ul className="nav__ul">
        <li>
          <div href="#">Sam Sung</div>
        </li>

        <li>
          <div href="#">Lap Top</div>
        </li>
            
        <li>
          <div href="#">.......</div>
        </li>
      </ul>
    </li>
    
    <li className="nav__item nav__item--extra">
      <h2 className="nav__title">Sony</h2>
      
      <ul className="nav__ul nav__ul--extra">
        <li>
          <div href="#">Smart Phone</div>
        </li>
        
        <li>
          <div href="#">.........</div>
        </li>
        
        <li>
          <div href="#">Digital Signage</div>
        </li>
        
        <li>
          <div href="#">Automation</div>
        </li>
        
        <li>
          <div href="#">Artificial Intelligence</div>
        </li>
        
        <li>
          <div href="#">IoT</div>
        </li>
      </ul>
    </li>
    
    <li className="nav__item">
      <h2 className="nav__title">Đồng hồ</h2>
      
      <ul className="nav__ul">
        <li>
          <div href="#">Máy Tính</div>
        </li>
        
        <li>
          <div href="#">Điện Thoại </div>
        </li>
        
        <li>
          <div href="#">CPU</div>
        </li>
      </ul>
    </li>
  </ul>
  
  <div className="legal">
    <p>&copy; 2024 E-commerce- Nguyễn Văn Tú </p>
    
    <div className="legal__links">
      <span> year <span className="heart">♥</span> 2024 </span>
    </div>
  </div>
</footer>
    </>);
};
export default BottomPages;