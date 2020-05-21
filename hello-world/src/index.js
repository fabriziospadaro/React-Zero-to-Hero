import React from 'react';
import ReactDOM from 'react-dom';

/*
function HelloComponent(){
  return (<h1>Hello world</h1>)
}
*/
class HelloClass extends React.Component {
  render() {
    return (
      <h1>Hello world!</h1>
    );
  }
}

//ReactDOM.render(<HelloComponent />, document.getElementById('root'));
//or
//ReactDOM.render(<h1>Hello world</h1>, document.getElementById('root'));
//or
ReactDOM.render(<HelloClass />, document.getElementById('root'));