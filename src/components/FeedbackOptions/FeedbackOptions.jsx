import { Component } from 'react';
import css from './FeedbackOptions.module.scss';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <ul>
        {options.map(option => (
          <li key={option}>
            <button
              className={css.btn}
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
