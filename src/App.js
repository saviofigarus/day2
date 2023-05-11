
import { Route, Routes } from 'react-router-dom';
import Table from './components/Table';
import NavigationBar from './components/NavigationBar';
import Basics from './components/Basics'
import Table2 from './components/Table2'
function App() {
  return (
    <div>
     <NavigationBar/>
          <Routes>
        <Route path='/' element={<Basics/>}></Route>
        <Route path='/table' element ={<Table/>}></Route>
        <Route path='/ax' element ={<Table2/>}></Route>
      
      </Routes>
    </div>
  );
}

export default App;
 