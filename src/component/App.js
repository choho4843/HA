
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
import Squat from './Squat';
import Legextension from './Legextension';
import Legpress from './Legpress';
import Dumbbellunge from './Dumbbellunge';
import Upright from './Upright';
import Militarypress from './Militarypress';
import Side from './Side';
import Sholderpress from './Sholderpress';
import Pullup from './Pullup';
import Letpull from './Letpull';
import Barbellrow from './Barbellrow';
import Seatedrow from './Seatedrow';
import Dead from './Dead';
import Cabledown from './Cabledown';
import Easybar from './Easybar';
import Overhead from './Overhead';
import Concentration from './Concentration';
import Cablepress from './Cablepress';
import Barbelcull from './Barbelcull';
import Cobra from './Cobra';
import Jumping from './Jumping';
import Mountain from './Mountain';
import Sidebridge from './Sidebridge';
import Plank from './Plank';
import Burpee from './Burpee';
import Community from './Community';
import Section3 from './Section3';
import { useState } from 'react';
import  WriteForm  from './WriteForm';
import RecipeReviewCard from './Card/RecipeReviewCard';
import AllList from './AllList';
import WriteForm2 from './WriteForm2';
import DetailBoard from './DetailBoard';


function App() {
  const  [id, setId] = useState('');
  return (
    <div className="App">
      <Header setId={setId}/>
      <Section3/>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='/benchpress' element={<Benchpress />} />
        <Route exact path='/HealthLearning' element={<HealthLearning />} />
        <Route exact path='/community' element={<Community />} />
        <Route exact path='/chestpress' element={<Chesthpress />} />
        <Route exact path='/peckdeckfly' element={<Peckdeckfly />} />
        <Route exact path='/dips' element={<Dips/>} />
        <Route exact path='/cabelfly' element={<Cabelfly/>} />
        <Route exact path='/dumbbelpress' element={<Dumbbelpress/>} />
        <Route exact path='/squat' element={<Squat/>} />
        <Route exact path='/legextension' element={<Legextension/>} />
        <Route exact path='/legpress' element={<Legpress/>} />
        <Route exact path='/dumbbellunge' element={<Dumbbellunge/>} />
        <Route exact path='/militarypress' element={<Militarypress/>} />
        <Route exact path='/upright' element={<Upright/>} />
        <Route exact path='/side' element={<Side/>} />
        <Route exact path='/sholderpress' element={<Sholderpress/>} />
        <Route exact path='/pullup' element={<Pullup/>} />
        <Route exact path='/letpull' element={<Letpull/>} />
        <Route exact path='/barbellrow' element={<Barbellrow/>} />
        <Route exact path='/cabledown' element={<Cabledown/>} />
        <Route exact path='/seatedrow' element={<Seatedrow/>} />
        <Route exact path='/dead' element={<Dead/>} />
        <Route exact path='/easybar' element={<Easybar/>} />
        <Route exact path='/overhead' element={<Overhead/>} />
        <Route exact path='/concentration' element={<Concentration/>} />
        <Route exact path='/cablepress' element={<Cablepress/>} />
        <Route exact path='/barbelcull' element={<Barbelcull/>} />
        <Route exact path='/cobra' element={<Cobra/>} />
        <Route exact path='/jumping' element={<Jumping/>} />
        <Route exact path='/mountain' element={<Mountain/>} />
        <Route exact path='/sidebridge' element={<Sidebridge/>} />
        <Route exact path='/plank' element={<Plank/>} />
        <Route exact path='/burpee' element={<Burpee/>} />
        <Route exact path='/WriteForm2' element={<WriteForm2/>} />{/*Toast를 뤼네임*/}
        <Route exact path='/RecipeReviewCard/:id' element={<RecipeReviewCard/>} />
        <Route exact path='/AllList' element={<AllList/>} />
        <Route exact path='/DetailBoard/:id' element={<DetailBoard/>} />
      </Routes>
      
    </div>
  );
}

export default App;
