import { React, useState } from 'react'
import DataTable from 'react-data-table-component';
import { useNavigate } from "react-router-dom";

import axios from 'axios';

import Navbar from '../navbar/Navbar'

const columns = [
    {
        name: 'ID',
        selector: row => row.userId,
        sortable: true
    },
    {
        name: 'Team',
        selector: row => row.team,
        sortable: true
    },
    {
        name: 'First Name',
        selector: row => row.firstName,
        sortable: true
    },
    {
        name: 'Last Name',
        selector: row => row.lastName,
        sortable: true
    },
    {
        name: 'Sex',
        selector: row => row.sex,
        sortable: true
    },
    {
        name: 'Date of Birth',
        selector: row => row.dob,
        sortable: true
    },
    {
        name: 'Actions',
        selector: row => row.actions
    }
];

const PatientList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [patientData, setPatientData] = useState([]);

    const navigate = useNavigate();

    function clickFunc(patientId){
        console.log('clicked ')
        // navigate("/dashboard?patientId=" + patientId)
    }

    function loadPatientData() {
        if(isLoading) {
            axios.get("http://localhost:8081/patients/red")
            .then(response => {
                let patients = response.data;

                for (let i = 0; i < patients.length; i++) {
                    // patients[i].actions = <a href="/dashboard">Edit Treatment</a>
                    patients[i].actions = <a href={"/dashboard?patientId=" + patients[i].userId} onClick={clickFunc}>Edit Treatment</a>
                    // patients[i].actions = <button onClick={clickFunc(patients[i].userId)}>Edit Treatment</button>
                }
                
                setPatientData(patients);
            }).catch(err => console.log(err));

            setIsLoading(false);
        }
    }

    loadPatientData();

    return (
        <div>
            <Navbar />

            <div className='d-flex flex-column align-items-center mt-5'>
                <h2>Patient List</h2>
        
                <div className='w-50 mt-5'>
                <DataTable
                    columns={columns}
                    data={patientData}
                    defaultSortFieldId={1}
                    pagination />
                </div>
            </div>
        </div>
    )
}

export default PatientList