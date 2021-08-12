import React, {useEffect} from 'react'
import './modal.css'
import { AiOutlineClose } from "react-icons/ai";
import { GrGithub } from "react-icons/gr";
import { AiFillPlayCircle } from "react-icons/ai";



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
          <div className="column" style={{ width: '100%', justifyContent: 'center'}}>
            <div className="row">
              <h2 style={{textAlign: 'center'}}>{resumeData.name} <AiOutlineClose type="button" style={{cursor: 'pointer', float: 'right', marginRight: '2%', marginTop: '1px'}} onClick={handleClose}></AiOutlineClose> </h2>
            </div>
            <div className="row" style={{justifyContent: 'center'}}>
              <h1 style={{textAlign: 'start', margin: '0'}}>Description</h1>
              <p>{resumeData.description}</p>
            </div>
            <div className="row">
              <h1 style={{textAlign: 'start', margin: '0'}}>Technology</h1>
              <p>{resumeData.tech}</p>
            </div>
            <div className="row" style={{display: 'flex', flex: 'block', justifyContent: 'center'}}>
              <a href={resumeData.live} target="_blank"><AiFillPlayCircle size={40} color="black"/></a>
              <a href={resumeData.code} target="_blank"> <GrGithub size={40} color="black" /></a>
            </div>
            <div className="row" style={{justifyContent: 'center'}}>
              <img src={`${resumeData.imgurl}`}></img>
            </div>
            
          </div>
        </section>
      </div>
      

    );
  };

export default Modal;