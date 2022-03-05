import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Login from './login/Login';
import Dashboard from './dashboard/Dashboard';
import UserInfo from './user-info/UserInfo';
import PatientList from './patient-list/PatientList';
import Education from './education/Education';
import Medications from './medications/Medications';
import Messages from './messages/Messages';
import Appointments from './appointments/Appointments';
import Monitoring from './education/Monitoring';
import Procedure from './education/Procedure';
import Recovery from './education/Recovery';

import {createStore, combineReducers} from 'redux';
import { Provider} from 'react-redux';

import loginReducer from './Reducers/loginReducer'

function App() {
//  //Reducer for saving the global state
//     const storeUserId = (state=[0, 0, '']) =>{ return state}
//     const storePatientId = (state=0) =>{return state}
//     const storeUserType = (state='') =>{return state}

//     const allReducers = combineReducers({
//         userId: storeUserId,
//         patientId:storePatientId,
//         userType:storeUserType
//     })

    let store = createStore(loginReducer,  
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  

  return (
    <Provider store={store}>
    <div style={{height: "100vh"}}>
        <Router>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/user-info' element={<UserInfo/>}/>
                <Route path='/patient-list' element={<PatientList/>}/>
                <Route path='/education' element={<Education/>}/>
                <Route path='/education/monitoring' element = {<Monitoring/>}/>
                <Route path='/education/procedure' element = {<Procedure/>}/>
                <Route path='/education/recovery' element = {<Recovery/>}/>
                <Route path='/medications' element={<Medications/>}/>
                <Route path='/messages' element={<Messages/>}/>
                <Route path='/appointments' element={<Appointments/>}/>
            </Routes>
        </Router>
    </div>
    </Provider>
        
  );
}

export default App;
