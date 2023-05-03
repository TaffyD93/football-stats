import Carousel from 'react-bootstrap/Carousel';
import item1 from '../Images/arsenal-team.png';
import item2 from '../Images/liverpool-team.jpeg';
import item3 from '../Images/man-city-team.jpeg';

function IndividualIntervalsExample() {
  return (
    <Carousel className="slide">
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={item1} 
          alt="Arsenal"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={item2}
          alt="Liverpool"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={item3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Manchester City</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;