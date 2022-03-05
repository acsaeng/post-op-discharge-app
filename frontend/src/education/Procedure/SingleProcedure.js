import React, { useState, useEffect } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../navbar/Navbar';

const SingleProcedure = () => {

    const [procedureId, setProcedureId] = useState('');
    const [links, setLinks] = useState('');

    const [patientId, setPatientId] = useState(8); //This needs to be updated to be dynamic!!!
    // const patientId = urlParams.get("patientId")

    //update the state on change
    function getLinks(val) {
        setLinks(val.target.value)
    }

    // GET all procedures links for a patient
    function GetLinks(){
        useEffect(()=>{
            axios.get('http://localhost:8081//patientId='+patientId+'/education/procedure/links/procedureId='+procedureId).then(
                res => {
                    var singleProcedure = res.data[0]
                    setProcedureId(singleProcedure.procedureId)
                    setLinks(singleProcedure.links)
                })
        },[])
    }

    
    return (
        <div className='h-100'>
            <Navbar />
            <div className="d-flex align-items-center flex-column" style={{marginTop: "15vh"}}>
                <p>Placeholder text for Procedures page!</p>
            </div>
        </div>)
    }

    export default SingleProcedure