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
import NameList from './components/NameList';
import PersonList from './components/PersonList'
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import ParentComponent1 from './components/ParentComponent1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <h1 className='error'>Error</h1> */}
        {/* <h1 className={styles.success}>Success</h1> */}
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

         {/* <UserGreeting></UserGreeting> */}

         {/* <NameList></NameList> */}

         {/* <PersonList></PersonList> */}
         {/* <Stylesheet primary={true}></Stylesheet> */}
         {/* <Inline></Inline> */}



         {/* <Form></Form> */}

         <ParentComponent1></ParentComponent1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Learn React */}
        </a>
      </header>
    </div>
  );
}

export default App;
