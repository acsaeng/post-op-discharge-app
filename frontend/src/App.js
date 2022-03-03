import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Login from './login/Login';
import Dashboard from './dashboard/Dashboard';
import Education from './education/Education';
import Medications from './medications/Medications';
import Messages from './messages/Messages';
import Appointments from './appointments/Appointments';

function App() {
  return (
    <div style={{height: "100vh"}}>
        <Router>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='dashboard' element={<Dashboard/>}/>
                <Route path='/education' element={<Education/>}/>
                <Route path='/medications' element={<Medications/>}/>
                <Route path='/messages' element={<Messages/>}/>
                <Route path='/appointments' element={<Appointments/>}/>
            </Routes>
        </Router>
    </div>
        
  );
}

export default App;
