

import NavBar from './component/navbar/NavBar.js'
import ListTaiXe from './views/ListTaiXe';
import EditTaiXe from './views/EditTaiXe';
import NewTaiXe from './views/NewTaiXe';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <NavBar/>
        <Router>
          <Routes>
              <Route exact path ="/" element={<ListTaiXe/>} />
              <Route exact path ='/edit/:id' element={<EditTaiXe/>} />
              <Route exact path ='/new' element={<NewTaiXe/>} />
          </Routes>
        </Router>
        
    </div>
  );
}

export default App;
