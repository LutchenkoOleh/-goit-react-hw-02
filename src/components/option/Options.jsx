import "./Options.css"
export default function Options({ onLeaveFeedback, onResetFeedback, totalFeedback }) {
  return (<div className="options-wrap">
    <button className="options-button good" onClick={() => onLeaveFeedback('good')}>Good</button>
    <button className="options-button neutral" onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
    <button className="options-button bad" onClick={() => onLeaveFeedback('bad')}>Bad</button>
    {totalFeedback > 0 && <button onClick={onResetFeedback}>Reset</button>}
  </div>)
}