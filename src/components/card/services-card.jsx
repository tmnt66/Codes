import '../styling/service.css'
const ServiceCard = (props) => {
    // console.log(props)
    return (
        <>
        <div className="Servicecards">
            <img src={props.data.imgUrl}   alt="img" />
            <p>{props.data.title}</p>
        </div>
        
        </>
    )
}

export default ServiceCard