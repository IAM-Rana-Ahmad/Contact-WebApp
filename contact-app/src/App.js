
import './App.css';
import Home from './pages/Home Page/Home';
import Navbar from './components/Navbar/Navbar';
import AllContacts from './pages/All Contacts/AllContacts';
import Detail from './pages/viewDetail/Detail';
import FilterData from './pages/FilterData/FilterData';
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar/>
        <Routes>
          
          <Route path='/' element={<Home/>}></Route>
          <Route path='/allContacts' element={<AllContacts/>}></Route>
          <Route path='/Detail' element={<Detail/>}></Route>
          <Route path='/filterData' element={<FilterData/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
