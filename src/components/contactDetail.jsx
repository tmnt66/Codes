
import './styling/ContactUs.css'

const ContactDetails = (props)=>{
    return(
        <div className="contactCard">
            <img src={props.data.imgUrl} alt="img" />
            <div className="contactdetails">
                <h4>{props.data.title}</h4>
                <p>{props.data.content}</p>
            </div>
        </div>
    )
}

export default ContactDetails