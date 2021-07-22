import React, { Component, useState } from 'react';
import Modal from './Modal';
import './random.css';


export default class Porfolio extends Component {

  constructor() {
    super();
    this.state = {
      show: false,
      selectedProj: []
    };
  }

  showModal = (item) => {
    this.setState({ selectedProj: item})
    this.setState({ show: true })
  }

  hideModal = () => {
    this.setState({ show: false })
  }


  render() {
    let resumeData = this.props.resumeData;

    return (
      <section id="portfolio">
      <div className="row" style={{height: '100%'}}>
        <div className="twelve columns collapsed">
          <h1>Some Projects.</h1>
          {/* <p style={{textAlign: "center",}}><a href="https://github.com/nsuroghon" target="_blank">click to view code</a></p> */}
          <div id="portfolio-wrapper" className="bgrid-halves s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map(( item )=>{
              return(
                <div className="columns portfolio-item" key={item.id} style={{width: '50%'}}>
                  <div className="item-wrap" style={{ boxShadow: "5px 5px 5px 5px"}}>
                      <img src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                          <div style={{height: '100px', width: '100%'}}>
                            <h5 className="target" onClick={() => {this.setState({ selectedProj: item, show: true})}} style={{border: '1px solid white', padding: '5px', width: '30%', textAlign: 'center', verticalAlign: 'middle', marginTop: '15px', cursor: 'pointer'}}>Learn More</h5>
                          </div>
                        </div>
                      </div>
                  </div>

                </div>
              )
            })
          }
          </div>
        </div>
      </div>

      <Modal show={this.state.show} handleClose={this.hideModal} resumeData={this.state.selectedProj}></Modal>  
      
  </section>
        );
  }
}