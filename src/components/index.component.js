import React, { Component, Container, BootstrapCarousel } from "react";
import {Carousel} from "react-bootstrap"

export default class Index extends Component {
    render() {
        return(
        //     <h1  style={{marginTop:200}}>
        //     Página de Inicio
            
        // </h1>
        
        // <div >
        // <Container>
        // <BootstrapCarousel /> 
        // </Container>
        // </div>
        <Carousel style={{marginTop:100}}>
        <Carousel.Item>
          <img
            className="d-block w-100 mx-auto"
            src="http://www.valore.sg/Valore/wp-content/uploads/800x800-Valore-bookmark-powerbank_Dark-Blue.jpg"
            alt="PowerBank"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 mx-auto"
            src="http://www.valore.sg/Valore/wp-content/uploads/800x800-Valore-bookmark-powerbank_Green.jpg"
            alt="PowerBank"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 mx-auto"
            src="http://www.valore.sg/Valore/wp-content/uploads/800x800-Valore-bookmark-powerbank_Light-Blue.jpg"
            alt="PowerBank"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 mx-auto"
            src="http://www.valore.sg/Valore/wp-content/uploads/800x800-Valore-bookmark-powerbank_Orange.jpg"
            alt="PowerBank"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 mx-auto"
            src="http://www.valore.sg/Valore/wp-content/uploads/800x800-Valore-bookmark-powerbank_Purple.jpg"
            alt="PowerBank"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 mx-auto"
            src="http://www.valore.sg/Valore/wp-content/uploads/800x800-Valore-bookmark-powerbank_Red.jpg"
            alt="PowerBank"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 mx-auto"
            src="http://www.valore.sg/Valore/wp-content/uploads/800x800-Valore-bookmark-powerbank_Silver.jpg"
            alt="PowerBank"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 mx-auto"
            src="http://www.valore.sg/Valore/wp-content/uploads/800x800-Valore-bookmark-powerbank_White.jpg"
            alt="PowerBank"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
           <img
           className="d-block w-100 mx-auto"
           src="http://www.valore.sg/Valore/wp-content/uploads/800x800-Valore-bookmark-powerbank_Yellow.jpg"
           alt="PowerBank"
         />
         <Carousel.Caption>
           <h3></h3>
           <p></p>
         </Carousel.Caption>
       </Carousel.Item>  
      </Carousel>
    
  );
  }  
}