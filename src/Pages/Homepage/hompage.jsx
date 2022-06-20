import Button1 from "../../components/button"
import ChooseCard from "../../components/card/card"
import Lead from "../../components/leadBoard"
import OurServices from "../../components/services"
import './homepage.css'

const Homepage = () => {

    const Cardata = [
        {
            id: 1,
            imgUrl: 'http://www.turgotusa.com/wp-content/themes/TurgotTheme/img/choose us 1.svg',
            title: 'Data Management',
            content: 'We will book loads for your trucks and submit the BOL (Bill of Lading) and Rate Cons to the factoringcompany so you get paid ON TIME.'
        },
        {
            id: 2,
            imgUrl: 'http://www.turgotusa.com/wp-content/themes/TurgotTheme/img/choose us 1.svg',
            title: 'Data Management',
            content: 'We will book loads for your trucks and submit the BOL (Bill of Lading) and Rate Cons to the factoringcompany so you get paid ON TIME.'
        },
        {
            id: 3,
            imgUrl: 'http://www.turgotusa.com/wp-content/themes/TurgotTheme/img/choose us 1.svg',
            title: 'Data Management',
            content: 'We will book loads for your trucks and submit the BOL (Bill of Lading) and Rate Cons to the factoringcompany so you get paid ON TIME.'
        }
    ]



    return (
        <div>

            <div className="homepage">
                <img className="Home_main_image" src="http://www.turgotusa.com/wp-content/themes/TurgotTheme/img/hero.jpg" />
                <div className="home_container">
                    <h1>Coast to Coast. Think Logistics. <br /> Think Turgot USA.</h1>
                    <p>Specializing in dry van, reefer, flat bed and power only services.</p>
                    <Button1 title="Get Quote Now!" />
                </div>
            </div>

            <div className="choose">
                <div className="title1">
                    <h1>Why Choose Us?</h1>
                    <p>Discover why companies choose us for their shipping and transportation needs.</p>
                </div>

                {Cardata.map((data) => (
                    <div className="card">
                        <ChooseCard key={data.id} data={data} />
                    </div>
                ))}
            </div>
             <div className="lead">
                <Lead/>
             </div>
             <div className="services">
                <OurServices/>
             </div>


        </div>
    )
}


export default Homepage