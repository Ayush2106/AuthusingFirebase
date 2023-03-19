import './App.css';
import Login from './components/login/login';
import Register from './components/register/register';
import Homepage from './components/Homepage/Homepage';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route  path ="/" element={<Homepage/>}></Route>
          <Route  path ="/login" element={<Login/>}></Route>
          <Route path= "/register" element = {<Register/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
