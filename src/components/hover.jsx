import './styling/hover.css'
import { Link } from 'react-router-dom'
const HoverService = (props) => {
    let disp = 'none'
    if (props.show)
        disp = 'block';
    else
        disp = 'none';

    return (
 
            <div className="hoverbox" style={{ display: { disp } }}>
                <div> <Link to='/dryvan'>Dry Van</Link></div>
                <div> <Link to='/reefer'>Reefer</Link></div>
                <div> <Link to='/flatbed'>Flat Bed</Link></div>
                <div> <Link to='/poweronly'>Power Only</Link></div>
            </div>

    )
}


export default HoverService