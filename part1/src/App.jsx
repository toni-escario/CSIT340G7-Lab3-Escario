const Header = (props) => <h1>{props.course}</h1>

const Part = (props) => <p>{props.part.name} {props.part.units}</p>

const Content = (props) => (
  <div>
    <Part part={props.parts[0]} />
    <Part part={props.parts[1]} />
    <Part part={props.parts[2]} />
  </div>
)

const Total = (props) => (
  <p>
    Total units: {props.parts[0].units + props.parts[1].units + props.parts[2].units}
  </p>
)

const Footer = (props) => (
  <footer>{props.name} - {props.code} - {props.section}</footer>
)

const App = () => {
  const course = {
    name: 'Platform-based Development 3 (Mobile)',
    parts: [
      { name: 'Networking 2', units: 3 },
      { name: 'Object-oriented Programming 2', units: 3 },
      { name: 'Human Computer Interaction', units: 3 },
    ],
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Footer name='Mary Antonetthe V. Escario' code='CSIT340' section='G7' />
    </div>
  )
}

export default App