import React, { Component } from 'react';
import css from './Statistics.module.scss';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <ul className={css.statistics}>
        <li>
          Good:<span>{good}</span>
        </li>
        <li>
          Neutral:<span>{neutral}</span>
        </li>
        <li>
          Bad:<span>{bad}</span>
        </li>
        <li>
          Total:<span>{total}</span>
        </li>
        <li>
          Positive feedback:<span>{positivePercentage} %</span>
        </li>
      </ul>
    );
  }
}

export default Statistics;
