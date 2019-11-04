import React from 'react';
import styles from './CoinCards.module.css';
import {
  Col,
  Card, CardText, CardBody,
  CardTitle
} from 'reactstrap';


const CoinCard = (props) => {


  return (

    <Col md="3" className="mt-5" onClick={props.clicked}>
      <Card className={styles.coinCard} >
        <CardBody>
          <img className={styles.coinImg} src={props.imageUrl} alt="" />
          <CardTitle>{props.coinName}</CardTitle>
          <CardText>{props.coinSymbol} </CardText>
        </CardBody>
      </Card>
    </Col>
  )

}


export default CoinCard; 