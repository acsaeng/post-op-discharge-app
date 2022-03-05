
import { React, useState } from 'react'
import DataTable from 'react-data-table-component';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import Navbar from '../navbar/Navbar'

const columns = [
    {
        name: 'ID', selector: row => row.medicineId, sortable: true},
    {
        name: 'Title',selector: row => row.title,sortable: true
    },
    {
        name: 'Dose',selector: row => row.dose,sortable: true
    },
    {
        name: 'Duration',selector: row => row.duration,sortable: true
    },
    {
        name: 'Frequency',selector: row => row.frequency,sortable: true
    },
    {
        name: 'Assigner', selector: row => row.assigner, sortable: true
    },
    {
        name: 'Patient', selector: row => row.assignee,sortable: true
    }
];


var medicines = [{
    ID: 1,
    Title: "Medicine 1",
    Dose: "3 mg",
    Duration: "1 hour",
    Frequency: "2 weeks",
    Assigner: 1,
    Patient: 2
}, {
        ID: 2,
        Title: "Medicine 2",
        Dose: "3 mg",
        Duration: "1 hour",
        Frequency: "2 weeks",
        Assigner: 1,
        Patient: 3
}]

var patients = [{
    ID: 1,
    Name: "Patient 1",
}, {
        ID: 2,
        Name: "Patient 2"
    },
    {
        ID: 3,
        Name: "Patient 3",
    
}]

const Medicine = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [medicineData, setMedicineData] = useState(medicines);
    
    function loadMedicineData() {
        if (isLoading) {
            axios.get("http://localhost:8081/medicine")
                .then(response => {
                    let medicine = response.data;

                    
                    setMedicineData(medicine);
                }).catch(err => console.log(err));

            setIsLoading(false);
        }
    }

    loadMedicineData();


  return (
      <div>
          <Navbar />

          <div className='d-flex flex-column align-items-left mt-3' >
              <Dropdown>
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                      Select Patient
            </Dropdown.Toggle>

                  <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Patient 1</Dropdown.Item> 
                      <Dropdown.Item href="#/action-2">Patient 2</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Patient 3</Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
          </div>

        <div className='d-flex flex-column align-items-center mt-3'>
          <h2>Medicines</h2>



              <div className='w-50 mt-5'>
                  <DataTable columns={columns}
                      data={medicineData}
                  defaultSortFieldId={1}
                      pagination

                  />
              </div>




        <Form>
            <Form.Group className="mb-3" controlId="formBasic">
                <Form.Label>Name</Form.Label>
                <Form.Select type="basic" placeholder="Medication Name" >
                      <option>Medicine 1</option>
                      <option>Medicine 2</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
                <Form.Label>Dose</Form.Label>
                <Form.Control type="basic" placeholder="Dosage" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
                <Form.Label>Duration</Form.Label>
                <Form.Control type="basic" placeholder="Duration" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
                <Form.Label>Frequency</Form.Label>
                <Form.Control type="basic" placeholder="Frequency" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Add
            </Button>
            <Button variant="primary" type="submit">
                Remove
            </Button>
            <Button variant="primary" type="submit">
                Update
            </Button>


          </Form>
          </div>
          </div>
  )
}

    export default Medicine