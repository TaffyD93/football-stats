import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import CardHeader from 'react-bootstrap/CardHeader'

const news = [
  {
    title: 'Example News Article',
    image: 'https://example.com/image.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    url: 'https://example.com/article'
  },
  {
    title: 'Example News Article',
    image: 'https://example.com/image.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    url: 'https://example.com/article'
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
                <h5>{each.image}</h5>
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