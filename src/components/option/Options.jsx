import { useState } from "react"
import ClicksTracker from "./ClicksTracker"

export default function Options() {

  const [clicks, setClicks] = useState(0)

  const updateFeedback = () => {
    setClicks(clicks + 1)
  }

  const resetClicks = () => {
    setClicks(0)
  }

  return (
    <div className="options-wrap">
      <ClicksTracker value={clicks} onUpdate={updateFeedback} />
      <ClicksTracker value={clicks} onUpdate={updateFeedback} />
      <ClicksTracker value={clicks} onUpdate={updateFeedback} />
      <button onClick={resetClicks} type="button">Reset</button>


    </div>

  )

}
