import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import data from './data';
import React from 'react';
import styles from "./cards.module.css"
function CardsObjectsExample(prop) {
  const{object}=prop
  return (
         
    <Card style={{ width: '18rem' }} className={styles.Card1}>
      <Card.Img variant="top" src={object.image} width={200} height={200}/>
      <Card.Body>
        <Card.Title>{object.title}</Card.Title>
        <Card.Text>
          {object.description}
        </Card.Text>
        <Button variant="primary">More Details</Button>
      </Card.Body>
    </Card>
  );
}

export default CardsObjectsExample;