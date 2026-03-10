import { Routes, Route } from 'react-router-dom';
import Restaurant from "./homePage/Restaurant";
import NabataColtd153 from './order/NabataColtd153';
import { TsCorporation } from './order/TsCorporation';
import { FujimatsuColtd } from './order/FujimatsuColtd';
import {Yoshimuratakeshi} from './order/Yoshimuratakeshi';
import { NichibeCoffee } from './order/NichibeCoffee';
import './App.css'
import { Justtoday } from './order/justtoday';


function App() {


  return (
 <Routes>
  <Route path="/" element={<Restaurant/>}/>
  {/* <Route path="/nabata" element={<NabataColtd153/>}/> */}
  {/* <Route path='/tsCorporation' element={<TsCorporation/>}/> */}
  <Route path='/fujimatsu' element={<FujimatsuColtd/>}/>
  {/* <Route path='/try' element={<Trycheckitem/>}/> */}
  {/* <Route path='/yoshimuratakeshi' element={<Yoshimuratakeshi/>}/> */}
    {/* <Route path='/nichibecoffee' element={<NichibeCoffee/>}/> */}
  {/* <Route path='/just-today' element={<Justtoday/>}/> */}

 </Routes>
  )
}

export default App
