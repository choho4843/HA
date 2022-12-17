
import './App.css';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from 'react-router-dom';
import Main from './Main';
import Benchpress from './Benchpress';
import HealthLearning from './HealthLearning';
import Chesthpress from './Chestpress';
import Peckdeckfly from './Peckdeckfly';
import Dips from './Dips';
import Cabelfly from './Cabelfly';
import Dumbbelpress from './Dumbbelpress';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='/benchpress' element={<Benchpress />} />
        <Route exact path='/HealthLearning' element={<HealthLearning />} />
        <Route exact path='/chestpress' element={<Chesthpress />} />
        <Route exact path='/peckdeckfly' element={<Peckdeckfly />} />
        <Route exact path='/dips' element={<Dips/>} />
        <Route exact path='/cabelfly' element={<Cabelfly/>} />
        <Route exact path='/dumbbelpress' element={<Dumbbelpress/>} />

      </Routes>
    </div>
  );
}

export default App;
