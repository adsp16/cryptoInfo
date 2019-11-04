import React from 'react';
import styles from './Card.module.css';
import { Container, Row, Col } from 'reactstrap';
import Price from './Price'



const Card = (props) => {

  return (
    <Container>
      <div className={styles.card}>
        <Container>
          <Col className="cardCol">
            <img className={styles.cardimg} src={props.coinUrl} alt="coinLogo" />
          </Col>
          <Row>
            <Col className="mt-4">
              <Price price={props.price} volume={props.volume} marketCap={props.marketCap} perChange={props.perChange} />
            </Col>
          </Row>
        </Container>
      </div>
    </Container>

  )

}

export default Card;