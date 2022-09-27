import React from 'react';
import meter1 from "../assets/icons/icon-php.jpg";
import meter2 from "../assets/icons/icon-laravel.jpg";
import meter3 from "../assets/icons/icon-javascript.jpg";
import meter4 from "../assets/icons/icon-mysql.jpg";
import meter5 from "../assets/icons/icon-postgresql.jpg";
import meter6 from "../assets/icons/icon-bootstrap.jpg";
import meter7 from "../assets/icons/icon-css.jpg";
import meter8 from "../assets/icons/icon-html.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
<script async defer src="https://buttons.github.io/buttons.js"></script>

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="testnet" id="habilidades">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Habilidades</h2>
                        <p>Confira as tecnologias que eu utilizo nos meus projetos</p>
                        <a className="github-button" href="https://github.com/andrewrdev"  target="_blank" rel='noreferrer' data-icon="octicon-star" data-size="large" data-show-count="true">Perfil do GitHub</a>
                        <br></br>
                        <br></br>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                            <img src={meter1} alt="PHP" className='skill-icon' />
                            <h5>PHP</h5>
                        </div>

                        <div className="item">
                            <img src={meter2} alt="Laravel" className='skill-icon' />
                            <h5>Laravel</h5>
                        </div>

                        <div className="item">
                            <img src={meter3} alt="Javascript" className='skill-icon' />
                            <h5>Javascript</h5>
                        </div>

                        <div className="item">
                            <img src={meter4} alt="MySQL" className='skill-icon' />
                            <h5>MySQL</h5>
                        </div>

                        <div className="item">
                            <img src={meter5} alt="PostgreSQL" className='skill-icon' />
                            <h5>PostgreSQL</h5>
                        </div>

                        <div className="item">
                            <img src={meter6} alt="Bootstrap" className='skill-icon' />
                            <h5>Bootstrap</h5>
                        </div>

                        <div className="item">
                            <img src={meter7} alt="CSS" className='skill-icon' />
                            <h5>CSS</h5>
                        </div>

                        <div className="item">
                            <img src={meter8} alt="HTML" className='skill-icon' />
                            <h5>HTML</h5>
                        </div>
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="colorSharp" />
    </section>
  )
  
}
