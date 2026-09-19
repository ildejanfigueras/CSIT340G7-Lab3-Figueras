const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part
        name={props.part1.name}
        exercises={props.part1.exercises}
      />
      <Part
        name={props.part2.name}
        exercises={props.part2.exercises}
      />
      <Part
        name={props.part3.name}
        exercises={props.part3.exercises}
      />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of units {props.part1.exercises + props.part2.exercises + props.part3.exercises}
    </p>
  )
}

const Footer = (props) => {
  return (
    <footer>
      {props.name} - {props.courseCode} - {props.section}
    </footer>
  )
}

const App = () => {
  const course = 'CSIT340 - Industry Elective 1'

  const part1 = {
    name: 'CSIT327 - Information Management 2',
    exercises: 3
  }

  const part2 = {
    name: 'IT371 - Project Management for IT',
    exercises: 3
  }

  const part3 = {
    name: 'IT365 - Data Analytics 1',
    exercises: 3
  }

  const name = 'Ilde Jan A. Figueras'
  const courseCode = 'CSIT340'
  const section = 'G7'

  return (
    <div>
      <Header course={course} />

      <Content
        part1={part1}
        part2={part2}
        part3={part3}
      />

      <Total
        part1={part1}
        part2={part2}
        part3={part3}
      />

      <Footer
        name={name}
        courseCode={courseCode}
        section={section}
      />
    </div>
  )
}

export default App