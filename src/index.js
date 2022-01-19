import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ========================================

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

const el = <Page />;

ReactDOM.render(el, document.getElementById('root'));

// ========================================

// ========================================

// ========================================

// ========================================

// ========================================

// ========================================

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
