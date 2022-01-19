import React from 'react';
import logo from './logo.svg';
import './App.css';

// const el = <h1>Hello react!!!</h1>;

// function timeCount() {
//   const el = <h3>现在时间: {new Date().toLocaleTimeString()}</h3>;

//   ReactDOM.render(el, document.getElementById('root'));
// }

// setInterval(() => {
//   timeCount();
// }, 1000);

// ========================================

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

function Page() {
  return (
    <div>
      <Welcome name='Juche' />
      <Welcome name='Juching' />
    </div>
  );
}

// function Clock(props) {
//   return (
//     <div className='Clock'>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

class Clock extends React.Component {
  render() {
    return (
      <div className='Clock'>
        <h1>Hello, world!</h1>
        <h2>It's {this.props.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

function App() {
  return (
    <div className='App'>
      <Clock date={new Date()} />
      <Page />
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          7k Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
