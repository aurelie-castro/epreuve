function Modal (props){
    if(!props.show){
        return null;
    }
    return(
        <div className="modal-class" id="modal">
            <div className="close-icon"><button onClick={props.onClose}>X</button></div>
            <div className="texte-modal">
                <h1>{props.title}</h1>
                <p>{props.children}</p>
            </div>
        </div>  
    );
};

export default Modal;