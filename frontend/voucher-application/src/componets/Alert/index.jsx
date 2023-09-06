function Alert(props){
    return(props.posivite?
    <div className="Alert alert alert-success d-flex align-items-center fixed bottom-0 right-0 duration-1000" role="alert" style={{"opacity":props.opacity}}>
        <i className="fa-solid fa-circle-check"></i>
        <div>
            {props.message}
        </div>
    </div>
    :
    <div className="alert alert-danger d-flex align-items-center fixed bottom-0 right-0 duration-1000" role="alert" style={{"opacity":props.opacity}}>
        <i className="fa-solid fa-circle-xmark"></i>
        <div>
            {props.message}
        </div>
    </div>)
}

export default Alert;