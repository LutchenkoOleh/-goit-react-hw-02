import { useState } from "react"


export default function Toggler(children) {

  const [isOpen, setIsOpen] = useState(false)

  const toggleContent = () => {
    setIsOpen(!isOpen)
  }

  return (<div>
    <button onClick={toggleContent}>close</button>
    {isOpen && children}</div>)

}