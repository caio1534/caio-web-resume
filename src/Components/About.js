import React, { Component } from 'react';

class About extends Component {
   render() {

      if (this.props.data) {
         var profilepic = "images/" + this.props.data.image;
         var bio = this.props.data.bio;
         var bio2 = this.props.data.bio2;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
         var resumeDownload = this.props.data.resumedownload;
         var networks = this.props.data.social.map(function (network) {
            return <span key={network.name}><a href={network.url}><i className={network.className}></i></a></span>
         })
      }

      return (
         <section id="about">
            <div className="row">
               <div className="three columns">
                  <img className="profile-pic" src={profilepic} alt="Caio Cristo Profile Pic" />
               </div>
               <div className="nine columns main-col">
                  <h2>Sobre</h2>

                  <p>{bio}</p>
                  <p>{bio2}</p>

                  <div className="row">
                     <div className="columns contact-details">
                        <h2>Contactos</h2>
                        <p className="address">
                           <span>{phone}</span><br />
                           <span>{email}</span>
                        </p>
                     </div>
                     <div className="columns download">
                        <p>
                           <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Curriculum Vitae</a>
                        </p>
                     </div>
                  </div>
                  <div className="row columns">
                     <div className="social">
                        {networks}
                     </div>
                  </div>
               </div>
            </div>

         </section>
      );
   }
}

export default About;
