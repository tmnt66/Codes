import './styling/from.css'



const Form = () => {
    return (
        <div className="form1">
            <h1>Request a Shipping Quote</h1>
            <div className="name1">
                <input placeholder="Enter your firstname" type="text" />
                <input placeholder="Enter your lastname" type="text" />
            </div>
            <input placeholder="Enter your Number" type="text" />
            <input placeholder="Enter your E-mail" type="text" />
            <input placeholder="Enter your Company Name" type="text" />
            <textarea placeholder="Enter your Specification" />
            <button className="form-btn">Submit your Quote Report</button>
        </div>
    )
}

export default Form