import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Holder from 'react-holder-component';

function CarouselFadeExample() {
    return (
    <Carousel variant='dark'>
        <Carousel.Item style={{height:'100vh'}}>
            <Holder
                className="d-block w-100"
                width= '800px'
                height= '100%'
                updateOnResize={true}
                alt="First Selide"
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item style={{height:'100vh'}}>
            <Holder
                className="d-block w-100"
                width= '800px'
                height= '100%'
                updateOnResize={true}
                alt="First Selide"
            />
            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item style={{height:'100vh'}}>
            <Holder
                className="d-block w-100"
                width= '800px'
                height= '100%'
                updateOnResize={true}
                text='"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"'
                alt="First Selide"
            />
            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
            </Carousel.Caption>
        </Carousel.Item> 
    </Carousel>
  );
}

export default CarouselFadeExample;