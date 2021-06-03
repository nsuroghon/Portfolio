import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Contact for collaboration!
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <a><h4 style={{fontWeight:"bold"}}>Linked in :
                  {resumeData.linkedinId}
                </h4></a>
                <a href={"mailto:" + resumeData.email}><h4 style={{fontWeight:"bold"}}>Email :
                  {resumeData.email}
                </h4></a>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}