const Header = (props) => <h1>{props.course}</h1>

const Part = (props) => <p>{props.part.name} {props.part.units}</p>

const Content = (props) => (
  <div>
    <Part part={props.part1} />
    <Part part={props.part2} />
    <Part part={props.part3} />
  </div>
)

const Total = (props) => (
  <p>Total units: {props.part1.units + props.part2.units + props.part3.units}</p>
)

const Footer = (props) => (
  <footer>{props.name} - {props.code} - {props.section}</footer>
)

const App = () => {
  const course = 'Platform-based Development 3 (Mobile)'
  const part1 = { name: 'Networking 2', units: 3 }
  const part2 = { name: 'Object-oriented Programming 2', units: 3 }
  const part3 = { name: 'Human Computer Interaction', units: 3 }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
      <Footer name='Mary Antonetthe V. Escario' code='CSIT340' section='G7' />
    </div>
  )
}

export default App