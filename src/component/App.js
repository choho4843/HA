
import './App.css';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from 'react-router-dom';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
