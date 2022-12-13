
import './App.css';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from 'react-router-dom';
import Main from './Main';
import Menu from './Menu';
import Benchpress from './Benchpress';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='/benchpress' element={<Benchpress />} />
      </Routes>
    </div>
  );
}

export default App;
