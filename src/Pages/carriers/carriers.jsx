import ContactUs from "../../components/ContactUs"
import Details from "../../components/details"
import Form from "../../components/form"
import Button1 from '../../components/button'
import './carrier.css'
const Carrier = ()=>{
    const data = {
        class: "aboutTile",
        title:'Provide shipping solutions in the most effective way',
        content:'We know that our Carriers keep our business up and running. You have our support in every step of the process. When you drive with us, we work hard to get you the highest paying loads.  Plus, we go the extra mile to set you up with factoring services so that you are paid quickly for every load.',
        imgUrl: 'http://www.turgotusa.com/wp-content/uploads/2022/01/carriers.jpg'
    }
    return (
        <div className="Carrier">
          <div className="carrierTile">
                <img src="http://www.turgotusa.com/wp-content/uploads/2022/01/header-1.jpg" alt="img" />
                <h1>Shippers</h1>
            </div>
            <div className="CardTile">
                <Details data={data} />
                <Button1  title='Request Onboarding'/>
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

  export default Carrier