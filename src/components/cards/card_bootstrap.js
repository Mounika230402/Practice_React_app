import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import data from './data';
import "./cards.css";
function CardExample() {
  return (
    <div className='Cards'>
    {
        data.map(eachTeam=>{
            return(
                <React.Fragment key={eachTeam.id}>
            <Card style={{ width: '18rem'}} className='Card1'>
            <Card.Img variant="top" src={eachTeam.logo} width={300} height={300} />
            <Card.Body>
              <Card.Title>{eachTeam.TeamName}</Card.Title>
              <Card.Text>
                {
                    `Captain : ${eachTeam.Captain}`}
                    <br/>{
                    `won: ${eachTeam.won}`}
                    <br/>
                    <h4>Won_years</h4>
                        <ul type="none">
                            {
                                eachTeam.won_years>0 ?
                                eachTeam.won_years.map(eachWon=>{
                                    return(
                                        <li>{eachWon}</li>
                                    )
                                })
                                :
                                <p>No Matches won yet</p>
                            }
                        </ul>

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

export default CardExample;