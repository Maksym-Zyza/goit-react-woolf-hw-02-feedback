import React, { Component } from 'react';
import css from './Statistics.module.scss';

class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    count: 0,
    positiveFeedback: 0,
  };

  handleClick = e => {
    const { name } = e.target;
    this.setState(prev => ({ ...prev, [name]: prev[name] + 1 }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState(prev => ({
      ...prev,
      count: prev.good + prev.neutral + prev.bad,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prev => ({
      ...prev,
      positiveFeedback: Math.round((prev.good / prev.count) * 100),
    }));
  };

  render() {
    const { good, neutral, bad, count, positiveFeedback } = this.state;
    console.log(count);

    return (
      <div className={css.wrapper}>
        <h1>Please leave feedback:</h1>
        <ul>
          <li>
            <button onClick={this.handleClick} name="good">
              Good
            </button>
          </li>
          <li>
            <button onClick={this.handleClick} name="neutral">
              Neutral
            </button>
          </li>
          <li>
            <button onClick={this.handleClick} name="bad">
              Bad
            </button>
          </li>
        </ul>
        <h2>Statistics:</h2>
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
            Positive feedback:<span>{positiveFeedback} %</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Statistics;
