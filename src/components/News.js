import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/CardHeader';
import jude from '../Images/jude.jpeg';
import harlaand from '../Images/harlaand.jpeg';

const news = [
  {
    title: 'Example News Article',
    image: jude,
    description: 'Is Jude Bellingham going to Real Madrid FC!?'
  },
  {
    title: 'Example News Article',
    image: harlaand,
    description: 'Harlaand breakd the record for most goals scored in the league!'
  }
];

function News() {
  return (
      <>
      <Container className="container">
      {news.map((each, key)=>{
          return(
            <Card className="card" key = {each}>
                <CardHeader>{each.title}</CardHeader>
                <div className="card2">
                <img src={each.image} alt='jude' width="50%" />
                <h5>{each.description}</h5>
                <h5>{each.url}</h5>
                </div>
            </Card>
          )
      })}
      </Container>
      </>
  );
}

export default News;