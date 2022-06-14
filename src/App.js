

const App = () => {
  const course = 'Half Stack application developments'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <>
    <Header course={course} />
    <Content part={part1}/>
    <Content part={part2}/>
    <Content part={part3}/>
    <Total total={exercises1+exercises2+exercises3}/>
    </>
  )
}

const Header = (props) => {
  return(
    <h1>
      {props.course}
    </h1>
  )
}

const Content = ({part}) => {
  return(
    <div>
      <Part part1={part}/>
    </div>
  )
}

const Part = ({part1}) => {
  return(
    <>
      <p>
      {part1}
      </p>
    </>
  )
}

const Total = (props) => {
  return(
    <span>{props.total}</span>
  )
}

export default App

