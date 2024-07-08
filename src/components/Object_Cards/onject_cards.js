import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from './data';
import React from 'react';
import styles from "./cards.module.css"
function CardsObjectsExample() {
  return (
    <div className={styles.Cards}>
      {
        data.map(eachItem=>{
          return(
            <React.Fragment key={eachItem.id}>
    <Card style={{ width: '18rem' }} className={styles.Card1}>
      <Card.Img variant="top" src={eachItem.image} width={200} height={200}/>
      <Card.Body>
        <Card.Title>{eachItem.title}</Card.Title>
        <Card.Text>
          {eachItem.description}
        </Card.Text>
        <Button variant="primary">More Details</Button>
      </Card.Body>
    </Card>
    </React.Fragment>
          )
    })
}
    </div>
  );
}

export default CardsObjectsExample;