const React = require('react')
class Show extends React.Component {
  render () {
   const student = this.props.student
    return (
      <div>
      <h1> Show Page </h1>
        The {student.name} is {student.grade}
        {student.pass? 'passed' : 'failed'}
      </div>
      );
     }
   }
  module.exports  = Show;