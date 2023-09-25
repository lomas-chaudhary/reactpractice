import logo from './logo.svg';
import './App.css';
// import {Greet} from './components/Greet.js';
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Greet from './components/Greet'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* <Greet></Greet>
        <Welcome></Welcome> */}

        {/* <Hello></Hello> */}

        {/* <Greet name="Bruce" heroName="Batman">
          <p>This is children props</p>
        </Greet>
        <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Diana" heroName="Wonder Woman"></Greet> */}

        {/* <Welcome name="Bruce" heroName="Batman"></Welcome>
        <Welcome name="Clark" heroName="Superman"></Welcome>
        <Welcome name="Diana" heroName="Wonder Woman"></Welcome> */}

        {/* <Message></Message>
         */}

         {/* <Counter></Counter> */}

         {/* <Greet></Greet> */}

         {/* <FunctionClick></FunctionClick> */}

         {/* <ClassClick></ClassClick> */}

         {/* <EventBind></EventBind> */}
         {/* <ParentComponent></ParentComponent> */}

         <UserGreeting></UserGreeting>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
