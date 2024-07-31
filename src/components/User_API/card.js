import Card from 'react-bootstrap/Card';
function CardComponent(prop) {
  const {data}=prop
    const{name,image,email,company,address,phone}=data
    return (
      <Card style={{ width: '18rem',border:"1px solid black" }}>
        <Card.Img variant="top" src={image} width={400} height={200}/>
        <Card.Body>
          <Card.Title style={{textAlign:"center"}}>Name:{name}</Card.Title>
          <h6 style={{textAlign:"center"}}>Email:{email}</h6>
          <Card.Text>Company Name:{company.name}</Card.Text>
          <Card.Text>Address:{address.street}</Card.Text>
          <Card.Text>Phone:{phone}</Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    );
  }
  export default CardComponent;