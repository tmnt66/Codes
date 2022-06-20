import './styling/leadBoard.css'
import './styling/leadCards.css'
import LeadCard from './card/leadCard'
const Lead = () => {
    const lead_data=[
        {
            id:1,
            title:'150+',
            content:'Current Trucks'
        },
        {
            id:2,
            title:'38+',
            content:'Dedicated Lanes'
        },
        {
            id:3,
            title:'116+',
            content:'Shipper & Broker Relationship'
        }
    ]
    return (
        <div className="leadWrapper">
            <div className="lead_about">
                <div className="sign">
                    <img src="http://www.turgotusa.com/wp-content/themes/TurgotTheme/img/shape 1.svg"  alt='img'/>
                    <img src="http://www.turgotusa.com/wp-content/themes/TurgotTheme/img/shape 1.svg" alt='img' />
                </div>
                <div className="lead_content">
                    <h1>Since 2007, Turgot USA has been a leader in providing freight and dispatch services.</h1>
                    <p>Our capabilities, skills, professionalism and experience have resulted in an honored reputation and many long term relationships. With over 300 solid and proven relationships with freight shippers and brokers in multiple commodity industries, we will incorporate best practices with optimal standards in the industry to keep your freight moving.</p>
                </div>
                <div className="sign">
                    <img src="http://www.turgotusa.com/wp-content/themes/TurgotTheme/img/shape 1.svg"  alt='img' />
                    <img src="http://www.turgotusa.com/wp-content/themes/TurgotTheme/img/shape 1.svg" alt='img' />
                </div>
            </div>

<div className="lead_data">
{
    lead_data.map((data)=>(
        <LeadCard data={data}/>
    ))
}
</div>

        </div>
    )
}


export default Lead