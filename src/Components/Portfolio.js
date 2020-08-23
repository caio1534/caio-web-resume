import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Portfolio extends Component {
  render() {

    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = 'images/portfolio/' + projects.image;
        return <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={projects.url} target="_blank" rel="noopener noreferrer" title={projects.title}>
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <span><FontAwesomeIcon icon={['fab', projects.technology]} size="md" /></span>
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className="link-icon"></div>
            </a>           
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">

            <h1 className='portfolio-title'>Alguns projetos do meu portfólio<span className='asterisk'>*</span></h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {projects}
            </div>

            <h3><span className='asterisk'>*</span>Apenas o projeto Adventour se encontra online</h3>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
