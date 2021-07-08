import React, { Component } from 'react';

export default class About extends Component {
  render() {
   
   let resumeData = this.props.resumeData;
    
   return (
      <section id="about" style={{height: '500px'}}>
         <div className="row" style={{height: '300px', width: '100%', display: 'flex'}}>
            <div className="column text" style={{height: '250px', width: '700px'}}>
               <h1 style={{color: 'white', display: 'flex', verticalAlign: 'middle'}}>{resumeData.aboutme}</h1>
            </div>
            <div className="" style={{height: '250px', width: '200px', marginLeft: '8%'}}>
               <img className="profile-pic"  src="images/profilepic.png" alt="" 
               style={{}} />
            </div>
                        {/* <div className="row" style={{padding: '70px 0'}}>
                           <div>
                           <h2 style={{textAlign: "center"}}></h2>
                           <p style={{width: '600px'}}>{resumeData.aboutme}</p>
                           <div style={{float: 'right'}}>
                           <img className="profile-pic"  src="images/profilepic.png" alt="" />
                           </div>
                           </div>
                              <div>
                           <img className="profile-pic"  src="images/profilepic.png" alt="" />
                           </div>
                        </div> */}
         </div>
      </section>
    );
  }
}