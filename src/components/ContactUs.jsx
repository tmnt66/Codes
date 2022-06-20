import ContactDetails from "./contactDetail"



const ContactUs = () => {
    const data = [
        {
            id: 1,
            title: 'Office address',
            content: '1712 Pioneer Ave, Suite 651 Cheyenne, WY 82001',
            imgUrl: 'http://www.turgotusa.com/wp-content/themes/TurgotTheme/img/contact-location.svg'
        },
        {
            id: 2,
            title: 'Email Address',
            content: 'info@turgotusa.com',
            imgUrl: 'http://www.turgotusa.com/wp-content/themes/TurgotTheme/img/contact-mail.svg'
        },
        {
            id: 3,
            title: 'Phone Number',
            content: '307-459-2238',
            imgUrl: 'http://www.turgotusa.com/wp-content/themes/TurgotTheme/img/contact-call.svg'
        }
    ]




    return (
        <div className="contact">
            <div className="contact_title">
                <h1>Contact Us</h1>
                <p>We are available 24/7 via fax, telephone and Email</p>
            </div>
            <div className="contactInfo">
      { data.map((data) => (
                <ContactDetails data={data} />
                ))}
            </div>
        </div>
    )
}


export default ContactUs