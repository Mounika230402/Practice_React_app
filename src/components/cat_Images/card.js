// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function CardComponent(prop) {
    const{id,url}=prop
    return (
      <Card style={{ width: '18rem',border:"1px solid black" }}>
        <Card.Img variant="top" src={url} width={700} height={400}/>
        <Card.Body>
          <Card.Title style={{textAlign:"center"}}>ID:{id}</Card.Title>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    );
  }
  export default CardComponent;