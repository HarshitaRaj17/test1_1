import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Analytics from './Analytics';
import Menu from './Menu';
import Profile from './Profile';
import Retire from './Retire';
function App() {
  return (
    <div className="App">
      <div className="Appcard">
      <Menu/>
      <Profile/>
      <Analytics/>
      <Retire/>
      </div>

    </div>
  );
}

export default App;
