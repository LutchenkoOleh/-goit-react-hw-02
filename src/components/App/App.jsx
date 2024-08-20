import Description from "../description/Description";
import Feedback from "../feedback/Feedback";
import Options from "../option/Options";
import { useState } from "react"


export default function App() {


  return (
    <div>
      <Description />
      <Options />
      <Feedback />
    </div>);
}
