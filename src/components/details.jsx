import './styling/details.css'


const Details = (props)=>{
return(
    <div className='tile' >
        <img src={props.data.imgUrl} alt="img" />
        <div className="content">
            <h2>{props.data.title}</h2>
            <p>{props.data.content}</p>
        </div>
    </div>
)
}

export default Details