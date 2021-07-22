import React, {useEffect} from 'react'
import './modal.css'
import { AiOutlineClose } from "react-icons/ai";


const Modal = ({ handleClose, show, children, resumeData }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    
    if(show === true) {
      document.body.style.overflow = 'hidden';
    }
    if(show === false) {
      document.body.style.overflow = 'auto';
    }

    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <h2 style={{marginTop: '2%', textAlign: 'center', marginBottom: '5%'}}>{resumeData.name} <AiOutlineClose type="button" style={{cursor: 'pointer', float: 'right', marginRight: '2%', marginTop: '1px'}} onClick={handleClose}></AiOutlineClose> </h2>
          <div style={{ width: '100%', height: '50%'}}>
            <div style={{width: '50%', float: 'left', marginLeft: '2%'}} className="column">
              <img src={`${resumeData.imgurl}`}></img>
            </div>
            <div style={{width: '40%', float: 'right', marginRight: '2%'}} className="column">
              <h1 style={{textAlign: 'center'}}>Description</h1>
              <p>{resumeData.description}</p>
              <h1 style={{textAlign: 'center'}}>Technology</h1>
              <p>{resumeData.tech}</p>
              <div>Icon 1</div>
              <div>Icon 2</div>
            </div>
          </div>
          {children}

        </section>
      </div>
      

    );
  };

export default Modal;