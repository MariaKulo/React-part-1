const App = () => {
  
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  const Header = (props) => {
    console.log(props)
    return (
      <header>
        <h1>{props.course}</h1>
      </header>
    )
  }

  const Content = (props) => {
    console.log(props)
    return (
      <section>
        <Part part= {props.parts[0]} />
        <Part part= {props.parts[1]} />
        <Part part= {props.parts[2]} />
      </section>
    )
  }

  const Part = (props) => {
    return (
      <section>
        <p>{props.part.name} {props.part.exercises}</p>
      </section>
    )
  }

  const Total = (props) => {
    console.log(props)
    return (
      <div>
      <p>Number of exercises {props.total}</p>
      </div>
    )
  }

  return (
    <div>
    <Header course={course}/>

    <Content parts={parts} />

    <Total total = {parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </div>
  )
}

export default App