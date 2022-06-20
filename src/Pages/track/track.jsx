import Button1 from "../../components/button"
import './track.css'


const Track = ()=>{
    return (
        <div className="track">
            <div className="title">
            <h1>Track Your Order</h1>
            </div>
            <div style={{fontSize:'20px'}}>Enter Consignment No. Here</div>
            <form>
                <div className="trackform">
                    <input className="formInput" placeholder="Enter Your Number"/>
                    <Button1 title="TRACK RESULT"/>
                </div>
            </form>
        </div>
    )
  }

  export default Track