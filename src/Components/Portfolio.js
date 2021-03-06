import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row projects">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://github.com/Pragalbhmandaokar/Xchange" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/book.png" alt="final-capstone" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>openlib</h3>
                      <p>Website that will be able to recommend which book you should read and is a platform to exchange your book once you complete reading.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a href="https://github.com/Pragalbhmandaokar/Xchange" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View Source</a></li>
                      </div>
                      <div className="languages">
                        <i className="devicon-rails-plain-wordmark technology"></i>
                        <i className="devicon-react-plain-wordmark technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              <ul className="actions">
                <li className="wide-button"><a href="https://github.com/Pragalbhmandaokar/portfolio" className="button portfolio-button" target="_blank" rel="noopener noreferrer">Full Portfolio</a></li>
              </ul>
            </div>
          </div>
        </div>
   </section>
    );
  }
}

export default Portfolio;
