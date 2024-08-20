
import Options from "../option/Options"
import Toggler from "./Toggler"

export default function Feedback() {

  return (
    <div className="feedback-wrap">

      <Toggler>
        <p className="feedback-text">Good:</p>
        <p className="feedback-text">Neutral:</p>
        <p className="feedback-text">Bad:</p>
        <p className="feedback-text">Total:</p>
        <p className="feedback-text">Positive:</p>
      </Toggler>

    </div>
  )
}