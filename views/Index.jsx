const React = require('react');

    class Index extends React.Component {
      render() {
          const { students} = this.props;
          return (
                  <div>
                      <h1>Student Report</h1>
<nav><a href="/students/new">Create a New Student</a>
</nav>
                      <ul>
                          {students.map((student, i) => {
                                return (
                                  <li key={i}>
                                      The{' '}
                                      <a href={`/students/${i}`}>
                                          {student.name}
                                      </a>{' '}
                                      got {student.grade} <br></br>
                                      {student.pass? 'passed' : 'failed'}
                                      <br />
                                  </li>
                              );
                          })}
                      </ul>
                  </div>
          );
      }
    }
    module.exports = Index;