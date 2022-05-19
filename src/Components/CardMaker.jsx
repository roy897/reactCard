import React from 'react'
import styles from './card.module.css'

function CardMaker(props) {
  let amazone = props.gift;
  let apple = props.gift;
  return (
    <div className={(props.gift=="Amazone Gift Pay") ? styles.card:styles.white}>
      <div className={styles.disflx}>
        <p>{props.date}</p>
        <img src={props.logo}/>
      </div>

      <div>
        <h4 className={styles.blackback}>{props.case}</h4>
        <h1> {props.gift} </h1>
      </div>

      <div className={styles.disflx} >
        <p> {props.where} </p>
        <p className={styles.arrow}>&#8594;</p>
      </div>

    </div>
  )
}

export default CardMaker;

