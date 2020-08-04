import React, { Component } from 'react';

class Header extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var occupation = this.props.data.occupation;
         var description = this.props.data.description;

      }

      return (
         <header id="home">

            <nav id="nav-wrap">

               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#about">Sobre</a></li>
                  <li><a className="smoothscroll" href="#resume">Currículo</a></li>
                  <li><a className="smoothscroll" href="#portfolio">Portfólio</a></li>
                  <li><a className="smoothscroll" href="#testimonials">Testemunhos</a></li>
                  <li><a className="smoothscroll" href="#contact">Contactar</a></li>
               </ul>

            </nav>

            <div className="row banner">
               <div className="col left">
                  <img width="90" height="150" src={`${require(`../leftC.png`)}`}></img>
               </div>
               <div className="col middle banner-text">
                  <h1 class="wordCarousel">
                     <div>
                        <ul class="flip3">
                           <li className="responsive-headline">{name}.</li>
                           <li className="responsive-headline">o meu nome é</li>
                           <li className="responsive-headline">Olá</li>
                        </ul>
                     </div>
                  </h1>
                  <h3>Um <span>{occupation}</span> da <span>Mealhada, Aveiro</span>. {description}.</h3>
               </div>
               <div className="col right">
                  <img width="90" height="150" src={`${require(`../rightC.png`)}`}></img>
               </div>
            </div>

            <p className="scrolldown">
               <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

         </header>
      );
   }
}

export default Header;
