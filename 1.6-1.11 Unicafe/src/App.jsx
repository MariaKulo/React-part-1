import { useState } from "react"

const Button = ({ handleClick, text }) => {
    return (
      <button onClick={handleClick}>
        {text}
      </button>
    )
  }

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = (props) => {
    const updatedGood = good + 1
    setGood(updatedGood)
    console.log('good: ', updatedGood)
  }

  const handleNeutralClick = (props) => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    console.log('neutral: ', updatedNeutral)
  }

  const handleBadClick = (props) => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    console.log('bad: ', updatedBad)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral'/>
      <Button handleClick={handleBadClick} text='bad'/>
      <h2>Statistics</h2>
      good: {good} <br></br>
      neutral: {neutral} <br></br>
      bad: {bad} <br></br>
    </div>
  )
}

export default App