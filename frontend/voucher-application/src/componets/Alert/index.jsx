function Alert(props){
    return(props.positive?
    <div className="Alert alert alert-success d-flex align-items-center w-1/6 fixed bottom-0" role="alert">
        <i className="fa-solid fa-circle-check"></i>
        <div>
            {props.message}
        </div>
    </div>
    :
    <div className="alert alert-danger d-flex align-items-center w-1/6 fixed bottom-0 right-0" role="alert">
        <i className="fa-solid fa-circle-xmark"></i>
        <div>
            {props.message}
        </div>
    </div>)
}

export default Alert;