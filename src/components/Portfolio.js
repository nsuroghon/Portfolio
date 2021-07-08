import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row" style={{height: '100%'}}>
        <div className="twelve columns collapsed">
          <h1>Some Projects.</h1>
          {/* <p style={{textAlign: "center",}}><a href="https://github.com/nsuroghon" target="_blank">click to view code</a></p> */}
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap" style={{padding: "5px", boxShadow: "5px 5px 5px 5px"}}>
                    {/* <a target="_blank" href=""> */}
                      <img src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    {/* </a> */}
                  </div>

                  <div style={{paddingTop: '40px', textAlign: 'center'}}>
                    <h1 style={{textDecorationLine: 'underline'}}>technology</h1>
                    <p>{item.tech}</p>
                  </div>

                  <div>
                    <a target='_blank' href={item.live} style={{textAlign: 'center'}}><p>Deployed App</p></a>
                    <a target='_blank' href={item.code} style={{textAlign: 'center'}}><p>Code</p></a>
                  </div>

                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}