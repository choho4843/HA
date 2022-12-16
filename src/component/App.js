
import './App.css';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from 'react-router-dom';
import Main from './Main';
import Benchpress from './Benchpress';
import HealthLearning from './HealthLearning';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='/benchpress' element={<Benchpress />} />
        <Route exact path='/HealthLearning' element={<HealthLearning />} />
      </Routes>
    </div>
  );
}

export default App;
