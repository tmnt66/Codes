import ContactUs from "../../components/ContactUs"
import Form from "../../components/form"
import ChooseCard from "../../components/card/card"
import './contact.css'
const Contacts = () => {
    const Cardata = [
        {
            id: 1,
            imgUrl: 'http://www.turgotusa.com/wp-content/themes/TurgotTheme/img/icon 1.svg',
            title: 'Apply Job',
        },
        {
            id: 2,
            imgUrl: 'http://www.turgotusa.com/wp-content/themes/TurgotTheme/img/icon 2.svg',
            title: 'As a Carrier',
        },
        {
            id: 3,
            imgUrl: 'http://www.turgotusa.com/wp-content/themes/TurgotTheme/img/icon 4.svg',
            title: 'As a Shipper',
        },
        {
            id: 4,
            imgUrl: 'http://www.turgotusa.com/wp-content/themes/TurgotTheme/img/choose us 1.svg',
            title: 'General Enquiry',
        }
    ]


    return (
        <div className="Contacts">
            <div className="contact_reason">
                <h1>Choose Why Do you want to Contact Us</h1>
                <div className="contact_cards">
                    {Cardata.map((data) => (
                        <div className="card">
                            <ChooseCard key={data.id} data={data} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="form">
                <div className="contactInfo">
                    <ContactUs />
                </div>
                <div className="clientData">
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default Contacts