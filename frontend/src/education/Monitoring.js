import axios from 'axios';
import React, {useState, useEffect }from 'react'
import Navbar from '../navbar/Navbar'
import MonitoringList from './monitoringComponents/MonitoringList'

const Monitoring = () => {
    const [userView, setUserView] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const[patientData, setPatientData] = useState([]);

    const patientId = 6;//update this later
        useEffect(()=>{
            fetch('http://localhost:8081/education/monitoring/patient/'+patientId)
            .then(response =>{
                return response.json()
            }).then((data)=>{
                const entries = [];
                for (const key in data){
                    const entry ={
                        id: key,
                        ...data[key],
                    };
                    console.log(entry);
                   entries.push(entry); 
                }
                setPatientData(entries);
                console.log(entries)
            }).catch(err => console.log(err));
        },[])

    function LoadAssignerMonitoringData(){
        const assignerId = 2;//update this later
        useEffect(()=>{
            axios.get('http://localhost:8081/education/monitoring/assigner/'+assignerId)
            .then(response =>{
                setPatientData(response.data);
            }).catch(err => console.log(err));
        },[])
    }

    return (
        <div className='h-100'>
            <Navbar />
            <section>
                <MonitoringList entires = {patientData}/>
            </section>
        </div>
    )
}

export default Monitoring