import logo from './logo.svg';
import './App.css';
import Student from './components/studentInfo/Student';
import Welcome from './components/welcome/Welcome';
import Gbc from './components/gbcInfo/Gbc';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='App-content'>
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome csName="Fullstack Development - l" csInfo="Week 09 Lab exercise"/>
          <Student studentId="101382319" fName="Sheida" lName="Moazeni"/>
          <Gbc/>
        </div>
      </header>
    </div>
  );
}

export default App;
