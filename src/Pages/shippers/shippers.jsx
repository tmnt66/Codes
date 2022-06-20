import ContactUs from "../../components/ContactUs"
import Details from "../../components/details"
import Form from "../../components/form"
import './shippers.css'


const Shippers = () => {
    const data = {
        class: "aboutTile",
        title:'Turgot USA is one of North America’s most reliable and safest trucking companies.',
        content:'We are a non-asset based truckload service provider, with added capacity through our brokers. Our shipping solutions include dry van, reefer, flatbed and power only services.Throughout the years, we’ve expanded our network of highly talented and professional carriers to ensure the most efficient, cost-effective deliveries.',
        imgUrl: 'http://www.turgotusa.com/wp-content/uploads/2022/01/shippers.jpg'
    }

    return (
        <div className="shippers">
            <div className="shippersTile">
                <img src="http://www.turgotusa.com/wp-content/uploads/2022/01/header.jpg" alt="img" />
                <h1>Shippers</h1>
            </div>
            <div className="infoTile">
                <Details data={data} />
            </div>
            <div className="form">
                <div className="contactInfo">
                       <ContactUs/>
                </div>
                <div className="clientData">
                  <Form/>
                </div>
            </div>
        </div>
    )
}

export default Shippers