import Details from "../../components/details"

  import './about.css'


  const About = ()=>{

const data = {
  class:"aboutTile",
  title:'Who we are & What we stand for?',
  content:'Turgot USA started in September of 2007. From the beginning, our goal was simple: to provide our shippers and carriers with more options when it comes to managing shipments and drivers.We bring dedicated personnel and innovative solutions to each client and shipment. Reliability, trust, and innovation are the building blocks of Turgot USA.',
  imgUrl:'http://www.turgotusa.com/wp-content/uploads/2022/01/about.jpg'
}

    return (
        <div className="about">
          <div className="AboutTile">
            <img src="http://www.turgotusa.com/wp-content/uploads/2022/01/about-header-1.jpg" alt="img" />
            <h1>About Us</h1>
          </div>
         <div className="infoTile">
          <Details data={data}/>
         </div>
        </div>
    )
  }

  export default About