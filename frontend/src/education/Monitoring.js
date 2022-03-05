import axios from 'axios';
import React, {useState, useEffect }from 'react'
import Navbar from '../navbar/Navbar'
import MonitoringList from './monitoringComponents/MonitoringList'

const Monitoring = () => {
    const [isLoading, setIsLoading] = useState(true);
    const[patientData, setPatientData] = useState([]);
    const assignerId = window.localStorage.getItem("userId"); 
    const patientId = window.localStorage.getItem("patientId"); 
    const userType = window.localStorage.getItem("userType");


    let url = 'http://localhost:8081/education/monitoring/patient/'+patientId;
    useEffect(()=>{
        fetch(url)
        .then(response =>{
            return response.json()
        }).then((data)=>{
            const entries = [];
            for (const key in data){
                console.log(key);
                const entry ={
                    id: key,
                    ...data[key],
                };
                console.log(entry);
                entries.push(entry); 
            }
            setPatientData(entries);
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
            <section className = 'd-flex align-items-center'>
                {patientData.length>0? <MonitoringList entires = {patientData}/>:<h1 className = 'd-flex align-items-center'>No Monitoring entries for Patient</h1>}
            </section>
        </div>
    )
}

export default Monitoring