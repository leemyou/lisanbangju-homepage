import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'

function IndividualIntervalsExample() {
  return (
    <Carousel fade className="carousel">
      <Carousel.Item interval={10000} className="carouse-item">
        <h1>은혜로다</h1>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>



      <Carousel.Item interval={10000} className="carouse-item">
        {/* <img
            style={{width:'300px', height:'100%', backgroundColor:'red'}}
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        /> */}
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>



      <Carousel.Item className="carouse-item" interval={10000}>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
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

export default IndividualIntervalsExample;

