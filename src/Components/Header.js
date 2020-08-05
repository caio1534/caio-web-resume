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
                  <li className="current"><a className="smoothscroll" href="#home">Início</a></li>
                  <li><a className="smoothscroll" href="#about">Sobre</a></li>
                  <li><a className="smoothscroll" href="#resume">Currículo</a></li>
                  <li><a className="smoothscroll" href="#portfolio">Portfólio</a></li>
                  <li><a className="smoothscroll" href="#testimonials">Testemunhos</a></li>
                  <li><a className="smoothscroll" href="#contact">Contactar</a></li>
               </ul>

            </nav>

            <div className="row banner">
               <div className="middle banner-text">
                  <h1>{name}.</h1>
                  <h3>Um <span>{occupation}</span> da <span>Mealhada, Aveiro</span>. {description}.</h3>
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
