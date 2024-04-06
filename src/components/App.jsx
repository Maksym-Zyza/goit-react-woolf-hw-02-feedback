import { Component } from 'react';
import { Section } from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import './App.scss';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  };

  onLeaveFeedback = e => {
    const { name } = e.target;
    this.setState(prev => ({ ...prev, [name]: prev[name] + 1 }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState(prev => ({
      ...prev,
      total: prev.good + prev.neutral + prev.bad,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prev => ({
      ...prev,
      positiveFeedback: Math.round((prev.good / prev.total) * 100),
    }));
  };
  render() {
    const { good, neutral, bad, total, positiveFeedback } = this.state;
    return (
      <div className="container">
        <Section title="Please leave feedback:">
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics:">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedback}
          />
        </Section>
      </div>
    );
  }
}
