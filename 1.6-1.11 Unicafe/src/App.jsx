import { useState } from "react"

const Button = ({ handleClick, text }) => {
    return (
      <button onClick={handleClick}>
        {text}
      </button>
    )
  }

  const Statistics = (props) => {

    const all = props.good + props.neutral + props.bad
    console.log(props)

    return (
      <div>
        <div>good: {props.good} </div>
        <div>neutral: {props.neutral}</div>
        <div>bad: {props.bad}</div>
        <div>all: {props.good + props.neutral + props.bad}</div>
        <div>average: {(props.good * 1 + props.bad * (-1)) / all}</div>
        <div>positive: {(props.good / all) * 100 } %</div>
      </div>
    )
  }

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    console.log('good: ', updatedGood)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    console.log('neutral: ', updatedNeutral)
  }

  const handleBadClick = () => {
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
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        />
    </div>
  )
}

export default App