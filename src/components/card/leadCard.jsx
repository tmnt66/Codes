import '../styling/leadCards.css'
const LeadCard = (props) => {
    // console.log(props)
    return (
        <>
        <div className="Leadcards">
            <h2>{props.data.title}</h2>
            <p>{props.data.content}</p>
        </div>
        
        </>
    )
}

export default LeadCard