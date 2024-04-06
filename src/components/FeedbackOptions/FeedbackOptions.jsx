import { Component } from 'react';
import css from './FeedbackOptions.module.scss';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <ul className={css.feedbackOptions}>
        {options.map(option => (
          <li key={option}>
            <button
              onClick={onLeaveFeedback}
              name={String(option).toLowerCase()}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default FeedbackOptions;
