import { Component } from 'react';
import css from './FeedbackOptions.module.scss';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    const toLowerCase = option => option.toLowerCase();
    return (
      <ul className={css.feedbackOptions}>
        {options.map(option => (
          <li key={option}>
            <button
              onClick={() => onLeaveFeedback(toLowerCase(option))}
              name={toLowerCase(option)}
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
