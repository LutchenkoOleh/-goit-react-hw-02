export default function ClicksTracker({ value, onUpdate }) {
  return (<button onClick={onUpdate} type="button">Good {value}</button>)
}
