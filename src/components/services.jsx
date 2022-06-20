import ServiceCard from './card/services-card'
import './styling/service.css'

const OurServices = ()=>{

    const services_data=[
        {
            id:1,
            title:'Dry Van',
            imgUrl:'http://www.turgotusa.com/wp-content/uploads/2022/01/service1-2.jpg'
        },
        {
            id:2,
            title:'Reefer',
            imgUrl:'http://www.turgotusa.com/wp-content/uploads/2022/01/service2-1.jpg'
        },
        {
            id:3,
            title:'Flatbed',
            imgUrl:'http://www.turgotusa.com/wp-content/uploads/2022/01/service3-1.jpg'
        },
        {
            id:4,
            title:'Power Only',
            imgUrl:'http://www.turgotusa.com/wp-content/uploads/2022/01/service4-1.jpg'
        }
    ]
    return(
<>
<div className="services_container">
    <h1>Services We Offer</h1>
    <div className="bar"></div>
    <div className="services_cards">
{
    services_data.map((data)=>(
        <ServiceCard data={data}/>
    ))
}
</div>
</div>



</>
    )
}

export default OurServices