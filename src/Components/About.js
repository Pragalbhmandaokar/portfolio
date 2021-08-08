import React, { Component } from 'react';
import resume from '../assets/resume.pdf'

class About extends Component {
  render() {
    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>THIS PAGE IS A COLLECTION OF IDEAS
THAT WERE NOT USED.
BUT THAT DOESN'T MEAN IT'S JUST A BAD IDEA.
IT IS A HOPE FOR THE FUTURE</p>
         <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                  
                     <span><a href={`mailto:${email}?subject=The%20subject%20of%20the%20mail`}>{email}</a></span>
                  </p>
               </div>
            
            </div>
         </div>
      </div>
   </section>
    );
  }
}

export default About;
