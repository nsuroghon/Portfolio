import React, { Component, useState } from 'react';
import Modal from './Modal';


export default class Porfolio extends Component {

  constructor() {
    super();
    this.state = {
      show: false
    };
  }

  showModal = () => {
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
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item" style={{width: '50%', height: '250px'}}>
                  <div className="item-wrap" style={{ boxShadow: "5px 5px 5px 5px"}}>
                      <img src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                          <div style={{height: '100px', width: '100%'}}>
                            <h5 onClick={this.showModal} style={{border: '1px solid white', padding: '5px', width: '30%', textAlign: 'center', verticalAlign: 'middle', marginTop: '15px'}}>Learn More</h5>
                          </div>
                        </div>
                      </div>
                  </div>

                  {/* <div style={{paddingTop: '40px', textAlign: 'center'}}>
                    <h1 style={{textDecorationLine: 'underline'}}>technology</h1>
                    <p>{item.tech}</p>
                  </div> */}

                  {/* <div>
                    <a target='_blank' href={item.live} style={{textAlign: 'center'}}><p>Deployed App</p></a>
                    <a target='_blank' href={item.code} style={{textAlign: 'center'}}><p>Code</p></a>
                  </div> */}

                </div>
              )
            })
          }
          </div>
        </div>
      </div>
      
    <Modal show={this.state.show} handleClose={this.hideModal}>
      <p>Modal</p>
    </Modal>     
      
  </section>
        );
  }
}