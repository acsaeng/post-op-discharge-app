import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Login from './login/Login';
import Dashboard from './dashboard/Dashboard';
import UserInfo from './user-info/UserInfo';
import Education from './education/Education';
import Medications from './medications/Medications';
import Messages from './messages/Messages';
import Appointments from './appointments/Appointments';
import Monitoring from './education/Monitoring';
import Proceedure from './education/Proceedure';
import Recovery from './education/Recovery';

function App() {
  return (
    <div style={{height: "100vh"}}>
        <Router>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/user-info' element={<UserInfo/>}/>
                <Route path='/education' element={<Education/>}/>
                <Route path='/education/monitoring' element = {<Monitoring/>}/>
                <Route path='/education/proceedure' element = {<Proceedure/>}/>
                <Route path='/education/recovery' element = {<Recovery/>}/>
                <Route path='/medications' element={<Medications/>}/>
                <Route path='/messages' element={<Messages/>}/>
                <Route path='/appointments' element={<Appointments/>}/>
            </Routes>
        </Router>
    </div>
        
  );
}

export default App;
