import './styling/footer.css'

const Footer = ()=>{
    return(
        <footer>
        <div className="logo2">
            <img src="http://www.turgotusa.com/wp-content/themes/TurgotTheme/img/footer logo.svg" alt="img"/>
        </div>
        <ul className="foot-links">
            <li className="foot-items">SHIPPERS</li>
            <li className="foot-items">CARRIERS</li>
            <li className="foot-items">SERVICES</li>
            <li className="foot-items">ABOUT</li>
            <li className="foot-items">CONTACT</li>
        </ul>
        <div className="foot-buttons">
            <button className="btn2">info@turgotusa.com</button>
            <button className="btn2">420-420-4200</button>
        </div>
        <div className="social">
          <img src="http://www.turgotusa.com/wp-content/themes/TurgotTheme/img/footer facebook.svg" alt="img"/>
          <img src="http://www.turgotusa.com/wp-content/themes/TurgotTheme/img/footer insta.svg" alt="img"/>
           <img src="http://www.turgotusa.com/wp-content/themes/TurgotTheme/img/footer twitter.svg" alt="img"/>
        </div>
        <div className="credits">
            <hr/>
            <p>©Copyright 2022 Turgot | Privacy Policy</p>
            <p>Designed with love by The Website Times</p>
        </div>
    </footer>
    )
}

export default Footer