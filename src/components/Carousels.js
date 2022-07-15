import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Holder from 'react-holder-component';
import './Carousel.css';

function CarouselFadeExample() {
    return (
    <Carousel fade variant='dark'>

        <Carousel.Item style={{height:'100vh'}}>
        <Holder
                className=" w-100 h-100"
                updateOnResize={true}
                alt="First Selide"
                placeholder={{ 
                    theme: 'lava',
                }}
            />
            <Carousel.Caption className='Carousel-title'>
                <h1>일산방주교회</h1>
                <p className='home-subtitle'>기독교대한감리회</p>
            </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item style={{height:'100vh'}}>
            <Holder
                className="d-block w-100 h-100"
                updateOnResize={true}
                alt="First Selide"
            />
            <Carousel.Caption className='Carousel-title'>
                <h1 style={{overflow:'hidden'}}>No Cross No Crown</h1>
                <p>십자가 없이는 면류관도 없다</p>
            </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item style={{height:'100vh'}}>
            <Holder
                className="d-block w-100 h-100"
                updateOnResize={true}
                
                alt="First Selide"
            />
            <Carousel.Caption className='Carousel-title'>
                <h1>Third slide label</h1>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
            </Carousel.Caption>
        </Carousel.Item> 
    </Carousel>
  );
}

export default CarouselFadeExample;