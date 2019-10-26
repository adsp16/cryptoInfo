import React from 'react';
import styles from './Price.module.css';
import { IoMdArrowDown, IoMdArrowUp } from 'react-icons/io';


const Price = (props) => {
  const resultOne = Number(props.perChange);
  const result = resultOne < 0 ? <IoMdArrowDown /> : <IoMdArrowUp />


  return (
    <div>
      <p>Current Market Price</p>
      <p className={styles.numberPrice}>{props.price}</p>
      <p className="mt-4">24hr Market Volume</p>
      <p className={styles.numberPrice}>{props.volume}</p>
      <p className="mt-4">Market Cap</p>
      <p className={styles.numberPrice}>{props.marketCap}</p>
      <p className="mt-4">24Hr % Change</p>
      <p className={styles.numberPrice}>{props.perChange}% {result}</p>
    </div>

  )

}


export default Price;