const React = require('react');

class New extends React.Component {
  render() {
    return (
        <div>
            <h1>New Student Info Page</h1>
            {/* NOTE: action will be the route, method will be the HTTP verb */}
            <form action="/students" method="POST">
              Name: <input type="text" name="name"  placeholder="Enter Name"/><br/>
              Grade: <input type="text" name="grade" placeholder="Enter Grade"/><br/>
              Pass: <input type="checkbox" name="pass" /><br/>
              <input type="submit" name="" value="Create Student"/>
            </form>
        </div>);
    }
  }

module.exports = New;