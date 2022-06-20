import OurServices from "../../components/services"

const Services = ()=>{
    return (
        <div className="Services_page">
         <div className="shippersTile">
                <img src="http://www.turgotusa.com/wp-content/themes/TurgotTheme/img/services-header.jpg" alt="img" />
                <h1>Services we Offer</h1>
            </div>
            <div className="services_temp">
                <OurServices/>
            </div>

        </div>
    )
  }

  export default Services