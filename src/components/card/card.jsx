
import '../styling/card.css'

const ChooseCard = (props) => {
    // console.log(props)
    return (
        <>
        <div className="cards contact_card">
            <img className="ChooseCardImg" src={props.data.imgUrl} alt="img" />
            <h3>{props.data.title}</h3>
            <p>{props.data.content}</p>
        </div>
        
        </>
    )
}

export default ChooseCard